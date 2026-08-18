import Navbar from "../components/home/Navbar";
import FourCards from "../components/three-services/FourCards";
import Footer from "../components/home/Footer";
import ServiceIntro from "../components/three-services/ServiceIntro";
import LandingFeatureCard from "../components/brand-identity/LandingFeatureCard";
import Process from "../components/home/Process";
import TechStack from "../components/home/Techstack";
import SelectedProjects2 from "../components/home/SelectedProjects2";
import CustomerReviews from "../components/home/CustomerReviews";
import WhyCopperStudio from "../components/home/WhyCopperStudio";
import FAQ from "../components/three-services/FAQ";
import FinalCTA from "../components/contact/CTA";

const features = [
  {
    image: "/services/services_branding_5.png",
    heading: "Brand Identity & Strategy",
    description:
      "Logo design, brand strategy, visual identity, and brand guidelines that help your business stand out and build lasting recognition.",
    tags: [
      "Brand Strategy",
      "Logo Design",
      "Typography & Colour Palette",
      "Patterns & Iconography",
    ],
  },
  {
    image: "/services/services_branding_6.png",
    heading: "Corporate Branding & Business Assets",
    description:
      "Bring your brand into every everyday business interaction with thoughtfully designed corporate assets.",
    tags: [
      "Business Card",
      "Leatherhead & Envelope",
      "Digital Documents Templates",
      "Employee Assets",
    ],
  },
  {
    image: "/services/services_branding_7.png",
    heading: "Marketing Collateral & Social Media Design",
    description:
      "Turn your brand into engaging marketing content designed to capture attention and communicate clearly.",
    tags: [
      "Brochure/Print Collateral",
      "Digital & Promotional Assets",
      "Marketing Templates & Assets",
    ],
  },
  {
    image: "/services/services_branding_8.png",
    heading: "Packaging, Environmental & Merchandise Design",
    description:
      "Extend your brand beyond the screen and into the physical experiences your customers interact with.",
    tags: [
      "Packaging & Label Design",
      "Apparel & Merchandise",
      "Event & Promotional Branding",
    ],
  },
];

const features1 = [
  {
    image: "/services/services_website_5.png",
    heading: "Custom Website Design",
    description:
      "Custom, responsive website designed to reflect your brand and deliver a seamless user experience.",
    tags: [],
  },
  {
    image: "/services/services_website_6.png",
    heading: "E-Commerce Stores",
    description:
      "Online stores built to showcase products, simplify shopping and increase sales.",
    tags: [],
  },
  {
    image: "/services/services_website_7.png",
    heading: "Campaign Landing Page",
    description:
      "Conversion focused landing pages designed to capture leads and drive customer action.",
    tags: [],
  },
  {
    image: "/services/services_website_8.png",
    heading: "Content Management Systems (CMS)",
    description:
      "Easy-to-manage CMS websites that let you update content without technical expertise.",
    tags: [],
  },
];

const features2 = [
  {
    image: "/services/cp1.svg",
    heading: "Custom Company Portals",
    description:
      "Secure client portals that simplify communication, file sharing, approvals and project tracking.",
  },
  {
    image: "/services/cp2.svg",
    heading: "Custom CRM Solutions",
    description:
      "Tailored CRM solutions that centralize customer data, sales and relationship management.",
  },
  {
    image: "/services/cp3.svg",
    heading: "Billing & Invoicing Systems",
    description:
      "Custom invoicing systems that automate billing, payments and financial workflows.",
  },
];

