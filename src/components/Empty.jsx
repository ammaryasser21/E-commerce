import React from 'react'
import './css/Empty.css';
const Empty = ({name}) => {
  return (
  <div className="empty-icon">
    <span style={{ fontSize: '100px', color: '#f90' }}><i className="fa fa-shopping-basket "></i></span>
    <h5>{name}</h5>
    
  </div>
  )
}

export default Empty