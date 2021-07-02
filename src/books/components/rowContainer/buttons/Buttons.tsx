import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "./Buttons.style.css";

import actions from "../../../redux/actions";

class Buttons extends Component<any, any> {
  theme = createMuiTheme({
    palette: {
      secondary: {
        main: "#BA181B",
      },
    },
  });

  onRemove = () => {
    this.props.remove(this.props.book);
  };

  onEdit = () => {
    this.props.startEditing(this.props.book);
  };

  onComplete = () => {
    this.props.complete(this.props.book);
  };
  onInfo = () => {
    this.props.info(this.props.book);
  };

  render() {
    return (
      <div className="buttons-container">
        <MuiThemeProvider theme={this.theme}>
          <Fab
            className="fab-edit custom-icon"
            onClick={this.onEdit}
            size="small"
            color="secondary"
            aria-label="edit"
          >
            <EditIcon />
          </Fab>
          <Fab
            className="fab-delete custom-icon"
            onClick={this.onRemove}
            size="small"
            color="secondary"
            aria-label="edit"
          >
            <DeleteIcon />
          </Fab>
          <Fab
            className="fab-done-icon custom-icon"
            onClick={this.onComplete}
            size="small"
            color="secondary"
            aria-label="done"
          >
            <DoneIcon />
          </Fab>
          <Fab
            className="fab-info-icon custom-icon"
            onClick={this.onInfo}
            size="small"
            color="secondary"
            aria-label="done"
          >
            <AnnouncementIcon />
          </Fab>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  remove: (book: any) => dispatch(actions.remove(book)),
  complete: (book: any) => dispatch(actions.complete(book)),
  startEditing: (book: any) => dispatch(actions.startEditing(book)),
  stopEditing: (book: any) => dispatch(actions.stopEditing(book)),
  info: (book: any) => dispatch(actions.info(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
