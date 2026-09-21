import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";
import FourCards from "../components/three-services/FourCards";
import Footer from "../components/home/Footer";
import ServiceIntro from "../components/three-services/ServiceIntro";
import LandingFeatureCard from "../components/brand-identity/LandingFeatureCard";
import Process from "../components/home/Process";
import TechStack from "../components/home/Techstack";
import WhatWeBuild from "../components/three-services/WhatWeBuild";
import CustomerReviews from "../components/home/CustomerReviews";
import WhyCopperStudio from "../components/home/WhyCopperStudio";
import FAQ from "../components/three-services/FAQ";
import FinalCTA from "../components/contact/CTA";

/* ------------------------------------------------------------------
   DATA
------------------------------------------------------------------- */

const features = [
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/services_branding_5.png?updatedAt=1787289846541",
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
    image: "https://ik.imagekit.io/qiap0iq38/home/services/services_branding_6.png?updatedAt=1787289848100",
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
    image: "https://ik.imagekit.io/qiap0iq38/home/services/services_branding_7.png?updatedAt=1787289848397",
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
    image: "https://ik.imagekit.io/qiap0iq38/home/services/services_branding_8.png?updatedAt=1787289849018",
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
    image: "https://ik.imagekit.io/qiap0iq38/home/services/services_website_5.png?updatedAt=1787289848992",
    heading: "Custom Website Design",
    description:
      "Custom, responsive website designed to reflect your brand and deliver a seamless user experience.",
    tags: [],
  },
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/services_website_6.png?updatedAt=1787289847422",
    heading: "E-Commerce Stores",
    description:
      "Online stores built to showcase products, simplify shopping and increase sales.",
    tags: [],
  },
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/services_website_7.png?updatedAt=1787289848294",
    heading: "Campaign Landing Page",
    description:
      "Conversion focused landing pages designed to capture leads and drive customer action.",
    tags: [],
  },
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/services_website_8.png?updatedAt=1787289847631",
    heading: "Content Management Systems (CMS)",
    description:
      "Easy-to-manage CMS websites that let you update content without technical expertise.",
    tags: [],
  },
];

const features2 = [
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/Frame%202147227968.png",
    heading: "Custom Company Portals",
    description:
      "Secure client portals that simplify communication, file sharing, approvals and project tracking.",
  },
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/Frame%202147227969.png",
    heading: "Custom CRM Solutions",
    description:
      "Tailored CRM solutions that centralize customer data, sales and relationship management.",
  },
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/Frame%202147227970.png",
    heading: "Billing & Invoicing Systems",
    description:
      "Custom invoicing systems that automate billing, payments and financial workflows.",
  },
];

/* ------------------------------------------------------------------
   SHARED LAYOUT TOKENS
   - Never use fixed px widths/heights for containers or text boxes.
     At high zoom the viewport shrinks (in CSS px) and fixed boxes
     overflow; at low zoom the viewport grows and fixed boxes look
     stranded. So: fluid width + max-width + centered.
------------------------------------------------------------------- */

// Horizontal page gutters that grow with the viewport
const GUTTER = "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20";

// Centered, capped content wrapper
const WRAP = `mx-auto w-full max-w-[1440px] ${GUTTER}`;

/* ------------------------------------------------------------------
   REUSABLE PIECES
------------------------------------------------------------------- */

