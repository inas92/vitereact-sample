//import React from 'react'

import Faqsection from "../Faqsection/Faqsection";
import './Faqcontainer.css';

const Faqcontainer = () => {
  return (
    <div className="faq">
      <div className="faqwrapper">
        <div className="faqheading">
          <p className="head1">Phasellus a vitae iaculis magna.</p>
          <p className="head2">
            Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
          </p>
          <Faqsection />
        </div>
      </div>
    </div>
  );
};

export default Faqcontainer;
