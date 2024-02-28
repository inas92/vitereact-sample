/* eslint-disable react/prop-types */
//import React from 'react'
import Demobox from "./Demobox.jsx";
import "./Boxcontainer.css";
import { icon1, icon2, icon3, icon4 } from "../../assets/index";

const Boxcontainer = () => {
  return (
    <div className="boxclass">
      <div className="box1">
        <Demobox
          icon={icon1}
          number="1"
          text1="Phasellus Vitae"
          text2="Quisque"
          text3="Porttitor vitae vel amet "
          color="#ffffff"
        />
      </div>
      <div className="box2">
        <Demobox
          icon={icon2}
          number="2"
          text1="Iaculis Magna"
          text2="Porttitor"
          text3="neque scelerisque mattis. "
          color="#F9B800"
        />
      </div>
      <div className="box3">
        <Demobox
          icon={icon3}
          number="3"
          text1="Eleifend Pulvinar "
          text2="Vitae"
          text3="Consectetur nibh velit "
          color="#ffffff"
        />
      </div>

      <div className="box4">
        <Demobox
          icon={icon4}
          number="4"
          text1="Velit Odio Phir"
          text2="Ametneq"
          text3="magna consectetur leo. "
          color="#F9B800"
        />
      </div>
    </div>
  );
};

export default Boxcontainer;