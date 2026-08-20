import { motion } from "framer-motion";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const projects = [
  "https://res.cloudinary.com/ioempbte/image/upload/v1787116588/--prompt-----create-a-high-end-photorealistic-stud_1.svg",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117802/projects_cottson_1.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117801/projects_nora.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117799/projects_common_grounds.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117798/projects_umaraj.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117797/projects_cottson_2.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117796/projects_cottson_2_1.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117795/projects_cottson_2_2.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117795/projects_cottson_2_4.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117794/projects_cottson_2_3.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117793/projects_cottson_2_5.png",
  "https://res.cloudinary.com/ioempbte/image/upload/v1787117793/projects_cottson_2_6.pngg",
];

const ProjectImage = ({ image, index }) => {
  return (
    <motion.div
      className="
        group
        relative
        h-[300px]
        w-[240px]
        shrink-0
        overflow-hidden
        rounded-2xl
        sm:h-[350px]
        sm:w-[280px]
        md:h-[400px]
        md:w-[320px]
      "
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.img
        src={image}
        alt={`Project ${index + 1}`}
        className="
          h-full
          w-full
          object-cover
        "
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/0
          transition-colors
          duration-300
          group-hover:bg-black/10
        "
      />
    </motion.div>
  );
};

const SelectedProjects2 = () => {
  const navigate = useNavigate();
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
            onClick={() => { navigate("/main-projects"); window.scrollTo(0, 0); }}
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
            SINGLE MARQUEE LIST CONTAINER
        ====================================== */}

        <div
          className="
            relative
            w-full
            overflow-hidden
          "
        >

          {/* SINGLE MARQUEE LIST */}

          <motion.div
            className="
              flex
              w-max
              gap-3
              sm:gap-4
              md:gap-5
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {/* ORIGINAL LIST */}

            {projects.map((image, index) => (
              <ProjectImage
                key={`project-${index}`}
                image={image}
                index={index}
              />
            ))}


            {/* DUPLICATED LIST FOR CONTINUOUS LOOP */}

            {projects.map((image, index) => (
              <ProjectImage
                key={`project-copy-${index}`}
                image={image}
                index={index}
              />
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default SelectedProjects2;