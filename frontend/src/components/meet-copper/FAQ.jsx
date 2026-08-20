import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "You can fill out the enquiry form, message us on WhatsApp, or schedule a call directly, whichever works best for you. We’ll take it from there and discuss your project, goals, and requirements.",
  },
  {
    question: " Is the initial consultation free?",
    answer:
      "Yes. The first consultation is complimentary and gives us a chance to understand your business, goals, and requirements before discussing the project further.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. We work with clients remotely and can collaborate with businesses across different locations and time zones.",
  },
  {
    question: "Can I contact you even if I’m not sure what I need?",
    answer:
      "Absolutely. You don’t need to have everything figured out. Tell us what you're trying to achieve, and we can help identify the right direction.",
  },
 
  {
    question: "What happens after I submit an enquiry?",
    answer:
      "We’ll review your enquiry, get back to you, and schedule a conversation if the project looks like a good fit. From there, we’ll discuss the scope, approach, timeline, and next steps.",
  },

  {
    question: "How do I know if Copper Studio is the right fit?",
    answer:
      "The initial call is a chance for both sides to find out. We’ll understand your needs, explain how we work, and determine whether our expertise and approach align with your project.",
  },
];

const FAQ2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        bg-white
        px-4
        py-12

        sm:px-6
        sm:py-16

        md:px-10
        md:py-20

        lg:px-16
      "
    >

      <div className="mx-auto w-full max-w-[1280px]">

        {/* =====================================
            HEADING — 1280 × 145
        ====================================== */}

        <div
          className="
            flex
            h-[61px]
            w-full
            items-start
            max-[1023px]:h-auto
            max-[1023px]:min-h-[100px]
            max-[1023px]:pb-4
          "
        >
          <h2
            className="
              font-['DM_Sans']
              text-3xl
              font-semibold
              leading-[0.95]
              tracking-tight
              text-black

              sm:text-4xl

              md:text-5xl

              lg:text-6xl

              xl:text-7xl
            "
          >
            Want to Know More About the Studio?
          </h2>
        </div>


        {/* =====================================
            FAQ CONTAINER — 1280 × 420
        ====================================== */}

        <div
          className="
            w-full
            min-h-[420px]
            rounded-3xl
            bg-white
            p-2
            
            sm:p-3

            md:p-4

            lg:p-5

            xl:p-6
          "
        >

          <div className="flex flex-col gap-2">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  layout
                  className="w-full"
                >

                  {/* =================================
                      QUESTION — 1280 × 60
                  ================================== */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className={`
                      flex
                      min-h-[60px]
                      w-full
                      items-center
                      justify-between
                      rounded-full
                      px-4
                      text-left
                      transition-all
                      duration-300

                      sm:px-5

                      md:px-6

                      lg:px-7

                      ${ 
                        isOpen
                          ? "bg-black/5"
                          : "bg-black/5"
                      }
                    `}
                  >

                    <span
                      className="
                        min-w-0
                        pr-4
                        font-dm-sans
                        text-xs
                        font-medium
                        leading-5
                        tracking-tight
                        text-black

                        sm:pr-6
                        sm:text-sm

                        md:text-base

                        lg:text-lg
                      "
                    >
                      {faq.question}
                    </span>


                    {/* Plus / Minus */}

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300

                        sm:h-8
                        sm:w-8

                        ${
                          isOpen
                            ? "border-orange-500 bg-orange-500 text-white"
                            : "border-black/10 bg-white text-black"
                        }
                      `}
                    >
                      <span
                        className="
                          text-base
                          font-light
                          leading-none

                          sm:text-lg
                        "
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </span>

                  </button>


                  {/* =================================
                      ANSWER
                  ================================== */}

                  <AnimatePresence initial={false}>

                    {isOpen && (
                      <motion.div
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
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                        className="
                          overflow-hidden
                        "
                      >
<div
  type="button"
  onClick={() => toggleFAQ(index)}
  className={`
    flex
    min-h-[60px]
    w-full
    items-center
    justify-between
    px-4
    font-dm-sans
    text-left
    transition-all
    duration-300

    sm:px-5
    md:px-6
    lg:px-7

    ${
      isOpen
        ? "rounded-t-full bg-white"
        : "rounded-full bg-white/70 hover:bg-white"
    }
  `}
>
  <p
    className="
      line-clamp-3
      w-full
      overflow-hidden
      text-sm
      leading-6
      text-black/50
      sm:text-base
      sm:leading-6
      md:text-lg
    "
  >
    {faq.answer}
  </p>
</div>
                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ2;