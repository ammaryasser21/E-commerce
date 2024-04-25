import React from 'react'
import { Link } from "react-router-dom";
import "./css/NotFound.css"
const NotFound = () => {
  return (
<div className="empty-icon">
          <span style={{ fontSize: '170px', color: '#f90' }}><p>4</p><i className="fa fa-heart-crack "></i><p>4</p></span>
          <h1>That Page Can’t be found.</h1>
          <p>It looks like nothing was found at this location.</p>
          <Link to={{ pathname: "/"}}>
            <button className="m-3 btn-O">Go to back</button>
          </Link>
        </div>
  )
}

export default NotFound