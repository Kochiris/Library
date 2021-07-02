import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import "./AddForm.style.css";

export class AddForm extends Component<any, any> {
  public bookName: any = React.createRef();
  public bookAuthor: any = React.createRef();
  public bookPublisher: any = React.createRef();

  addBook = (event: any) => {
    event.preventDefault();
    if (
      !this.bookName.current.value ||
      /^\s*$/.test(this.bookName.current.value) ||
      !this.bookAuthor.current.value ||
      /^\s*$/.test(this.bookAuthor.current.value)
    ) {
      this.bookName.current.value = "";
      this.bookAuthor.current.value = "";
      this.bookPublisher.current.value = "";
      return;
    }

    this.props.add({
      Name: this.bookName.current.value,
      Author: this.bookAuthor.current.value,
      Publisher: this.bookPublisher.current.value,
    });

    this.bookName.current.value = "";
    this.bookAuthor.current.value = "";
    this.bookPublisher.current.value = "";
  };

  render() {
    return (
      <form className="book-form" onSubmit={this.addBook}>
        <div className="input-container">
          <input
            className="book-input"
            placeholder="Book Name"
            type="text"
            ref={this.bookName}
          />
          <input
            className="book-input"
            placeholder="Author"
            type="text"
            ref={this.bookAuthor}
          />
          <input
            className="book-input"
            placeholder="Publisher"
            type="text"
            ref={this.bookPublisher}
          />
          <button className="book-button" type="submit">
            Add Book
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  add: (book: any) => dispatch(actions.add(book)),
});
const mapStateToProps = (state: any) => ({
  books: state.books,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
