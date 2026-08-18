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

          max-[767px]:flex
          max-[767px]:flex-col
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
              max-w-full
              font-dm-sans
              text-[62px]
              font-semibold
              leading-[52px]
              tracking-[-0.75px]
              text-black

              max-[767px]:text-[40px]
              max-[767px]:leading-[44px]
              max-[767px]:tracking-[-0.5px]

              max-[480px]:text-[32px]
              max-[480px]:leading-[36px]
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
            h-[95px]
            w-[640px]
            max-w-full
            translate-x-20
            items-start

            /* MOBILE ONLY */
            max-[767px]:static
            max-[767px]:mt-8
            max-[767px]:h-auto
            max-[767px]:w-full
            max-[767px]:max-w-full
            max-[767px]:translate-x-0
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