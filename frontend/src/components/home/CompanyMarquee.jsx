import { motion } from "framer-motion";

const companies = [
  "/companies/logo_bacoola.png",
  "/companies/logo_celinea.png",
  "/companies/logo_coffee theory.png",
  "/companies/logo_cottson.png",
  "/companies/logo_datacircles.png",
  "/companies/logo_nitty gritty.png",
  "/companies/logo_palmore.png",
  "/companies/logo_tea archive.png",
];

const CompanyMarquee = () => {
  const repeatedCompanies = [...companies, ...companies];

  return (
    <section
      className="
        overflow-hidden
        bg-white
        py-6

        sm:py-8

        md:py-10
      "
    >
      <div className="relative w-full overflow-hidden">

        {/* Left fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-8
            bg-gradient-to-r
            from-white
            to-transparent

            sm:w-12

            md:w-16

            lg:w-24
          "
        />


        {/* Right fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-8
            bg-gradient-to-l
            from-white
            to-transparent

            sm:w-12

            md:w-16

            lg:w-24
          "
        />


        <motion.div
          className="
            flex
            w-max
            items-center
            gap-2

            sm:gap-3

            md:gap-4

            lg:gap-5
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          {repeatedCompanies.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="
                flex
                h-10
                w-24
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-gray-900
                bg-white
                px-3

                sm:h-12
                sm:w-28
                sm:px-4

                md:h-14
                md:w-32
                md:px-5

                lg:h-16
                lg:w-40
                lg:px-7
              "
            >
              <img
                src={logo}
                alt="Company logo"
                className="
                  max-h-4
                  max-w-[60px]
                  object-contain

                  sm:max-h-5
                  sm:max-w-[75px]

                  md:max-h-6
                  md:max-w-[90px]

                  lg:max-h-7
                  lg:max-w-[110px]
                "
              />
            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default CompanyMarquee;