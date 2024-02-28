//import React from 'react'
import "./Testimonial.css";
import {test1} from "../../assets/index";
const Testimonial = () => {
  return (
    <div className="testimonial-wrapper">
        <div className="test-frame">
        <div className="test-image">
            <img src={test1} alt="image" />

        </div>
        <div className="description">
            <h3 className="heading">What our customers thought?</h3>
            <p className="content">Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. </p>
            <p className="by">Holly Davidson</p>
        </div>
        </div>
    </div>
  )
}

export default Testimonial