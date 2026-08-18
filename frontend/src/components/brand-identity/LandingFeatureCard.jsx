const LandingFeatureCard = ({
  image,
  heading,
  description,
  tags = [],
}) => {
  return (
    <div
      className="
        h-auto
        w-full
        max-w-[630px]
        overflow-hidden
        rounded-2xl
        bg-[#f7f7f5]
        p-2
        lg:h-[515px]
      "
    >

      {/* =====================================
          IMAGE
      ====================================== */}

      <div
        className="
          h-[200px]
          w-full
          overflow-hidden
          rounded-xl
          sm:h-[260px]
          md:h-[300px]
          lg:h-[334px]
        "
      >
        <img
          src={image}
          alt={heading}
          className="
            h-full
            w-full
            object-cover
          "
        />
      </div>


      {/* =====================================
          TEXT
      ====================================== */}

      <div
        className="
          flex
          h-auto
          min-h-[130px]
          w-full
          flex-col
          justify-center
          px-4
          py-4
          lg:h-[164px]
          lg:py-0
        "
      >

        {/* Heading */}

        <h3
          className="
            font-dm-sans
            text-xl
            font-semibold
            leading-tight
            tracking-tight
            text-black
            sm:text-2xl
          "
        >
          {heading}
        </h3>


        {/* Paragraph */}

        <p
          className="
            mt-2
            max-w-[560px]
            font-dm-sans
            text-sm
            leading-5
            text-black/50
          "
        >
          {description}
        </p>


        {/* =====================================
            TEXT PILLS
        ====================================== */}

        {tags.length > 0 && (
          <div
            className="
              mt-4
              flex
              flex-wrap
              items-center
              gap-2
            "
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  flex
                  h-[30px]
                  w-fit
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f7f7f5]
                  border
                  border-black/40
                  px-4
                  font-dm-sans
                  text-[10px]
                  font-medium
                  leading-none
                  text-black
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default LandingFeatureCard;
