const LandingFeatureCard = ({
  image,
  heading,
  description,
  tags = [],
}) => {
  return (
    <div
      className="
        h-[500px]
        w-[630px]
        max-w-full
        overflow-hidden
        rounded-2xl
        bg-[#f7f7f5]
        p-2
        max-[1023px]:h-auto
        max-[1023px]:w-full
      "
    >

      {/* =====================================
          IMAGE — 614 × 334
      ====================================== */}

      <div
  className="
    h-[334px]
    w-[614px]
    max-w-full
    overflow-hidden
    rounded-xl
    max-[1023px]:h-[220px]
    max-[1023px]:w-full
    sm:h-[270px]
    lg:h-[334px]
    lg:w-[614px]
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
          TEXT — 614 × 164
      ====================================== */}

      <div
        className="
          flex
          h-[164px]
          w-full
          flex-col
          justify-center
          px-4
          max-[1023px]:h-auto
          max-[1023px]:py-4
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
    line-clamp-2
  "
>
  {description}
</p>


        

      </div>

    </div>
  );
};

export default LandingFeatureCard;