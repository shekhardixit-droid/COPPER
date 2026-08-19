import { motion } from "framer-motion";
import { MdChevronRight } from "react-icons/md";

const projects = [
  "https://res.cloudinary.com/ioempbte/image/upload/v1787119911/crm_copper.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787119915/crm_ftat.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787119910/crm_cottson.png",
  
];

const SelectedProjects2 = () => {
  return (
    <section className="w-full overflow-hidden bg-white">

      {/* =====================================
          SECTION
      ====================================== */}

      <div
        className="
          mx-auto
          w-full
          overflow-hidden
          bg-white
          px-4
          py-16
          sm:px-6
          sm:py-20
          md:px-10
          lg:px-16
        "
      >

        {/* =====================================
            HEADER
        ====================================== */}

        <div
          className="
            mx-auto
            mb-8
            flex
            w-full
            flex-col
            items-start
            justify-between
            gap-5
            sm:mb-10
            sm:flex-row
            sm:items-end
            sm:gap-6
            md:mb-12
          "
        >

          <h2
            className="
              text-4xl
              font-medium
              tracking-tight
              text-gray-950
              sm:text-5xl
              md:text-6xl
            "
          >
            What We've Build
          </h2>


          {/* See All Projects */}

          <motion.button
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              flex
              h-[40px]
              shrink-0
              items-center
              gap-1
              rounded-full
              border
              border-gray-900
              bg-white
              px-5
              text-sm
              font-medium
              text-gray-900
              transition-colors
              duration-300
              hover:border-orange-500
              hover:bg-orange-500
              hover:text-white
            "
          >
            <span>See All Projects</span>

            <MdChevronRight size={20} />
          </motion.button>

        </div>


        {/* =====================================
            STATIC PROJECT CARDS
        ====================================== */}

        <div
          className="
            relative
            w-full
            overflow-hidden
          "
        >

          <div
            className="
              flex
              w-full
              gap-5
              justify-center
            "
          >

            {projects.slice(0, 3).map((image, index) => (
              <div
                key={`project-${index}`}
                className="
                  h-[400px]
                  w-[413px]
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                "
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default SelectedProjects2;