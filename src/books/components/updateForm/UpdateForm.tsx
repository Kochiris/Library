import React, { Component } from "react";
import actions from "../../redux/actions";
import { connect } from "react-redux";
import "./UpdateForm.style.css";
import "../addForm/AddForm.style.css";

class UpdateFrom extends Component<any, any> {
  public InputName: any = React.createRef();
  public InputAuthor: any = React.createRef();
  public InputPublisher: any = React.createRef();

  constructor(props: any) {
    super(props);
    this.state = {
      inputName: props.book.Name,
      inputAuthor: props.book.Author,
      inputPublisher: props.book.Publisher,
    };
  }

  editTodo = (event: any) => {
    event.preventDefault();
    if (
      !this.InputName.current.value ||
      /^\s*$/.test(this.InputName.current.value)
    ) {
      this.InputName.current.value = "";
      return;
    }

    this.props.stopEditing({
      Name: this.InputName.current.value,
      Author: this.InputAuthor.current.value,
      Publisher: this.InputPublisher.current.value,
      Id: this.props.book.Id,
    });
    this.InputName.current.value = "";
    this.InputAuthor.current.value = "";
    this.InputPublisher.current.value = "";
  };

  onInputName = (event: any) => {
    this.setState({ inputName: event.target.value });
  };
  onInputAuthor = (event: any) => {
    this.setState({ inputAuthor: event.target.value });
  };

  onInputPublisher = (event: any) => {
    this.setState({ inputPublisher: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.editTodo}>
        <div className="input-container">
          <input
            className="book-input edit"
            placeholder="Book Name"
            value={this.state.inputName}
            ref={this.InputName}
            onInput={this.onInputName}
          />
          <input
            className="book-input edit"
            placeholder="Author"
            value={this.state.inputAuthor}
            ref={this.InputAuthor}
            onInput={this.onInputAuthor}
          />
          <input
            className="book-input edit"
            placeholder="Publisher"
            value={this.state.inputPublisher}
            ref={this.InputPublisher}
            onInput={this.onInputPublisher}
          />

          <button className="book-button edit" type="submit">
            Update
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  stopEditing: (book: any) => dispatch(actions.stopEditing(book)),
});

const mapStateToProps = (state: any) => ({
  books: state.books,
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFrom);
