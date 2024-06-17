import React, { useState } from 'react';
import '../styles/faqpage.css';
import { plusIcon } from '../assets';

const FaqPage = () => {

    const [faqData, setFaqData] = useState([
        {
            question: "Why should I subscribe to your newsletter?",
            answer: "Buckle up, because this newsletter is your express ticket to a world of non-stop fun, wit, and unexpected insights. We're talking content that's more exciting than a rollercoaster ride and more captivating than a Netflix binge. Trust us, you won't want to miss out!"
        },
        {
            question: "Can I get a refund if I'm not satisfied with the newsletter?",
            answer: "We're confident that once you're in, you're in for the long haul. However, if you find yourself in the rare position of wanting to unsubscribe, know that our virtual door is always open. No hard feelings, just a warm invitation to rejoin us whenever you're ready for another round of not-boring content!"
        },
        {
            question: "How often will I receive the newsletter?",
            answer: "We're all about keeping things fresh and unexpected. Just when you think you've got us figured out, we'll surprise you with a delightful dose of not-boring goodness. So, expect us to pop up when you least expect it, like your favorite party guest who knows exactly when to make an entrance!"
        },
        {
            question: "Is there a secret handshake for newsletter subscribers?",
            answer: "While we can't divulge the exact details, we can confirm that our subscribers are part of an exclusive club of exceptional taste and wit. You'll know it when you see it - a subtle nod, a knowing wink, and you're in on the Not Boring secret!"
        }
    ])
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
