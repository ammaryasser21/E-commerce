import React from 'react'
import "./css/Title.css"
const Title = (props) => {
  return (
    <div className="Title">
        <h1 className="h1"> {props.title} </h1>
      </div>
  )
}

export default Title