import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import Buttons from "./buttons/Buttons";
import "./RowContainer.style.css";
import UpdateFrom from "../updateForm/UpdateForm";

class RowContainer extends Component<any, any> {
  render() {
    return this.props.books.list.map((book: any, index: number) => {
      if (book.isEditing) {
        return <UpdateFrom book={book} />;
      }
      if (book.isCompleted) {
        return (
          <div className="todo-row full complete" key={index}>
            <div className="todo-text">{book.Name}</div>
          </div>
        );
      } else if (book.showInfo) {
        return (
          <div className="todo-row full" key={index}>
            <div className="todo-text">
              <p>{book.Name}</p>
              <p>{book.Author}</p>
              <p>{book.Publisher}</p>
            </div>
            <Buttons book={book} />
          </div>
        );
      } else {
        return (
          <div className="todo-row full" key={index}>
            <div className="todo-text">{book.Name}</div>
            <Buttons book={book} />
          </div>
        );
      }
    });
  }
}

const mapStateToProps = (state: any) => ({
  books: state.books,
});
const mapDispatchToProps = (dispatch: any) => ({
  remove: (todo: any) => dispatch(actions.remove(todo)),
  complete: (todo: any) => dispatch(actions.complete(todo)),
  startEditing: (todo: any) => dispatch(actions.startEditing(todo)),
  stopEditing: (todo: any) => dispatch(actions.stopEditing(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RowContainer);
