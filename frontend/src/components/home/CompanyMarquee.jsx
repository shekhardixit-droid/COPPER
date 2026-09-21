import { motion } from "framer-motion";

const companies = [
  "https://ik.imagekit.io/qiap0iq38/home/logos/Frame%202147227958.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/datacircles%20logo%201.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/cottson%20logo%201.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/nitty%20gritty%20logo%201.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/Group%2035.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/Tea%20Archive.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/Group%201948753749.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/umaraj.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/Group%201948753687.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/Group%201948753751.png",
  "https://ik.imagekit.io/qiap0iq38/home/logos/Group%201948753748.png",
];

// One "group" = enough logos to always be wider than the screen (even at 25% zoom)
const SETS_PER_GROUP = 4;
const group = Array.from({ length: SETS_PER_GROUP }, () => companies).flat();

const CompanyMarquee = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-[clamp(1.5rem,3.9vw,2.5rem)]">
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[clamp(2rem,9.4vw,6rem)] bg-gradient-to-r from-white to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[clamp(2rem,9.4vw,6rem)] bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex w-max items-center will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35 * SETS_PER_GROUP, // same visual speed as before
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Two identical groups → -50% loops seamlessly */}
          {[0, 1].map((g) => (
            <div key={g} className="flex shrink-0 items-center">
              {group.map((logo, index) => (
                <div
                  key={`${g}-${logo}-${index}`}
                  className="
                    mr-[clamp(0.5rem,2vw,1.25rem)]
                    flex
                    h-[clamp(2.5rem,6vw,4rem)]
                    w-[clamp(6rem,15.6vw,10rem)]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-900
                    bg-white
                    px-[clamp(0.75rem,2.7vw,1.75rem)]
                  "
                >
                  <img
                    src={logo}
                    alt="Company logo"
                    className="
                      max-h-[clamp(1rem,2.7vw,1.75rem)]
                      max-w-[clamp(60px,10.7vw,110px)]
                      object-contain
                    "
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyMarquee;