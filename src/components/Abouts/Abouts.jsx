//import React from 'react'
import "./Abouts.css";
import Demobutton from "../Demobutton/Demobutton";
import Boxcontainer from "../Demobox/Boxcontainer";
import { arrow } from "../../assets";
const Abouts = () => {
  return (
    <div className="wrapper-about">
      <div className="text-about">
        <p className="detail">
          Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur
          nibh velit magna consectetur leo.
        </p>
        <p className="cursor">Cursus Integer Conseq Aliquam Tristique.</p>
        <Demobutton
          bgColor="#FFFFFF"
          shadowColor="#F9B800"
          textColor="#262626"
          icon={arrow}
          place="600px"
        />
      </div>

      <Boxcontainer />
    </div>
  );
};

export default Abouts;
/*   <div className="boxclass">
      <div className="box1">
          <Demobox color="#ffffff">
             <p>This is some content in a white box.</p>
          </Demobox>
        </div>
        <div className="box2">
          <Demobox color="#F9B800">
              <p>This is some content in a white box.</p>
          </Demobox>
        </div>
        <div className="box3">
          <Demobox color="#ffffff">
            <p>This is some content in a white box.</p>
          </Demobox>
        </div>
        <div className="box4">
          <Demobox color="#F9B800">
              <p>This is some content in a white box.</p>
          </Demobox>
        </div>
      </div>*/
