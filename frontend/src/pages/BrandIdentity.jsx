import Navbar from "../components/brand-identity/Navbar.jsx";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero.jsx";
import FloatingActions from "../components/home/FloatingActions.jsx";
import CustomerReviews from "../components/home/CustomerReviews.jsx";
import CTA from "../components/brand-identity/CTA.jsx";
import Footer from "../components/home/Footer.jsx";

import LandingFeatureCard from "../components/brand-identity/LandingFeatureCard.jsx";
import Marquee from "../components/brand-identity/Marquee.jsx";

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

/* ------------------------------------------------------------------
   SHARED LAYOUT TOKENS
   Every block below uses the same centered wrapper + gutters, so text
   and cards stay aligned at every zoom level and viewport width.
------------------------------------------------------------------- */

const GUTTER = "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20";
const WRAP = `mx-auto w-full max-w-[1440px] ${GUTTER}`;

/* ------------------------------------------------------------------
   PAGE
------------------------------------------------------------------- */

function BrandIdentity() {
  return (
    <main className="min-h-screen w-full bg-white">
       <Helmet>
        <title>Brand Identity | Copper Studio</title>
        <meta
          name="description"
          content="Build a distinctive brand identity with Copper Studio through strategy, design, and thoughtful visual systems."
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

      <div className={`${WRAP} mt-8 py-8 md:py-12 lg:py-16`}>
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
            We build strategic brand identities that give your business a
            clear point of view.
          </span>{" "}
          <span className="text-black">
            From logo design and visual language to typography, colour, and
            brand guidelines, every element works together to create a brand
            that
          </span>{" "}
          <span className="text-black/40">
            feels distinct, consistent, and built to grow.
          </span>
        </p>
      </div>

      {/* =====================================
          SECTION HEADING
      ====================================== */}

      <div className={`${WRAP} mt-6 md:mt-10`}>
        <h2
          className="
            text-balance
            font-dm-sans
            text-[clamp(2.25rem,5vw,3.875rem)]
            font-semibold
            leading-[1.1]
            tracking-tight
            text-black
          "
        >
          Brand Identity
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
            sm:text-[1.0625rem]
            lg:text-lg
          "
        >
          Develop a strategic brand identity with custom logo design, visual
          systems, typography, and brand guidelines that create a lasting
          impression across every touchpoint.
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
}

export default BrandIdentity;