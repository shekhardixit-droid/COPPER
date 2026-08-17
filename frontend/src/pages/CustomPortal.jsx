import Navbar from "../components/brand-identity/Navbar.jsx";
import Hero from "../components/home/Hero.jsx";
import FloatingActions from "../components/home/FloatingActions.jsx";
import CustomerReviews from "../components/home/CustomerReviews.jsx";
import CTA from "../components/custom-portal/CTA";
import Footer from "../components/home/Footer.jsx";

import Marquee from "../components/brand-identity/Marquee.jsx";

const features = [
  {
    image: "/services/cp1.svg",
    heading: "Custom Company Portals",
    description:
      "Secure client portals that simplify communication, file sharing, approvals and project tracking. ",
  },
  {
    image:  "/services/cp2.svg",
    heading: "Custom CRM Solutions",
    description:
      "Tailored CRM solutions that centralize customer data, sales and relationship management.",
  },
  {
    image:  "/services/cp3.svg",
    heading: "Billing & Invoicing Systems",
    description:
      "Custom invoicing systems that automate billing, payments and financial workflows.",
  },
];

const CustomPortal= () => {
  return (
    <main className="min-h-screen w-full bg-white">

      <Navbar />

      {/* =====================================
          LANDING PAGE CONTENT
      ====================================== */}

      <section className="w-full">
        {/* New landing page components will go here */}
      </section>

      <Hero />

     

      <div
        className="
          mt-15
          ml-0
          flex
          h-[214px]
          w-full
          max-w-[1140px]
          items-center
          justify-start
          bg-white
          px-20
          text-left
          max-[1023px]:h-auto
          max-[1023px]:px-4
          max-[1023px]:py-6
          max-[1023px]:mt-6
          sm:px-10
        "
      >
        <p
          className="
            max-w-[900px]
            font-dm-sans
            text-xl
            font-medium
            leading-relaxed
            tracking-tight
            text-black
            sm:text-2xl
            md:text-3xl
          "
        >
          <span className="text-black/40">
           We build custom company portals that 
          </span>{" "}
          <span className="text-black">
            bring your business, teams, and workflows into one connected platform.
          </span>{" "}
          <span className="text-black/40">
            From dashboards and document management to approvals, communication, and automation, every feature is designed around how your business works.
          </span>
        </p>
      </div>


      <div
        className="
          mt-16
          ml-0
          flex
          h-[123px]
          w-full
          max-w-[749px]
          flex-col
          justify-center
          max-[1023px]:h-auto
          max-[1023px]:mt-8
          max-[1023px]:px-4
          sm:px-10
        "
      >

        {/* Heading */}

        <div
          className="
            flex
            h-[52px]
            w-full
            items-center
            px-20
            max-[1023px]:h-auto
            max-[1023px]:px-0
          "
        >
          <h2
            className="
              whitespace-nowrap
              font-dm-sans
              text-[62px]
              font-semibold
              leading-[52px]
              tracking-tight
              text-black
              max-[1023px]:whitespace-normal
              max-[1023px]:text-[32px]
              max-[1023px]:leading-tight
              sm:text-[44px]
              md:text-[54px]
              lg:text-[62px]
              lg:leading-[52px]
              lg:whitespace-nowrap
            "
          >
           Custom Company Portal
          </h2>
        </div>


        {/* Paragraph */}

        <div
          className="
            mt-3
            flex
            h-[47px]
            w-full
            max-w-[747px]
            items-start
            px-20
            max-[1023px]:h-auto
            max-[1023px]:px-0
            max-[1023px]:mt-3
          "
        >
          <p
            className="
              h-[48px]
              w-full
              max-w-[747px]
              font-dm-sans
              text-[18px]
              font-normal
              leading-[24px]
              text-black/80
              max-[1023px]:h-auto
              max-[1023px]:text-[15px]
            "
          >
           Build a secure, intuitive portal tailored to your workflows, with custom features that simplify operations, improve collaboration, and give your team everything they need in one place.
          </p>
        </div>
      </div>


      {/* =====================================
          3 FEATURE CARDS
      ====================================== */}

      <section
        className="
          mt-16
          w-full
          px-6
          pb-20
          sm:px-10
          md:px-16
          max-[1023px]:px-4
          max-[1023px]:mt-8
        "
      >

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1280px]
            grid-cols-1
            justify-items-center
            gap-5

            lg:grid-cols-3
          "
        >

          {features.map((feature) => (
            <div
              key={feature.heading}
              className="
                h-[460px]
                w-[413px]
                max-w-full
                overflow-hidden
                rounded-2xl
                bg-[#f7f7f5]
                p-2
                max-[1023px]:h-auto
                max-[1023px]:w-full
              "
            >

              {/* IMAGE — 397 × 309 */}

              <div
                className="
                  h-[309px]
                  w-[397px]
                  max-w-full
                  overflow-hidden
                  rounded-xl
                  max-[1023px]:h-[220px]
                  max-[1023px]:w-full
                  sm:h-[260px]
                  lg:h-[309px]
                  lg:w-[397px]
                "
              >
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>


              {/* =====================================
                  HEADING + PARAGRAPH
              ====================================== */}

              <div
                className="
                  flex
                  h-[143px]
                  w-full
                  flex-col
                  justify-center
                  px-3
                  max-[1023px]:h-auto
                  max-[1023px]:py-4
                "
              >

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
                  {feature.heading}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[380px]
                    font-dm-sans
                    text-[16px]
                    font-normal
                    leading-[24px]
                    text-black/50
                  "
                >
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>


      <Marquee />

      <CustomerReviews />

      <CTA/>

      <Footer />

    </main>
  );
};

export default CustomPortal;