

import { useState ,  useRef, useEffect } from "react";
import "./Faqsection.css";

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      // Set the height of faq-item based on the height of faq-answer
      const answerHeight = answerRef.current.scrollHeight;
      answerRef.current.style.height = `${answerHeight}px`;
    } else {
      // Reset the height when closing
      answerRef.current.style.height = '0';
    }
  }, [isOpen]);
 
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>

        <div className="addicon" >
          {isOpen ? "-" : "+"}
        </div>
      </div>
     
     
     <div className="faq-answer" ref={answerRef} >{answer}</div>
    </div>
  );
};

const Faqsection = () => {
  const faqData = [
    {
      question: "Quam vehicula faucibus amet lorem. ",
      answer:
        "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
      question: "Pellentesque tempus sed phasellus vel. ",
      answer:
        "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
      question:
        "Mauris fermentum praesent tellus euismod pellentesque urna ac massa in. ",
      answer:
        "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
      question:
        "Mauris fermentum praesent tellus euismod pellentesque urna ac massa in. ",
      answer:
        "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
      question:
        "Pellentesque tempus sed phasellus vel.",
      answer:
        "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
      question:
        "Mauris fermentum praesent tellus euismod pellentesque urna ac massa in. ",
      answer:
        "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
  ];

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faqsection;
