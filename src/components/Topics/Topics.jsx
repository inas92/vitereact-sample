//import React from "react";
import "./Topics.css";
import Demobutton from "../Demobutton/Demobutton";
import { arrow2, draw2 } from "../../assets/index";

const Topics = () => {
  return (
    <div className="wrapper-topic">
      <div className="text-topic">
        <p className="block">
          Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
        </p>

        <p className="block-topic">
          <h4>Vulputate et vulputate suspendisse natoque!</h4>
          Euismod magna id purus eget nunc ligula suspendisse dui
          netus.Condimentum blandit rutrum at mauris enim pulvinar duis etiam
          duis vulputate et vulputate suspendisse natoque id tellus consectetur
          pulvinar et.
        </p>

        <Demobutton
          bgColor="#262626"
          shadowColor=" #FFFFFF"
          textColor="#FFFFFF"
          icon={arrow2}
        />
      </div>

      <img className="draw1" src={draw2} alt="image" />
    </div>
  );
};

export default Topics;
