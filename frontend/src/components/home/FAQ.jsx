import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   FAQ CSS — MERGED INSIDE JSX
========================================================= */

const FAQ_CSS = `

/* =========================================================
   FAQ SECTION
========================================================= */

.faq-section {
  width: 100%;
  background: #ffffff;
  padding: 80px 20px;
}


/* =========================================================
   MAIN CONTAINER
========================================================= */

.faq-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}


/* =========================================================
   TWO COLUMN LAYOUT
========================================================= */

.faq-layout {
  display: grid;

  grid-template-columns: 0.8fr 1.2fr;

  align-items: start;

  gap: 64px;
}


/* =========================================================
   LEFT
========================================================= */

.faq-left {
  position: sticky;

  top: 96px;

  height: fit-content;
}


/* =========================================================
   HEADING
========================================================= */

.faq-heading {
  margin-top: 20px;

  max-width: 600px;

  font-family: "DM Sans", sans-serif;

  font-size: 72px;

  font-weight: 500;

  line-height: 0.95;

  letter-spacing: -0.04em;

  color: #000000;
}

.faq-heading-main {
  color: #000000;
}

.faq-heading-muted {
  color: rgba(0, 0, 0, 0.6);
}


/* =========================================================
   DESCRIPTION
========================================================= */

.faq-description {
  max-width: 420px;

  margin-top: 28px;

  font-family: "DM Sans", sans-serif;

  font-size: 18px;

  font-weight: 400;

  line-height: 1.55;

  color: rgba(5, 5, 11, 0.8);
}


/* =========================================================
   RIGHT
========================================================= */

.faq-right {
  width: 100%;

  min-width: 0;

  padding-left: 16px;
}


/* =========================================================
   FAQ SCROLL
========================================================= */

.faq-scroll {
  height: 564px;

  overflow-y: auto;

  padding-right: 8px;

  scrollbar-width: none;

  -ms-overflow-style: none;
}

.faq-scroll::-webkit-scrollbar {
  display: none;
}


/* =========================================================
   FAQ LIST
========================================================= */

.faq-list {
  display: flex;

  flex-direction: column;

  gap: 16px;
}


/* =========================================================
   FAQ ITEM
========================================================= */

.faq-item {
  width: 100%;
}


/* =========================================================
   FAQ WRAPPER
========================================================= */

.faq-wrapper {
  position: relative;

  width: 100%;

  overflow: visible;
}


/* =========================================================
   QUESTION
   ---------------------------------------------------------
   NEVER CHANGES SIZE WHEN OPEN.
========================================================= */

.faq-question {
  position: relative;

  z-index: 5;

  display: flex;

  align-items: center;

  justify-content: space-between;

  width: 100%;

  height: 70px;

  min-height: 70px;

  flex-shrink: 0;

  gap: 24px;

  padding: 12px 28px;

  border: none;

  outline: none;

  background: #f9f8f4;

  border-radius: 999px;

  box-sizing: border-box;

  cursor: pointer;

  text-align: left;

  transition:
    background-color 250ms ease,
    color 300ms ease;
}


/* =========================================================
   OPEN QUESTION
   ---------------------------------------------------------
   EXACT SAME DIMENSIONS.
========================================================= */

.faq-question.is-open {
  width: 100%;

  height: 70px;

  min-height: 70px;

  border-radius: 999px;

  transform: none;
}


/* =========================================================
   HOVER
========================================================= */

.faq-question:hover {
  background: #f7f8f4;
}


/* =========================================================
   QUESTION TEXT
========================================================= */

.faq-question-text {
  min-width: 0;

  font-family: "DM Sans", sans-serif;

  font-size: 20px;

  font-weight: 500;

  line-height: 1.1;

  letter-spacing: -0.02em;

  color: #000000;

  transition: color 300ms ease;
}

.faq-question:hover .faq-question-text {
  color: #f97316;
}


/* =========================================================
   ICON
========================================================= */

.faq-icon {
  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  width: 24px;

  height: 24px;

  font-family: Arial, sans-serif;

  font-size: 30px;

  font-weight: 300;

  line-height: 1;

  color: #000000;

  transform: rotate(0deg);

  transition:
    transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

.faq-icon.is-open {
  transform: rotate(135deg);
}


/* =========================================================
   ANSWER
   ---------------------------------------------------------
   IMPORTANT:

   This answer overlaps the lower 35px of the question.

   The question stays on top because of z-index.

   This makes both pieces visually appear as ONE
   connected container.
========================================================= */

.faq-answer {
  position: relative;

  z-index: 2;

  width: 100%;

  margin-top: -35px;

  padding-top: 35px;

  box-sizing: border-box;

  overflow: hidden;

  background: #f9f8f4;

  border-radius: 0 0 28px 28px;
}


/* =========================================================
   ANSWER INNER
========================================================= */

.faq-answer-inner {
  width: 100%;

  box-sizing: border-box;

  padding: 22px 28px 28px 28px;
}


/* =========================================================
   ANSWER TEXT
========================================================= */

.faq-answer-inner p {
  margin: 0;

  font-family: "DM Sans", sans-serif;

  font-size: 16px;

  font-weight: 400;

  line-height: 1.75;

  color: rgba(0, 0, 0, 0.75);
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1024px) {

  .faq-section {
    padding: 96px 24px;
  }


  .faq-layout {
    grid-template-columns: 1fr;

    gap: 48px;
  }


  .faq-left {
    position: static;
  }


  .faq-heading {
    font-size: 60px;
  }


  .faq-right {
    padding-left: 0;
  }


  .faq-scroll {
    height: auto;

    max-height: 650px;
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 640px) {

  .faq-section {
    padding: 80px 16px;
  }


  .faq-heading {
    margin-top: 0;

    font-size: 42px;

    line-height: 0.98;
  }


  .faq-description {
    margin-top: 24px;

    font-size: 16px;

    line-height: 1.5;
  }


  .faq-list {
    gap: 12px;
  }


  /* =======================================================
     MOBILE QUESTION
  ======================================================= */

  .faq-question {
    width: 100%;

    height: 64px;

    min-height: 64px;

    padding: 12px 20px;

    gap: 16px;

    border-radius: 999px;
  }


  .faq-question.is-open {
    width: 100%;

    height: 64px;

    min-height: 64px;

    border-radius: 999px;

    transform: none;
  }


  .faq-question-text {
    font-size: 16px;
  }


  .faq-icon {
    width: 22px;

    height: 22px;

    font-size: 28px;
  }


  /* =======================================================
     MOBILE ANSWER
  ======================================================= */

  .faq-answer {
    margin-top: -32px;

    padding-top: 32px;

    border-radius: 0 0 22px 22px;
  }


  .faq-answer-inner {
    padding: 18px 20px 20px 20px;
  }


  .faq-answer-inner p {
    font-size: 14px;

    line-height: 1.7;
  }
}


/* =========================================================
   LARGE DESKTOP
========================================================= */

@media (min-width: 1441px) {

  .faq-section {
    padding-left: 40px;

    padding-right: 40px;
  }
}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .faq-question,
  .faq-icon {
    transition: none;
  }
}

`;


