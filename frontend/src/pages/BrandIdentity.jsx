import Navbar from "../components/brand-identity/Navbar.jsx";
import Hero from "../components/home/Hero.jsx";
import FloatingActions from "../components/home/FloatingActions.jsx";
import CustomerReviews from "../components/home/CustomerReviews.jsx";
import CTA from "../components/brand-identity/CTA.jsx";
import Footer from "../components/home/Footer.jsx";

import LandingFeatureCard from "../components/brand-identity/LandingFeatureCard.jsx";
import Marquee from "../components/brand-identity/Marquee.jsx";

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

function BrandIdentity() {
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
          mt-8
          ml-0
          flex
          w-full
          max-w-[1140px]
          items-center
          justify-start
          bg-white
          px-4
          py-6
          text-left
          sm:px-10
          sm:py-8
          md:px-20
          lg:h-[214px]
          lg:py-0
        "
      >
        <p
          className="
            max-w-[900px]
            font-dm-sans
            text-lg
            font-medium
            leading-relaxed
            tracking-tight
            text-black
            sm:text-xl
            md:text-2xl
            lg:text-3xl
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

      <div
        className="
          mt-10
          ml-0
          flex
          h-auto
          w-full
          max-w-[749px]
          flex-col
          justify-center
          px-4
          sm:px-10
          md:px-20
        "
      >
        {/* Heading */}

        <div
          className="
            flex
            h-auto
            w-full
            items-center
          "
        >
          <h2
            className="
              font-dm-sans
              text-[36px]
              font-semibold
              leading-tight
              tracking-tight
              text-black
              sm:text-[48px]
              md:text-[56px]
              lg:text-[62px]
              lg:leading-[52px]
              lg:whitespace-nowrap
            "
          >
            Brand Identity
          </h2>
        </div>

        {/* Paragraph */}

        <div
          className="
            mt-3
            flex
            h-auto
            w-full
            max-w-[747px]
            items-start
          "
        >
          <p
            className="
              w-full
              max-w-[747px]
              font-dm-sans
              text-[15px]
              font-normal
              leading-[24px]
              text-black/80
              sm:text-[17px]
              lg:text-[18px]
            "
          >
            Develop a strategic brand identity with custom logo design,
            visual systems, typography, and brand guidelines that create a
            lasting impression across every touchpoint.
          </p>
        </div>
      </div>

      {/* =====================================
          FEATURE CARDS — 2 × 2
      ====================================== */}

      <section
        className="
          mt-10
          w-full
          gap-y-3
          px-4
          pb-20
          sm:mt-14
          sm:px-6
          md:px-10
          lg:mt-16
          lg:px-16
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-x-2
            gap-y-5
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

      <Marquee />

      <CustomerReviews />

      <CTA />

      <Footer />
    </main>
  );
}

export default BrandIdentity;