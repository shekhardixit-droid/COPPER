import { motion } from "framer-motion";

const Cards = ({
  image,
  heading,
  points = [],
}) => {
  return (
    <motion.div
      className="
        group
        h-[399px]
        w-[413.34px]
        max-w-full
        overflow-hidden
        rounded-[10px]
        bg-white

        max-[767px]:h-auto
        max-[767px]:w-full
      "
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {/* IMAGE */}

      <div
        className="
          h-[345.99px]
          w-[413.34px]
          overflow-hidden
          rounded-[5px]

          max-[767px]:h-auto
          max-[767px]:aspect-[413.34/345.99]
          max-[767px]:w-full
        "
      >
        <img
          src={image}
          alt={heading}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          flex
          h-[40.7px]
          w-[413.34px]
          flex-col
          justify-start
          mt-1

          max-[767px]:h-auto
          max-[767px]:w-full
        "
      >
        {/* HEADING */}

        <h3
          className="
            font-dm-sans
            text-[18px]
            font-medium
            leading-[20.7px]
            tracking-[-0.75px]
            text-black
          "
        >
          {heading}
        </h3>

        {/* POINTS */}

        <div
          className="
            mt-1
            flex
            flex-wrap
            items-center
            gap-x-2
            font-dm-sans
            text-[12px]
            font-normal
            leading-[19.5px]
            tracking-[0.52px]
          "
        >
          {points.map((point, index) => (
            <span
              key={index}
              className={`
                flex
                items-center
                ${index === 0 ? "text-black" : "text-black/65"}
              `}
            >
              {index > 0 && (
                <span className="mr-2 text-black/65">
                  •
                </span>
              )}

              {point}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;