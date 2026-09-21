import { motion } from "framer-motion";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const projects = [
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_common%20grounds.png",
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_cottson_1.png",
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_cottson_2.png",
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_datacircles_2.png",
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_datacircles_1.png",
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_nitty%20gritty.png",
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_ftat.png",
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_umaraj.png",
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_nora.png",
  "https://ik.imagekit.io/qiap0iq38/home/Selected%20Projects/projects_qodenext.png",
];

// Each group repeats the list this many times so it is always wider than the
// screen (even at 25% zoom on a big monitor).
const SETS_PER_GROUP = 3;

// Seconds for the strip to travel one set of 10 images. Higher = slower.
// 100 matches the pace of the two-row section (50s per 5 images).
const SECONDS_PER_SET = 100;

const group = Array.from({ length: SETS_PER_GROUP }, () => projects).flat();

const ProjectImage = ({ image, index }) => {
  return (
    <motion.div
      className="
        group
        relative
        mr-[clamp(0.75rem,1.6vw,1.25rem)]
        h-[clamp(300px,31vw,400px)]
        w-[clamp(240px,25vw,320px)]
        shrink-0
        overflow-hidden
        rounded-2xl
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
          max-w-[1920px]
          overflow-hidden
          bg-white
          px-[clamp(1rem,4.7vw,4rem)]
          py-[clamp(4rem,7.8vw,5rem)]
        "
      >

        {/* =====================================
            HEADER
        ====================================== */}

        <div
          className="
            mx-auto
            mb-[clamp(2rem,4.7vw,3rem)]
            flex
            w-full
            flex-col
            items-start
            justify-between
            gap-5
            sm:flex-row
            sm:items-end
            sm:gap-6
          "
        >

          <h2
            className="
              text-[clamp(2.25rem,5.9vw,3.75rem)]
              font-medium
              leading-[1.1]
              tracking-tight
              text-gray-950
            "
          >
            Selected Projects
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
              will-change-transform
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: SECONDS_PER_SET * SETS_PER_GROUP,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {/* Two identical groups → -50% loops seamlessly */}

            {[0, 1].map((g) => (
              <div key={g} className="flex shrink-0">
                {group.map((image, index) => (
                  <ProjectImage
                    key={`project-${g}-${index}`}
                    image={image}
                    index={index % projects.length}
                  />
                ))}
              </div>
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default SelectedProjects2;