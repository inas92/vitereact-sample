//import React from 'react'
import "./Footer.css";
import Demobutton from "../Demobutton/Demobutton";
import { arrow } from "../../assets/index";
const Footer = () => {
  return (
    <div className="footcontainer">
      <div className="footer-wrapper">
        <div className="footdetail">
          <p className="footheader">
            Vulputate et pulvinar ethre Suspendisse tellus consecteur
          </p>
          <div className="footbtn">
          <Demobutton
            bgColor="#F9B800"
            shadowColor="#262626"
            textColor="#262626"
            icon={arrow}
            place="60px"
          />
          </div>
        </div>

        <div className="copyright">
          <p className="copy1">Copyright © 2022 Lorem Ipsum.</p>
          <p className="copy2">Privacy Policy | Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
