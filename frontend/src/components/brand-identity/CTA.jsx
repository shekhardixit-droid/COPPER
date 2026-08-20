import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[95%]">
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
          className="
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >

          {/* Small Label */}

          <p
  className="
    max-w-full
    font-dm-sans
    text-[20px]
    font-normal
    leading-[24px]
    text-[#C55418]
  "
>
  Brand Identity. Websites. Customer Portal
</p>


          {/* Main Heading */}

          <h2
  className="
    mt-5
    w-full
    max-w-5xl
    font-dm-sans
    text-[36px]
    font-semibold
    leading-[1]
    tracking-[-0.75px]
    text-black
    sm:text-[48px]
    md:text-[60px]
    lg:text-[70px]
    lg:leading-[70px]
  "
          >
           Let's build a brand

            <br />

            <span className="text-black font-dm-sans">
             customers will remember.
            </span>
          </h2>


          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:mt-10
              sm:w-auto
              sm:flex-row
            "
          >

            {/* Primary */}
<motion.a
  href="#contact"
  onClick={(e) => { e.preventDefault(); navigate("/scope-builder"); window.scrollTo(0, 0); }}
  whileHover={{
    scale: 1.04,
  }}
  whileTap={{
    scale: 0.97,
  }}
  className="
  flex
  w-full
  items-center
  justify-center
  gap-2
  rounded-full
  border
  border-black/30
  bg-white
  px-7
  py-3.5
  text-sm
  font-medium
  text-black
  transition-all
  duration-300
  hover:bg-orange-500
  hover:border-orange-500
  hover:text-white
  sm:w-auto
  font-dm-sans
"
>
  <span>Build My Scope</span>

  <FiArrowUpRight
    size={18}
    strokeWidth={2}
  />
</motion.a>


            {/* Secondary */}

            <motion.a
              href="https://wa.me/919820933877"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-full
               
                px-7
                py-3.5
                text-sm
                font-medium
                text-white
                bg-black
                transition-all
                duration-300
                hover:bg-orange-500
  hover:border-orange-500
  hover:text-white
  sm:w-auto
  font-dm-sans
              "
            >
              Whatsapp Us
            </motion.a>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;