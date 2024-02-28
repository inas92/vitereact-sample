

//import React from 'react'
import "./Pills.css";
import {icon} from "../../assets/index";
// eslint-disable-next-line react/prop-types
const Pills = ({text , wide}) => {
  const pillStyle={
      width: wide,
  };
  return (
    <div className="pill" style={pillStyle}>
        <img className="pillicon" src={icon} alt="icon" />
        <span className="pilltext">{text}</span>
    </div>
  )
}

export default Pills;