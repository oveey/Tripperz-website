import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Our web development services range from building responsive and interactive websites to creating powerful web applications. We use the latest technologies to ensure your online presence is robust, user-friendly, and visually appealing.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We craft distinctive brand identities that accurately reflect your business's essence, resonate with your target audience, and drive sustainable growth",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Whether you need a native or cross-platform mobile application, we have the expertise to deliver high-performance mobile solutions. Our apps are designed to provide a seamless user experience and drive engagement.",
    },
    {
      question: "How does billing work?",
      answer:
        "Our digital marketing services are designed to increase your online visibility and drive traffic to your website. We offer SEO, SEM, social media marketing, email marketing, and content marketing to help you reach your target audience effectively.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Unlock the potential of artificial intelligence with our AI and machine learning services. We develop intelligent solutions that enhance decision-making, automate processes, and provide deep insights into your data.",
    },
  ];

  return (
    <div className="faq__section">
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
