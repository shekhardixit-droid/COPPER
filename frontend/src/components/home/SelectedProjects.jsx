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

const firstRow = projects.slice(0, 5);
const secondRow = projects.slice(5, 10);

// Each group repeats the row this many times so it is always wider than the
// screen (even at 25% zoom on a big monitor).
const SETS_PER_GROUP = 6;

// Seconds for the strip to travel one set of 5 images. Higher = slower.
const TOP_SECONDS_PER_SET = 50;
const BOTTOM_SECONDS_PER_SET = 60;

const buildGroup = (row) =>
  Array.from({ length: SETS_PER_GROUP }, () => row).flat();

const topGroup = buildGroup(firstRow);
const bottomGroup = buildGroup(secondRow);

const ProjectImage = ({ image, index }) => {
  return (
    <div
      className="
        group
        relative
        mr-[clamp(0.5rem,1.6vw,1rem)]
        h-[clamp(220px,39vw,400px)]
        w-[clamp(180px,31.25vw,320px)]
        shrink-0
        overflow-hidden
        rounded-[clamp(0.75rem,1.6vw,1rem)]
      "
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
    </div>
  );
};

const SelectedProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white">

      <section
        className="
          mx-auto
          w-full
          overflow-hidden
          bg-white
          py-[clamp(3rem,9.4vw,6rem)]
        "
      >

        {/* =====================================
            CONTENT
        ====================================== */}

        <div
          className="
            mx-auto
            w-full
            overflow-hidden
            px-[clamp(1rem,6.25vw,4rem)]
          "
        >

          {/* =====================================
              SECTION HEADER
          ====================================== */}

          <div
            className="
              mb-[clamp(1.5rem,5.5vw,3.5rem)]
              flex
              w-full
              items-center
              justify-between
              gap-[clamp(0.75rem,1.6vw,1rem)]
            "
          >

            {/* Heading */}

            <h2
              className="
                min-w-0
                text-[clamp(1.5rem,4.7vw,3.75rem)]
                font-medium
                leading-[1.15]
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
                shrink-0
                items-center
                gap-[clamp(0.375rem,0.8vw,0.5rem)]
                rounded-full
                px-[clamp(0.75rem,2.3vw,1.5rem)]
                py-[clamp(0.5rem,1.2vw,0.75rem)]
                text-[clamp(0.75rem,1.4vw,0.875rem)]
                font-medium
                text-gray-900
                transition-colors
                duration-300
                hover:bg-orange-500
                hover:text-white
                translate-y-2
              "
            >
              <span className="whitespace-nowrap">
                See All Projects
              </span>

              <MdChevronRight
                size={18}
                className="h-[clamp(1.125rem,2vw,1.25rem)] w-[clamp(1.125rem,2vw,1.25rem)]"
              />
            </motion.button>

          </div>


          {/* =====================================
              TOP MARQUEE — MOVES RIGHT
          ====================================== */}

          <div
            className="
              relative
              w-full
              overflow-hidden
            "
          >

            <motion.div
              className="
                flex
                w-max
                will-change-transform
              "
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: TOP_SECONDS_PER_SET * SETS_PER_GROUP,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {/* Two identical groups → 50% shift loops seamlessly */}
              {[0, 1].map((g) => (
                <div key={g} className="flex shrink-0">
                  {topGroup.map((image, index) => (
                    <ProjectImage
                      key={`top-${g}-${index}`}
                      image={image}
                      index={index % firstRow.length}
                    />
                  ))}
                </div>
              ))}

            </motion.div>

          </div>


          {/* =====================================
              BOTTOM MARQUEE — MOVES LEFT
          ====================================== */}

          <div
            className="
              relative
              mt-[clamp(0.5rem,1.95vw,1.25rem)]
              w-full
              overflow-hidden
            "
          >

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
                duration: BOTTOM_SECONDS_PER_SET * SETS_PER_GROUP,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[0, 1].map((g) => (
                <div key={g} className="flex shrink-0">
                  {bottomGroup.map((image, index) => (
                    <ProjectImage
                      key={`bottom-${g}-${index}`}
                      image={image}
                      index={(index % secondRow.length) + firstRow.length}
                    />
                  ))}
                </div>
              ))}

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SelectedProjects;