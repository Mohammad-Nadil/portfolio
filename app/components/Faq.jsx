"use client";
import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express, React, Node.js) along with Next.js and Tailwind CSS for building high-performance web applications. My focus is on creating scalable architectures with editorial-grade user interfaces.",
  },
  {
    question: "Do you take on freelance projects?",
    answer:
      "Yes, I am available for freelance opportunities ranging from single-page landing pages to complex full-stack web applications. I prefer projects that challenge the status quo of digital experiences.",
  },
  {
    question: "How can we start a project together?",
    answer:
      "You can reach out via the contact form or email me directly. I usually respond within 24 hours to discuss project details, technical requirements, and potential timelines.",
  },
  {
    question: "Are you open to full-time remote positions?",
    answer:
      "Absolutely! I am always looking for exciting opportunities to contribute to innovative teams globally. I thrive in asynchronous environments that value code quality and design precision.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20">
      <Container className={`max-w-4xl! `}>
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <Header text="FAQs" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight  ">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-secondary text-lg max-w-lg mx-auto">
            Transparent insights into my creative process, technical stack, and
            professional availability.
          </p>
        </div>
        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <button
              onClick={() => toggleAccordion(index)}
              key={index}
              className="text-left bg-black/2 dark:bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300"
            >
              <div
                className="flex justify-between items-center w-full px-6 py-4  text-left   hover:text-accent transition-colors font-semibold sm:text-lg"
              >
                {item.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  } text-accent text-2xl`}
                >
                  +
                </span>
              </div>
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-200 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-secondary  leading-relaxed">{item.answer}</p>
              </div>
            </button>
          ))}
        </div>
        {/* Action Section */}
        <div className="mt-16 py-5 sm:py-8 md:py-6  px-6 lg:px-12 text-center md:text-left rounded-2xl bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold  ">
              Still have questions?
            </h4>
            <p className="text-secondary 300">
              I'm just a few clicks away from starting our next big thing.
            </p>
          </div>
          <button className="bg-accent text-white  font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform active:scale-95">
            Drop a Message
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
