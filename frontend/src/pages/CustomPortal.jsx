import Navbar from "../components/brand-identity/Navbar.jsx";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero.jsx";
import FloatingActions from "../components/home/FloatingActions.jsx";
import CustomerReviews from "../components/home/CustomerReviews.jsx";
import CTA from "../components/custom-portal/CTA";
import Footer from "../components/home/Footer.jsx";
import Marquee from "../components/custom-portal/Marquee.jsx";

/* ------------------------------------------------------------------
   DATA
------------------------------------------------------------------- */

const features = [
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/Frame%202147227968.png",
    heading: "Custom Company Portals",
    description:
      "Secure client portals that simplify communication, file sharing, approvals and project tracking.",
  },
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/Frame%202147227970.png",
    heading: "Custom CRM Solutions",
    description:
      "Tailored CRM solutions that centralize customer data, sales and relationship management.",
  },
  {
    image: "https://ik.imagekit.io/qiap0iq38/home/services/Frame%202147227969.png",
    heading: "Billing & Invoicing Systems",
    description:
      "Custom invoicing systems that automate billing, payments and financial workflows.",
  },
];

/* ------------------------------------------------------------------
   SHARED LAYOUT TOKENS (same as the other service pages)
------------------------------------------------------------------- */

const GUTTER = "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20";
const WRAP = `mx-auto w-full max-w-[1440px] ${GUTTER}`;

/* ------------------------------------------------------------------
   REUSABLE PIECE
------------------------------------------------------------------- */

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
        className="h-full w-full object-cover"
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

const CustomPortal = () => {
  return (
    <main className="min-h-screen w-full bg-white">
      <Helmet>
  <title>Custom Portal | Copper Studio</title>
  <meta
    name="description"
    content="Explore custom digital portals designed and developed by Copper Studio for unique business needs."
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
            We build custom company portals that
          </span>{" "}
          <span className="text-black">
            bring your business, teams, and workflows into one connected
            platform.
          </span>{" "}
          <span className="text-black/40">
            From dashboards and document management to approvals,
            communication, and automation, every feature is designed around
            how your business works.
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
          Custom Company Portal
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
          Build a secure, intuitive portal tailored to your workflows, with
          custom features that simplify operations, improve collaboration,
          and give your team everything they need in one place.
        </p>
      </div>

      {/* =====================================
          3 FEATURE CARDS
      ====================================== */}

      <section className={`${WRAP} mt-10 pb-14 sm:mt-12 md:pb-20 lg:mt-16`}>
        {/* flex-wrap + justify-center: 3 → 2 → 1 columns, and an
            orphan card is always centered instead of stuck left */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-wrap justify-center gap-5">
          {features.map((feature) => (
            <PortalCard
              key={feature.heading}
              image={feature.image}
              heading={feature.heading}
              description={feature.description}
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

export default CustomPortal;