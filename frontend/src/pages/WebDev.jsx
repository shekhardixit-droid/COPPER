import Navbar from "../components/brand-identity/Navbar.jsx";
import Hero from "../components/home/Hero.jsx";
import FloatingActions from "../components/home/FloatingActions.jsx";
import CustomerReviews from "../components/home/CustomerReviews.jsx";
import CTA from "../components/webdev/CTA";
import Footer from "../components/home/Footer.jsx";

import LandingFeatureCard from "../components/webdev/LandingFeatureCard.jsx";
import Marquee from "../components/brand-identity/Marquee.jsx";

const features = [
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

const BrandIdentity = () => {
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
            We build strategic websites that give your business a clear digital presence. From
          </span>{" "}
          <span className="text-black">
            UX and interface design to responsive development, CMS, and performance
          </span>{" "}
          <span className="text-black/40">
            every element works together to create a website that feels distinctive, intuitive, and built to grow.
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
            Web Design & Development
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
            Design and develop a high-performing website with thoughtful UX, custom interfaces, responsive development, and seamless interactions that turn visitors into customers.
          </p>
        </div>
      </div>


      {/* =====================================
          FEATURE CARDS — 2 × 2
      ====================================== */}

      <section
        className="
          mt-16
          w-full
          px-6
          gap-y-3
          pb-20
          sm:px-10
          md:px-16
          max-[1023px]:px-4
          max-[1023px]:mt-8
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-y-5
            gap-x-2
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

      <CTA/>

      <Footer />

    </main>
  );
};

export default BrandIdentity;