// 2-column card grid used by Service 01 and Service 02
const FeatureGrid = ({ items }) => (
  <section className={`${WRAP} mt-10 pb-14 sm:mt-12 md:mt-16 md:pb-20`}>
    <div className="grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
      {items.map((feature) => (
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
);

// Portal card used by Service 03
const PortalCard = ({ image, heading, description }) => (
  <article
    className="
      flex
      w-full
      max-w-[413px]
      flex-col
      overflow-hidden
      rounded-2xl
      bg-[#f7f7f5]
      p-2
    "
  >
    {/* IMAGE: keeps the original 397 x 309 ratio at any width */}
    <div className="aspect-[397/309] w-full overflow-hidden rounded-xl">
      <img
        src={image}
        alt={heading}
        loading="lazy"
        className="h-full w-full object-contain"
      />
    </div>

    {/* TEXT: height follows content, never clipped */}
    <div className="flex flex-1 flex-col justify-center px-3 py-5">
      <h3 className="font-dm-sans text-xl font-semibold leading-tight tracking-tight text-black sm:text-2xl">
        {heading}
      </h3>

      <p className="mt-2 font-dm-sans text-base font-normal leading-6 text-black/50">
        {description}
      </p>
    </div>
  </article>
);

/* ------------------------------------------------------------------
   PAGE
------------------------------------------------------------------- */

const ThreeServices = () => {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-white">
       
      <Helmet>
  <title>Services | Copper Studio</title>
  <meta
    name="description"
    content="Explore Copper Studio's brand identity, web design and development, and custom company portal services designed to help businesses build stronger brands and smarter digital experiences."
  />
  <meta
  property="og:image"
  content="https://res.cloudinary.com/tpxo8m6a/image/upload/v1789970465/ChatGPT_Image_Sep_21_2026_11_29_49_AM.png"
/>
<meta property="og:site_name" content="Copper Studio" />
</Helmet>
      <Navbar />

      {/* =====================================
          HERO
      ====================================== */}

      <section className="mt-20 w-full bg-white">
        {/* Main text + supporting text */}
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1200px]
            flex-col
            items-center
            justify-center
            px-5
            py-12
            text-center
            sm:px-8
            md:py-16
          "
        >
          <h1
            className="
              w-full
              max-w-[892px]
              text-balance
              font-dm-sans
              text-[clamp(2.125rem,6vw,4.375rem)]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-black
            "
          >
            Ideas Into Identities.
            <br className="max-[480px]:hidden" />{" "}
            Identities Into Experiences.
          </h1>

          <p
            className="
              mt-5
              w-full
              max-w-[750px]
              text-pretty
              font-dm-sans
              text-[0.9375rem]
              font-light
              leading-relaxed
              text-black/75
              sm:mt-6
              sm:text-base
              md:text-lg
            "
          >
            We build distinctive brands, thoughtful digital experiences, and
            custom systems designed around how your business works.
          </p>
        </div>

        {/* SERVICES HEADING + DESCRIPTION (aligned to the same page gutters) */}
        <div className={`${WRAP} mt-6 md:mt-10`}>
          <h2
            className="
              max-w-[930px]
              text-balance
              text-left
              font-dm-sans
              text-[clamp(2rem,5vw,3.875rem)]
              font-semibold
              leading-[1.1]
              tracking-[-0.02em]
              text-black
            "
          >
            Three Services to Move Forward
          </h2>

          <p
            className="
              mt-5
              max-w-[928px]
              text-left
              font-dm-sans
              text-[0.9375rem]
              font-normal
              leading-relaxed
              text-black/75
              sm:mt-6
              sm:text-base
              md:text-lg
            "
          >
            We design brands, digital experiences, and business systems
            <br className="max-lg:hidden" />{" "}
            that help companies stand out and work smarter.
            <br className="max-lg:hidden" />{" "}
            Three focused capabilities, one connected approach,
            <br className="max-lg:hidden" />{" "}
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
        heading={<>Brand Identity</>}
        description="Develop a strategic brand identity with custom logo design, visual systems, typography, and brand guidelines that create a lasting impression across every touchpoint. Build a consistent and recognisable brand presence that connects with your audience and grows with your business."
      />

      <FeatureGrid items={features} />

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

      <FeatureGrid items={features1} />

      {/* =====================================
          SERVICE 03
      ====================================== */}

      <ServiceIntro
        svg="/services/main03.svg"
        heading={
          <>
            Custom <br />
            Company Portal
          </>
        }
        description="Create secure custom business portals tailored to your workflow. We build systems that simplify communication, centralize information, automate everyday operations, and give your team better control over how the business works."
      />

      <section className={`${WRAP} mt-10 pb-14 sm:mt-12 md:mt-16 md:pb-20`}>
        {/* flex-wrap + justify-center: 3 → 2 → 1 columns, and an
            orphan card is always centered instead of stuck left */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-wrap justify-center gap-5">
          {features2.map((feature) => (
            <PortalCard
              key={feature.heading}
              image={feature.image}
              heading={feature.heading}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <Process />

      <TechStack />

      <WhatWeBuild />

      <CustomerReviews />

      <WhyCopperStudio />

      <FAQ />

      <FinalCTA />

      <Footer />
    </main>
  );
};

export default ThreeServices;