import { useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, audience, and challenges through research and collaboration. This helps us uncover insights that shape the right direction.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the project’s direction, structure, and user journey based on a clear understanding of your business. Every decision is guided by purpose and real business needs.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We turn strategy into thoughtful, distinctive design that balances aesthetics with usability. From brand identity to digital experiences, every detail is designed to feel consistent and memorable.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We bring approved designs to life through careful, scalable development. We focus on performance, responsiveness, accessibility, and real-world usability.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We launch your project and stay involved beyond the finish line. From hosting and maintenance to ongoing improvements, we help your brand evolve as your business grows.",
  },
];

const Process = () => {
  const processRef = useRef(null);
  const stepsRef = useRef(null);

  const reachedBottom = useRef(false);

  const handleWheel = (event) => {
    if (window.innerWidth < 1024) return;

    const process = processRef.current;
    const stepsContainer = stepsRef.current;

    if (!process || !stepsContainer) return;

    const rect = process.getBoundingClientRect();

    const processActive =
      rect.top <= 10 &&
      rect.bottom >= window.innerHeight - 10;

    if (!processActive) {
      reachedBottom.current = false;
      return;
    }

    const maxScroll = Math.max(
      0,
      stepsContainer.scrollHeight - stepsContainer.clientHeight
    );

    const scrollTop = stepsContainer.scrollTop;

    const scrollingDown = event.deltaY > 0;
    const scrollingUp = event.deltaY < 0;

    const atTop = scrollTop <= 1;
    const atBottom = scrollTop >= maxScroll - 1;

    /* ================================
       SCROLL DOWN
    ================================= */

    if (scrollingDown) {
      if (!atBottom) {
        event.preventDefault();
        stepsContainer.scrollTop += event.deltaY;
        return;
      }

      if (atBottom && !reachedBottom.current) {
        event.preventDefault();
        reachedBottom.current = true;
        return;
      }

      return;
    }

    /* ================================
       SCROLL UP
    ================================= */

    if (scrollingUp) {
      if (!atTop) {
        event.preventDefault();
        reachedBottom.current = false;
        stepsContainer.scrollTop += event.deltaY;
        return;
      }

      reachedBottom.current = false;
    }
  };

  return (
    <section
      ref={processRef}
      onWheelCapture={handleWheel}
      className="
        relative
        bg-#05050b
        w-full
        overflow-x-hidden
        px-[clamp(1rem,3.5vw,2.5rem)]
        py-[clamp(4rem,9.4vw,6rem)]
        lg:min-h-screen
        lg:py-16
      "
    >
      {/* Centered wrapper: keeps the layout centered at every zoom level */}
      <div className="mx-auto w-full max-w-[1920px]">

        <div
          className="
            grid
            grid-cols-1
            gap-[clamp(2.5rem,4vw,3rem)]
            lg:min-h-[calc(100vh-8rem)]
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-start
          "
        >

          {/* LEFT */}

          <div
            className="
              min-w-0
              self-start
              lg:sticky
              lg:top-24
              lg:h-fit
            "
          >
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
              <h2
                className="
                  mt-0
                  max-w-xl
                  text-[clamp(1.875rem,7vw,4.5rem)]
                  font-medium
                  leading-[0.95]
                  tracking-tight
                  text-black
                  lg:mt-5
                  font-dm-sans
                  max-[639px]:leading-[1]
                "
              >
                Take A Look At
                <br />
                How We Work
              </h2>

              <p
                className="
                  mt-6
                  max-w-md
                  text-[clamp(0.875rem,1.8vw,1.125rem)]
                  leading-[24px]
                  text-black/70
                  font-dm-sans
                  max-[639px]:max-w-full
                "
              >
                Whether we're building a brand, a website, or a custom portal,
                every project follows the same strategic process for
                consistent, high-quality results.
              </p>
            </motion.div>
          </div>


          {/* =====================================
              RIGHT
          ====================================== */}

          <div
            className="
              min-w-0
              lg:pl-8
            "
          >
            <div
              className="
                flex
                w-full
                flex-col
                gap-[clamp(0.75rem,1.6vw,1rem)]
              "
            >

              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className="
                    group
                    flex
                    min-h-[clamp(120px,20vw,130px)]
                    w-full
                    items-center
                    rounded-2xl
                    bg-05050b
                    px-[clamp(1rem,3.75vw,1.5rem)]
                    py-[clamp(0.75rem,1.6vw,1rem)]
                    transition-all
                    duration-300
                    hover:border-black/10
                  "
                >

                  {/* NUMBER — 72 → 96 */}

                  <motion.div
                    whileHover={{
                      scale: 1.04,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      flex
                      h-[clamp(72px,9.4vw,96px)]
                      w-[clamp(72px,9.4vw,96px)]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-05050b
                      bg-white
                      font-dm-sans
                      text-[clamp(0.75rem,1.4vw,0.875rem)]
                      font-medium
                      tracking-[0.12em]
                      text-black/40
                      transition-all
                      duration-300
                      group-hover:border-orange-500
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >
                    {step.number}
                  </motion.div>


                  {/* CONTENT */}

                  <div
                    className="
                      ml-[clamp(0.75rem,2vw,1.25rem)]
                      flex
                      min-w-0
                      w-full
                      max-w-[522px]
                      flex-col
                      justify-center
                    "
                  >

                    <h3
                      className="
                        font-['DM_Sans']
                        text-[clamp(1.125rem,4vw,2.25rem)]
                        font-medium
                        leading-[1.25]
                        tracking-tight
                        text-black
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-[clamp(0.25rem,0.8vw,0.5rem)]
                        font-['DM_Sans']
                        text-[clamp(0.75rem,1.6vw,1rem)]
                        leading-[1.45]
                        text-black/50
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;