const ThreeServices = () => {
  return (
    <main className="min-h-screen w-full bg-white">

      <Navbar />
{/* =====================================
    HERO
====================================== */}

<section className="mt-20 w-full bg-white">

  <div
    className="
      mx-auto
      flex
      h-[343px]
      w-[1200px]
      max-w-full
      flex-col
      items-center
      justify-center

      max-[767px]:h-auto
      max-[767px]:px-5
      max-[767px]:py-16
    "
  >

    {/* Main Text */}

    <div
      className="
        flex
        h-[152px]
        w-[892px]
        max-w-full
        items-center
        justify-center
        text-center

        max-[767px]:h-auto
        max-[767px]:w-full
      "
    >
      <h1
        className="
          w-full
          font-dm-sans
          text-[70px]
          font-bold
          leading-[76px]
          tracking-[-0.75px]
          text-black

          max-[767px]:text-[42px]
          max-[767px]:leading-[46px]
          max-[767px]:tracking-[-0.5px]

          max-[480px]:text-[34px]
          max-[480px]:leading-[38px]
        "
      >
        Ideas Into Identities.
        <br />
        Identities Into Experiences.
      </h1>
    </div>


    {/* Supporting Text */}

    <div
      className="
        mt-6
        flex
        h-[76px]
        w-[750px]
        max-w-full
        items-center
        justify-center
        text-center
        -translate-y-5

        max-[767px]:mt-8
        max-[767px]:h-auto
        max-[767px]:w-full
        max-[767px]:translate-y-0
      "
    >
      <p
        className="
          w-full
          font-dm-sans
          text-[18px]
          font-light
          leading-[24px]
          text-black/75

          max-[767px]:text-[16px]
          max-[767px]:leading-[22px]

          max-[480px]:text-[15px]
          max-[480px]:leading-[21px]
        "
      >
        We build distinctive brands, thoughtful digital experiences,
        and custom systems designed around how your business works.
      </p>
    </div>

  </div>


  {/* =====================================
      SERVICES HEADING
  ====================================== */}

  <div
    className="
      mt-10
      ml-20
      flex
      h-[52px]
      w-[930px]
      max-w-full
      items-center
      justify-start
      text-left

      max-[767px]:ml-0
      max-[767px]:mt-8
      max-[767px]:h-auto
      max-[767px]:w-full
      max-[767px]:px-6
    "
  >
    <p
      className="
        w-full
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
      Three Services to Move Forward
    </p>
  </div>


  {/* =====================================
      SERVICES DESCRIPTION
  ====================================== */}

  <div
    className="
      mt-6
      ml-20
      flex
      h-[95px]
      w-[928px]
      max-w-full
      items-center
      justify-start
      text-left

      max-[767px]:ml-0
      max-[767px]:h-auto
      max-[767px]:w-full
      max-[767px]:px-6
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

        max-[480px]:text-[15px]
        max-[480px]:leading-[21px]
      "
    >
      We design brands, digital experiences, and business systems
      <br className="max-[767px]:hidden" />
      that help companies stand out and work smarter.
      <br className="max-[767px]:hidden" />
      Three focused capabilities, one connected approach,
      <br className="max-[767px]:hidden" />
      and everything designed to work together.
    </p>
  </div>

</section>


      <FourCards />


      {/* =====================================
          SERVICE 01
      ====================================== */}

      <ServiceIntro
        svg="/services/main01.svg"
        heading="Brand Identity"
        description="Develop a strategic brand identity with custom logo design, visual systems, typography, and brand guidelines that create a lasting impression across every touchpoint. Build a consistent and recognisable brand presence that connects with your audience and grows with your business."
      />


      <section
        className="
          mt-16
          w-full
          px-6
          pb-20

          sm:px-10
          md:px-16
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-5
            md:grid-cols-2
          "
        >
          {features.map((feature) => (
            <LandingFeatureCard
              key={feature.heading}
              image={feature.image}
              heading={feature.heading}
              description={feature.description}
              tags={feature.tags}
            />
          ))}
        </div>
      </section>


      {/* =====================================
          SERVICE 02
      ====================================== */}

      <ServiceIntro
        svg="/services/main02.svg"
        heading={
          <>
            Web Design & <br />
            Development
          </>
        }
        description="Create a digital presence that feels as strong as your brand. We combine thoughtful UX, distinctive visual design, and reliable development to build responsive websites that are easy to navigate, easy to manage, and built to grow with your business."
      />


      <section
        className="
          mt-16
          w-full
          px-6
          pb-20

          sm:px-10
          md:px-16
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-5
            md:grid-cols-2
          "
        >
          {features1.map((feature) => (
            <LandingFeatureCard
              key={feature.heading}
              image={feature.image}
              heading={feature.heading}
              description={feature.description}
              tags={feature.tags}
            />
          ))}
        </div>
      </section>


      {/* =====================================
          SERVICE 03
      ====================================== */}

      <ServiceIntro
        svg="/services/main03.svg"
        heading="Custom Company Portals"
        description="Create secure custom business portals tailored to your workflow. We build systems that simplify communication, centralize information, automate everyday operations, and give your team better control over how the business works."
      />


      <section
        className="
          mt-16
          w-full
          px-6
          pb-20

          sm:px-10
          md:px-16
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

          {features2.map((feature) => (
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
              "
            >

              {/* IMAGE */}

              <div
                className="
                  h-[309px]
                  w-[397px]
                  max-w-full
                  overflow-hidden
                  rounded-xl

                  max-[767px]:h-[260px]
                "
              >
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>


              {/* HEADING + PARAGRAPH */}

              <div
                className="
                  flex
                  h-[143px]
                  w-full
                  flex-col
                  justify-center
                  px-3
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


      <Process />

      <TechStack />

      <SelectedProjects2 />

      <CustomerReviews />

      <WhyCopperStudio />

      <FAQ />

      <FinalCTA />

      <Footer />

    </main>
  );
};

export default ThreeServices;