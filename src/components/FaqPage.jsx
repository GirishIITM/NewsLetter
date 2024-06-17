import React, { useState } from 'react';
import '../styles/faqpage.css';
import { plusIcon } from '../assets';

const FaqPage = () => {

    const [faqData, setFaqData] = useState([
        {
            "question": "Why should I subscribe?",
            "answer": "We deliver all OSINT community updates in your inbox for free. Our editor wastes his time, so that you can save your time from scrolling the social media in the name of staying updated with OSINT community."
        },
        {
            "question": "Who should subscribe?",
            "answer": "Anyone interested in OSINT will love our newsletter. Subscribe for free to receive our Wednesday Updates and Top 10 Series, and learn about new paid subscriber content in the future."
        },
        {
            "question": "Do you have paid subscriptions?",
            "answer": "As of today, we don’t offer any paid subscription, you can read all our posts for free. We have plans to launch a paid subscription in future, but your favorite series, Wednesday Updates and Top 10 Series will still be free. We will be introducing some new type of content for our lovely paid subscribers."
        },
        {
            "question": "Do you allow guest posting?",
            "answer": "We don't currently accept guest posts, but if you're interested, contact dheerajydv19@proton.me."
        },
        {
            "question": "Do you accept sponsorships?",
            "answer": "Yes, we accept sponsorships from companies offering products or services relevant to our OSINT audience. Email your proposal with details and budget to dheerajydv19@proton.me."
        }
    ]);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq">
            <h1 className="faq_title">FAQ</h1>
            <p className="faq_subtitle">The answers to the most frequently asked questions</p>
            <div className="faq_container">
                {faqData.map((item, index) => (
                    <div key={index} className="faq_item">
                        <div className="faq_question" onClick={() => toggleFAQ(index)}>
                            <span>{item.question}</span>
                            <img style={{
                                transition: 'transform 0.3s',
                                zIndex: 1,
                                transform: (() => {
                                    const isActive = activeIndex === index;
                                    if (isActive) {
                                        return 'rotate(45deg)';
                                    }
                                    return 'rotate(0deg)';
                                })()
                            }}
                                width='30px' src={plusIcon} alt="" />
                        </div>
                        <div className="faq_answer"
                            style={{
                                height: activeIndex === index ? 'auto' : '0px',
                                // opacity: activeIndex === index ? 1 : 0,
                                overflowY: activeIndex === index ? 'visible' : 'hidden',
                                padding: activeIndex === index ? '10px' : '0px',
                                transition: 'all 0.3s',
                                marginBottom: activeIndex === index ? '10px' : '0px',
                                top: activeIndex === index ? '10px' : '0px',
                            }}
                        >{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default FaqPage;
