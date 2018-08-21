import React from 'react'
import {Link} from 'react-router-dom' 

class FullNote extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        console.log(this.props)
        const title = this.props.ct;
        const content = this.props.cc;
        const index = this.props.index;  
        return (
          <div className = "create-note-form ">
            <div className = "full-note-header">
              <Link to = {`/${this.props.match.params.id}/edit-note`} ><h6>edit</h6></Link>
              <h6>delete</h6>
            </div>
            <div className = "content-div">
              <h3>{title}</h3> 
              <p>{content}</p>
            </div>
          </div>
        
        )
    }
}

export default FullNote; 