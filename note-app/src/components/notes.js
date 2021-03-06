import React, { Component } from "react";
import { Link } from "react-router-dom";
import Note from "./Note";
import SideBar from "./side-bar";
import styled from 'styled-components';

const ViewNotes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 20px;
  background: #f2f1f2;
  width: 435px;
  max-width: 100%;
`;

class ViewAllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    const notes = this.props.notes;
    
    return (
      <div className="main-container">
        <SideBar />
        <ViewNotes id="columns" className="create-note-form view-notes">
          <h3 className="your-notes">Your Notes: </h3>
          {notes.map((note, i) => (
            <Link to={`/${note.title}`} key={i}>
              <Note
                key={note.id}
                index={i}
                title={note.title}
                content={note.textBody}
                click={this.props.click}
                tags={note.tags}
              />
            </Link>
          ))}
          <div />
        </ViewNotes>
      </div>
    );
  }
}

export default ViewAllNotes;
