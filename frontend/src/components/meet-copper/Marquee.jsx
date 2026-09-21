import { motion } from "framer-motion";
import { MdChevronRight } from "react-icons/md";

const projects = [
  "/projects/projects_common grounds.png",
  "/projects/projects_cottson_1.png",
  "/projects/projects_cottson_2.png",
  "/projects/projects_datacircles_1.png",
  "/projects/projects_datacircles_2.png",
  "/projects/projects_ftat.png",
  "/projects/projects_nitty gritty.png",
  "/projects/projects_nora.png",
  "/projects/projects_qodenext.png",
  "/projects/projects_umaraj.png",
];

// Extra sets so the strip is always wider than the screen at any zoom.
// Each half of the loop holds this many copies of the 10 images.
const SETS_PER_HALF = 5;

// Original speed: 30 seconds per set of 10 images.
const SECONDS_PER_SET = 50;

// Two identical halves → the -50% loop is seamless.
const loopList = Array.from(
  { length: SETS_PER_HALF * 2 },
  () => projects
).flat();

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
              pr-3
              sm:gap-4
              sm:pr-4
              md:gap-5
              md:pr-5
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: SECONDS_PER_SET * SETS_PER_HALF,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {loopList.map((image, index) => (
              <ProjectImage
                key={`project-${index}`}
                image={image}
                index={index % projects.length}
              />
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default SelectedProjects2;