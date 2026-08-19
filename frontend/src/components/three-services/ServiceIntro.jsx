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
          mx-auto
          w-full
          max-w-[1200px]

          max-[767px]:flex
          max-[767px]:flex-col
        "
      >

        {/* SVG */}

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


        {/* HEADING */}

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
    h-[124px]
    w-[502px]
    max-w-full
    font-dm-sans
    text-[62px]
    font-semibold
    leading-[52px]
    tracking-[-0.75px]
    text-black
    whitespace-nowrap
    max-[767px]:h-auto
    max-[767px]:w-full
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


        {/* PARAGRAPH */}

        <div
          className="
            absolute
            right-0
            top-[42px]
            flex
            h-[95px]
            w-[640px]
            max-w-[50%]
            items-start

            max-[767px]:static
            max-[767px]:mt-8
            max-[767px]:h-auto
            max-[767px]:w-full
            max-[767px]:max-w-full
          "
        >
          <p
            className="
              w-full
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