/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "What services does Copper Studio offer?",
    answer:
      "We specialize in Brand Identity, Website Design & Development, and Custom Company Portals. Whether you're launching a new business, refreshing your brand, or streamlining internal operations, we create tailored solutions designed around your goals.",
  },

  {
    question: "Can you redesign my existing website or brand?",
    answer:
      "Yes. Whether you need a complete rebrand, a website redesign, or improvements to an existing digital product, we can help modernize your business while maintaining continuity where needed.",
  },

  
  {
    question: "Will I own the final files?",
    answer:
      "Will I own the final files?",
  },

  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. Once we understand your requirements, we'll provide a clear project roadmap with estimated milestones and delivery dates.",
  },

  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing hosting, maintenance, technical support, and continuous improvements to ensure your website or digital product continues to perform as your business grows.",
  },

  {
    question: "How do I get started?",
    answer:
      "Getting started is simple. Book a discovery call or send us an enquiry with your project details. We'll learn about your business, discuss your goals, and recommend the best approach before sharing a tailored proposal, timeline, and quotation.",
  },

];


/* =========================================================
   FAQ COMPONENT
========================================================= */

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);


  /* =======================================================
     TOGGLE FAQ
  ======================================================= */

  const toggleFAQ = (index) => {

    setOpenIndex(
      openIndex === index
        ? null
        : index
    );

  };


  return (
    <>
      {/* =====================================================
          CSS
      ====================================================== */}

      <style>
        {FAQ_CSS}
      </style>


      {/* =====================================================
          FAQ SECTION
      ====================================================== */}

      <section className="faq-section">

        <div className="faq-container">

          <div className="faq-layout">


            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="faq-left">

              <motion.div

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.8,
                }}

              >

                <h2 className="faq-heading">

                  <span className="faq-heading-main">
                    Got questions?
                  </span>

                  <br />

                  <span className="faq-heading-muted">
                    We've got <br />
                    answers
                  </span>

                </h2>


                <p className="faq-description">

                  Everything you need to know about our services, process,
                  timelines, pricing, and what it's like to work with Copper
                  Studio.

                </p>

              </motion.div>

            </div>


            {/* =================================================
                RIGHT FAQ
            ================================================= */}

            <div className="faq-right">

              <div className="faq-scroll">

                <div className="faq-list">


                  {faqs.map((faq, index) => {

                    const isOpen = openIndex === index;


                    return (

                      <motion.div

                        key={faq.question}

                        initial={{
                          opacity: 0,
                          y: 20,
                        }}

                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}

                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}

                        transition={{
                          duration: 0.5,
                          delay: index * 0.04,
                        }}

                        className="faq-item"

                      >

                        {/* =====================================
                            FAQ WRAPPER
                        ====================================== */}

                        <div
                          className={`faq-wrapper ${
                            isOpen
                              ? "is-open"
                              : ""
                          }`}
                        >


                          {/* ===================================
                              QUESTION
                          ==================================== */}

                          <button

                            type="button"

                            onClick={() =>
                              toggleFAQ(index)
                            }

                            className={`faq-question ${
                              isOpen
                                ? "is-open"
                                : ""
                            }`}

                          >

                            <span className="faq-question-text">

                              {faq.question}

                            </span>


                            <span
                              className={`faq-icon ${
                                isOpen
                                  ? "is-open"
                                  : ""
                              }`}
                            >

                              +

                            </span>

                          </button>


                          {/* ===================================
                              ANSWER
                              -----------------------------------
                              AnimatePresence keeps the element
                              alive while it performs the
                              closing animation.
                          ==================================== */}

                          <AnimatePresence initial={false}>

                            {isOpen && (

                              <motion.div

                                className="faq-answer"

                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}

                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}

                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}

                                transition={{
                                  height: {
                                    duration: 0.65,
                                    ease: [
                                      0.22,
                                      1,
                                      0.36,
                                      1,
                                    ],
                                  },

                                  opacity: {
                                    duration: 0.35,
                                    ease: "easeInOut",
                                  },
                                }}

                              >

                                <div className="faq-answer-inner">

                                  <p>
                                    {faq.answer}
                                  </p>

                                </div>

                              </motion.div>

                            )}

                          </AnimatePresence>

                        </div>

                      </motion.div>

                    );

                  })}


                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};


export default FAQ;