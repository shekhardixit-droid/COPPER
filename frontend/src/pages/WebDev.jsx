import Navbar from "../components/brand-identity/Navbar.jsx";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero.jsx";
import FloatingActions from "../components/home/FloatingActions.jsx";
import CustomerReviews from "../components/home/CustomerReviews.jsx";
import CTA from "../components/webdev/CTA";
import Footer from "../components/home/Footer.jsx";

import LandingFeatureCard from "../components/webdev/LandingFeatureCard.jsx";
import Marquee from "../components/webdev/Marquee.jsx";

/* ------------------------------------------------------------------
   DATA
------------------------------------------------------------------- */

const features = [
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

/* ------------------------------------------------------------------
   SHARED LAYOUT TOKENS (same as the other service pages)
------------------------------------------------------------------- */

const GUTTER = "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20";
const WRAP = `mx-auto w-full max-w-[1440px] ${GUTTER}`;

/* ------------------------------------------------------------------
   PAGE
------------------------------------------------------------------- */

const WebDev = () => {
  return (
    <main className="min-h-screen w-full bg-white">
      <Helmet>
  <title>Web Design | Copper Studio</title>
  <meta
    name="description"
    content="Copper Studio designs and develops thoughtful, modern websites built around your brand and digital goals."
  />
  <meta
  property="og:image"
  content="https://res.cloudinary.com/tpxo8m6a/image/upload/v1789970465/ChatGPT_Image_Sep_21_2026_11_29_49_AM.png"
/>
<meta property="og:site_name" content="Copper Studio" />
</Helmet>

    <main className="min-h-screen w-full overflow-x-clip bg-white">
      <Navbar />

      <Hero />

      {/* =====================================
          INTRO STATEMENT
      ====================================== */}

      <div className={`${WRAP} mt-8 py-8 md:mt-12 md:py-12 lg:py-16`}>
        <p
          className="
            max-w-[900px]
            text-pretty
            font-dm-sans
            text-[clamp(1.125rem,2.4vw,1.875rem)]
            font-medium
            leading-[1.45]
            tracking-tight
            text-black
          "
        >
          <span className="text-black/40">
            We build strategic websites that give your business a clear
            digital presence. From
          </span>{" "}
          <span className="text-black">
            UX and interface design to responsive development, CMS, and
            performance
          </span>{" "}
          <span className="text-black/40">
            every element works together to create a website that feels
            distinctive, intuitive, and built to grow.
          </span>
        </p>
      </div>

      {/* =====================================
          SECTION HEADING
      ====================================== */}

      <div className={`${WRAP} mt-6 md:mt-10`}>
        <h2
          className="
            max-w-[1000px]
            text-balance
            font-dm-sans
            text-[clamp(2rem,5vw,3.875rem)]
            font-semibold
            leading-[1.1]
            tracking-tight
            text-black
          "
        >
          Web Design & Development
        </h2>

        <p
          className="
            mt-3
            max-w-[747px]
            font-dm-sans
            text-[0.9375rem]
            font-normal
            leading-relaxed
            text-black/80
            sm:text-base
            lg:text-lg
          "
        >
          Design and develop a high-performing website with thoughtful UX,
          custom interfaces, responsive development, and seamless
          interactions that turn visitors into customers.
        </p>
      </div>

      {/* =====================================
          FEATURE CARDS — 2 × 2
      ====================================== */}

      <section className={`${WRAP} mt-10 pb-14 sm:mt-12 md:pb-20 lg:mt-16`}>
        <div className="grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
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

      <Marquee />

      <CustomerReviews />

      <CTA />

      <Footer />
    </main>
    </main>
  );
};

export default WebDev;