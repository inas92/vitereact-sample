//import React from 'react'
import "./Detail.css";
import Demobutton from "../Demobutton/Demobutton";
import Pills from "../Pills/Pills";
import { arrow2, draw3 } from "../../assets/index";
const Detail = () => {
  return (
    <div className="detail-wrapper">
      <div className="detail-text">
        <div>
          <p className="title">Cursus Integer</p>
          <p className="title">consequat Tristique.</p>
        </div>
        <div className="pillframe">
              <Pills text="Ac viverra sed risus praesent vulputate. " wide="452px"/>
              <Pills text="Natoqu consectetur pulvinar." wide="360px"/>
          
            <Pills text="Sollicitudin ornare tempus nulla varius pulvinar." wide="528px"/>
          
          <div className="firstrow">
            <Pills text="Varius pulvinar" wide="232px"/>
              <Pills text="Natoque id tellus consectetur" wide="365px"/>
              
          </div>
          <Pills text="Vulputate et vulputate suspendisse" wide="415px"/>
          </div>
        <Demobutton
          bgColor="#262626"
          shadowColor="#FFFFFF"
          textColor="#FFFFFF"
          icon={arrow2}
          place="400px"
        />
      </div>
      <div className="detail-image">
        <img src={draw3} alt="image" />
      </div>
    </div>
  );
};

export default Detail;

/*   <div >
          <p className="title">Cursus Integer</p> 
          <p className="title">consequat Tristique.</p>
        </div>*/
