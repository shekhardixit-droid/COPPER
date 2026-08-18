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