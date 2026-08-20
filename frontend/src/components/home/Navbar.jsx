import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const navItems = ["Home", "Studio", "Services", "Projects", "Client Login"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className="
        fixed
        left-1/2
        top-4
        z-50
        w-[calc(100%-1rem)]
        -translate-x-1/2

        sm:top-5
        sm:w-[90%]

        md:w-[88%]

        lg:w-[90%]
        lg:max-w-6xl
      "
    >

      {/* =================================================
          NAVBAR
      ================================================= */}

      <div
        className="
          relative
          flex
          min-h-[50px]
          w-full
          items-center
          rounded-full
          border
          border-gray-200
          bg-white
          px-1
          shadow-sm
        "
      >

        <div
          className="
            flex
            h-[40px]
            min-w-0
            shrink
            items-center
            px-3

            sm:h-[45px]
            sm:px-5
          "
        >
          <img
            src="/CSlogo.svg"
            alt="Copper Studio"
            className="
              h-[22px]
              w-auto
              max-w-[145px]
              object-contain

              sm:h-[25px]
              sm:max-w-[183.1px]
            "
          />
        </div>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div
          className="
            hidden
            min-w-0
            flex-1
            items-center
            justify-end
            gap-1
            lg:flex
          "
        >

          {/* Home */}

          <button
                   onClick={() => {
  navigate("/");
  window.scrollTo(0, 0);
}}
            className="
              rounded-full
              px-4
              py-1.5
              text-[16px]
              font-normal
              font-dm-sans
              hover:bg-gray-100
              hover:text-gray-900
              text-black
            "
          >
            Home
          </button>


          {/* Studio */}

          <button
          onClick={() => {
  navigate("/meet-copper");
  window.scrollTo(0, 0);
}}
            className="
              rounded-full
              px-4
              py-1.5
              text-16px
              font-medium
              text-black
              font-dm-sans
              transition
              hover:bg-gray-100
              hover:text-gray-900
            "
          >
            Studio
          </button>


          {/* Services */}

          <button
           onClick={() => {
  navigate("/services");
  window.scrollTo(0, 0);
}}
            className="
              rounded-full
              px-4
              py-1.5
              text-16px
              font-medium
              text-black
              transition
              hover:bg-gray-100
              hover:text-gray-900
              font-dm-sans
            "
          >
            Services
          </button>


          {/* Projects */}

          <button
            onClick={() => navigate("/main-projects")}
            className="
              rounded-full
              px-4
              py-1.5
              text-16px
              font-medium
              text-black
              transition
              hover:bg-gray-100
              hover:text-gray-900
              font-dm-sans
            "
          >
            Projects
          </button>


          {/* Client Login */}

          <button
            className="
              rounded-full
              px-4
              py-1.5
              text-16px
              font-medium
              text-black
              transition
              hover:bg-gray-100
              hover:text-gray-900
              font-dm-sans
            "
          >
            Client Login
          </button>


          {/* =================================================
              GET IN TOUCH
          ================================================= */}
<button
           onClick={() => {
  navigate("/contact");
  window.scrollTo(0, 0);
}}
  className="
    group
    ml-3
    flex
    h-[40px]
    w-[148px]
    shrink-0
    items-center
    justify-between
    rounded-full
    bg-black
    pl-5
    pr-1
    text-sm
    font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-gray-900
    font-dm-sans
  "
>
            <span>
              Get in Touch
            </span>

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-orange-500
                text-black
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            >
              <FiArrowRight size={18} />
            </span>
          </button>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <div className="ml-auto flex shrink-0 items-center pr-1 lg:hidden">

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-black
              text-white
            "
          >
            {menuOpen ? (
              <FiX size={20} />
            ) : (
              <FiMenu size={20} />
            )}
          </motion.button>

        </div>


        {/* =================================================
            MOBILE DROPDOWN
        ================================================= */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                absolute
                left-0
                right-0
                top-[58px]
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-3
                shadow-lg
                lg:hidden
              "
            >

              {/* Mobile Navigation */}

              <div className="flex flex-col gap-1">

                {navItems.map((item, index) => (

                  <motion.button
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={() => {
                      setMenuOpen(false);

                      
                       if (item === "Home") {
                        navigate("/");
                         window.scrollTo(0, 0);

                      }

                      
                       if (item === "Get in Touch") {
                        navigate("/contact");
                         window.scrollTo(0, 0);
                      }

                       if (item === "Studio") {
                        navigate("/meet-copper");
                         window.scrollTo(0, 0);
                      }

                      if (item === "Services") {
                        navigate("/services");
                         window.scrollTo(0, 0);
                      }

                      if (item === "Projects") {
                        navigate("/main-projects");
                         window.scrollTo(0, 0);
                      }
                    }}
                    className={`
                      w-full
                      rounded-2xl
                      px-4
                      py-3
                      text-left
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        index === 0
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }
                    `}
                  >
                    {item}
                  </motion.button>

                ))}


                {/* Mobile CTA */}

                <motion.button
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                 onClick={() => {
  setMenuOpen(false);
  navigate("/contact");
}}
                  className="
                    group
                    mt-2
                    flex
                    h-[46px]
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    bg-black
                    pl-5
                    pr-1
                    text-sm
                    font-semibold
                    text-white
                    font-['DM_Sans']
                  "
                >

                  <span>
                    Get in Touch
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-500
                      text-black
                    "
                  >
                    <FiArrowRight size={18} />
                  </span>

                </motion.button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </nav>
  );
};

export default Navbar;
