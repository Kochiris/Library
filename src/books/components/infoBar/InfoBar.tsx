import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./button/Button";
import RowContainer from "../rowContainer/RowContainer";
import "./InfoBar.style.css";
export class InfoBar extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
  }

  //   state={show:false}
  showDiv = () => {
    this.setState({ show: !this.state.show });

    console.log(this.props.books.list.length);
  };

  render() {
    return (
      <div>
        <div className="infoBar">
          <p>
            Borrowed books: {this.props.books.list.length}, Returned books:{" "}
            {this.props.books.returnedBooks}
          </p>

          <Button />
        </div>

        <div className={this.props.books.Show ? "show" : "hide"}>
          <RowContainer></RowContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  books: state.books,
});



export default connect(mapStateToProps, null)(InfoBar);
