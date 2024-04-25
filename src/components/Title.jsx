import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Title.css";

const Title = ({ title, cat,type }) => {
  return (
    <div className="Title">
      <h1 className="h1">{!cat ? title : cat.toUpperCase()}</h1>
      <p>
        <Link className='home' to="/">HOME</Link><span className='s1'>/</span>
        <Link className='title1' to="*">{title}</Link>
        {type && <><span className='s2'>/</span>{type.toUpperCase()}</>}
      </p>
    </div>
  );
}

export default Title;
