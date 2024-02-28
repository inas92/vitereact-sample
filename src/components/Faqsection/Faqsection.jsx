import {useState} from 'react'

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="faq-item">
        <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
          <span>{question}</span>
          {isOpen ? ' -' : ' +'}
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
      </div>
    );
  };
  
  const Faqsection= () => {
    const faqData = [
      { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
      { question: 'How does React differ from other frameworks?', answer: 'React is focused on building user interfaces in a declarative way, making it more predictable and easier to understand.' },
      { question: 'Can I use React for mobile app development?', answer: 'Yes, React Native allows you to build mobile applications using React and native components.' },
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