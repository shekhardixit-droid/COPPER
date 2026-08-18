const ServiceIntro = ({
  svg,
  heading,
  description,
}) => {
  return (
    <section
      className="
        w-full
        bg-white
        px-6
        py-16

        sm:px-10
        md:px-16
        lg:px-20
      "
    >
      <div
        className="
          relative
          mx-0
          w-full
          max-w-[1200px]

          /* Mobile */
          max-[767px]:flex
          max-[767px]:flex-col

          /* Tablet */
          md:max-w-full
        "
      >

        {/* =====================================
            SVG — 157.75 × 113.25
        ====================================== */}

        <div
          className="
            relative
            h-[113.25px]
            w-[157.75px]

            max-[767px]:h-[90px]
            max-[767px]:w-[125px]
          "
        >
          <img
            src={svg}
            alt=""
            className="
              h-full
              w-full
              object-contain
            "
          />
        </div>


        {/* =====================================
            HEADING — 418 × 52
            OVERLAPS SVG
        ====================================== */}

        <div
          className="
            relative
            z-10
            -mt-[20px]
            ml-0
            flex
            h-[52px]
            w-[418px]
            max-w-full
            items-center

            max-[767px]:-mt-[10px]
            max-[767px]:h-auto
            max-[767px]:w-full
          "
        >
          <h2
            className="
              font-dm-sans
              text-[62px]
              font-semibold
              leading-[52px]
              tracking-[-0.75px]
              text-black

              max-[767px]:text-[42px]
              max-[767px]:leading-[44px]

              max-[420px]:text-[36px]
              max-[420px]:leading-[38px]
            "
          >
            {heading}
          </h2>
        </div>


        {/* =====================================
            PARAGRAPH — 640 × 95
            RIGHT SIDE
        ====================================== */}

        <div
          className="
            absolute
            right-0
            top-[42px]
            flex
            translate-x-20
            h-[95px]
            w-[640px]
            max-w-full
            items-start

            /* Tablet */
            md:static
            md:mt-10
            md:h-auto
            md:w-full
            md:max-w-[640px]
            md:translate-x-0

            /* Mobile */
            max-[767px]:mt-8
            max-[767px]:w-full
            max-[767px]:max-w-full
          "
        >
          <p
            className="
              w-full
              max-w-none
              font-dm-sans
              text-[18px]
              font-normal
              leading-[24px]
              text-black/75

              max-[767px]:text-[16px]
              max-[767px]:leading-[22px]
            "
          >
            {description}
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceIntro;