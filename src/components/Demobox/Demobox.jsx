import {useState} from "react";
import "./Demobox.css";
// eslint-disable-next-line react/prop-types
const Demobox = ({ icon, number, text1, text2, text3, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const boxStyle = {
    backgroundColor: isHovered ? '#080809' : color,
  };
  return (
    <div
      className="box"
      style={boxStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="icon">
        <img src={icon} alt="Icon" />
      </div>
      <div className="num">{number}</div>

      <p className="text1">{text1}</p>
      <p className="text2">{text2}</p>
      <p className="text3">{text3}</p>
    </div>
  );
};

export default Demobox;
/* const handleHover = () => {
    boxStyle.backgroundColor = "#000000"; // Change to black on hover
  };

  const handleLeave = () => {
    boxStyle.backgroundColor = color || "#ffffff"; // Reset to original color on leave
  };
     onMouseEnter={handleHover}
      onMouseLeave={handleLeave}*/