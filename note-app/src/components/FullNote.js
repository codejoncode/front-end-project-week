import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./side-bar";

class FullNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const title = this.props.select.title;
    const content = this.props.select.textBody;
    const index = this.props.select.index;
    const select = this.props.select;
    const tags = this.props.select.tags.split(",");
    //const tags = this.props.select.tags
    return (
      <div className="main-container">
        <SideBar />
        <div className="create-note-form ">
          <div className="full-note-header">
            <Link
              to={{
                pathname: `/${this.props.match.params.id}/edit-note`,
                state: { select, title, content, index }
              }}
            >
              <h6>edit</h6>
            </Link>
            <Link
              to={{
                pathname: `/${this.props.match.params.id}/delete-note`,
                state: { select, title, content, index }
              }}
            >
              <h6>delete</h6>
            </Link>
          </div>
          <div className="content-div">
            <h3>{title}</h3>
            <p>{content}</p>
            <br />
            <br />
            <br />
            <h5>Note Tags:</h5>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FullNote;
