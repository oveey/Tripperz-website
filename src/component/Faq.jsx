import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../styles/faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What countries do you process visas for ?",
      answer:
        " We process visas for multiple countries worldwide based on the specific requests of a client. Our top destinations include the UK, USA, Canada, Australia and South Africa.",
    },
    {
      question: "What visa packages do you offer ?",
      answer:
        "The visa packages we offer include tourist, study and work packages. We also curate vacation tours for multiple tourist destinations.",
    },
    {
      question:
        "I don’t know much about travels, can I still start my travel journey ?",
      answer:
        "Yes, you can. We have multiple travel representatives to help assist you with your travel process and free consultation is available for both first-time and returning clients.",
    },
    {
      question:
        "I’ve been denied previously, will this be a hindrance in my visa processing?",
      answer:
        "Although this may be something to worry about, with us, you have nothing to fear. Our visa officer is efficient and highly skilled and we have positive success rates with clients that reapply..",
    },
  ];

  return (
    <div className="faq__section" id="faq">
      <div className="faq__header" data-aos="fade-up" data-aos-duration="3000">
        <h1>Frequently asked questions</h1>
        <p>Everything you need to know about the product and billing.</p>
      </div>

      {faqData.map((item, index) => (
        <div
          className="faq-item"
          key={index}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <FontAwesomeIcon
              icon={activeIndex === index ? faChevronUp : faChevronDown}
            />
          </div>
          {activeIndex === index && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
