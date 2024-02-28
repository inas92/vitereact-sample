import { useState } from "react";
import "./Demobutton.css";

// eslint-disable-next-line react/prop-types
const Demobutton = ({ bgColor, shadowColor, textColor , icon}) => {
  const [isHovered, setIsHovered] = useState(false);
 
  const label = "Loren Ipsum";
  const buttonStyle = {
    backgroundColor: bgColor,
    color:textColor,
    boxShadow: isHovered ? `9px 9px 0px ${shadowColor}` : "none",
  };
  
  return (
    <>
      <button
        className="demo-btn"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="button-text" > {label}</span>
        <img className="arrow-icon" src={icon} alt="arrow" />
      </button>
    </>
  );
};

export default Demobutton;

/*<span className="hover-overlay" style={hoverStyle}></span>*/
/*const hoverStyle = {
    boxShadow: `9px 9px 0px ${shadowColor}`,
    border: `2px solid  ${shadowColor}`,
  };*/