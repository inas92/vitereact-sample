//import React from 'react';
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Demobutton from "../Demobutton/Demobutton";
import Pills from "../Pills/Pills";
import { draw, arrow } from "../../assets/index";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
      <Navbar/>      
        <div className="text-block1">
          <p className="sec">RISUS PRESENT VULPJUATE</p>
          <div className="section">
            <p className="text">Cursus Integer Consequent Tristique</p>
          </div>
          <div className="pillframe">
            <div className="firstrow">
              <Pills text="Cursus Integer" wide="229px"/>
              <Pills text="Integer Consequat" wide="265px"/>
            </div>
            <div className="firstrow">
            <Pills text="Tellus Euismod Pellentesque" wide="352px"/>
              <Pills text="Aliquot Tristique" wide="247px"/>
              
          </div>
          <div className="firstrow">
            <Pills text="Pellentesque Tempus" wide="288px"/>
              <Pills text="Mauris Fermentum Praesent" wide="356px"/>
              
          </div>
          </div>
          <Demobutton
            bgColor="#F9B800"
            shadowColor="#262626"
            textColor="#262626"
            icon={arrow}
          />
        </div>
        <img className="draw1" src={draw} alt="image" />
      </div>
    </header>
  );
};

export default Header;
/*<div className="pillsection">
            <div className="firstrow">
            <Pill text="Cursus Integer" />
            <Pill text="Integer Consequat " />
            </div>
            <Pill text="" />
            <Pill text="Tellus Euismod Pellentesque" />
          </div>*/
