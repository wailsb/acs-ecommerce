"use client";
import React, { useState } from "react";

// Mock FAQ Data
const faqData = [
  {
    id: 1,
    question: "How do I place an order?",
    answer:
      "To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the steps to enter your shipping and payment details.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and other secure payment methods.",
  },
  {
    id: 3,
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website.",
  },
  {
    id: 4,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund or exchange. Please ensure the item is in its original condition.",
  },
  {
    id: 5,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on your location.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  // Toggle answer visibility
  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl text-[var(--text)] font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggleAnswer(faq.id)}
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-[var(--text)]">{faq.question}</span>
              <span className="text-xl text-[var(--text)]">
                {activeId === faq.id ? "-" : "+"}
              </span>
            </button>
            {activeId === faq.id && (
              <div className="p-4 border-t text-[var(--bg)]">
                <p className="text-[var(--text)]">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;