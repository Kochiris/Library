import React, { Component } from "react";
import { connect } from "react-redux";
import { createMuiTheme, Fab } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import actions from "../../../redux/actions";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
export class Button extends Component<any, any> {
  theme = createMuiTheme({
    palette: {
      secondary: {
        main: "#38AECC",
      },
    },
  });

  onShow = () => {
    this.props.show();
  };
  render() {
    if (this.props.books.Show) {
      return (
        <div className="nonor">
          <MuiThemeProvider theme={this.theme}>
            <Fab
              onClick={this.onShow}
              className="fab-down "
              size="small"
              color="secondary"
              aria-label="Show Books"
            >
              <ArrowUpwardIcon className="arrow up" />
            </Fab>
          </MuiThemeProvider>
        </div>
      );
    } else {
      return (
        <div className="nonor">
          <MuiThemeProvider theme={this.theme}>
            <Fab
              onClick={this.onShow}
              className={"fab-down "}
              size="small"
              color="secondary"
              aria-label="Show Books"
            >
              <ArrowDownwardIcon className="arrow down" />
            </Fab>
          </MuiThemeProvider>
        </div>
      );
    }
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
  show: () => dispatch(actions.show()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
