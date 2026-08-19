import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const Disclosures = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#05050B]">
      <Navbar />

      {/* =========================
          PAGE HEADING
      ========================= */}
      <section className="flex w-full justify-center px-5 pt-[184px] sm:px-8 md:px-10">
        <h1
          className="
            font-['DM_Sans',sans-serif]
            text-center
            text-[36px]
            font-bold
            leading-[1.1]
            tracking-[-0.03em]
            text-[#05050B]
            sm:text-[44px]
            md:text-[52px]
            lg:text-[56px]
          "
        >
          Disclosures
        </h1>
      </section>

      {/* =========================
          CONTENT
          SAME ALIGNMENT AS PRIVACY
      ========================= */}
      <section className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-[107px] sm:px-8 md:px-10 lg:px-0">
        <article
          className="
            w-full
            font-['DM_Sans',sans-serif]
            text-[16px]
            font-normal
            leading-[22px]
            tracking-[0]
            text-[#05050B]
          "
        >
          <p className="mb-8 font-medium">
            Last Updated: 9th July, 2026
          </p>

          <p className="mb-7">
            This Disclosures page explains certain practices on our website,
            thecopperstudio.com, operated by The Copper Studio ("we", "us",
            "our"). We believe in being transparent with our visitors and
            clients. Please read the disclosures below.
          </p>

          {/* 1. Affiliate and referral links */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              1. Affiliate and referral links:
            </h2>

            <p className="mb-4">
              Some links on our Website may be affiliate or referral links.
              This means that if you click such a link and purchase a product
              or service, or sign up for a tool we recommend, we may earn a
              commission or referral fee — at no additional cost to you.
            </p>

            <p className="mb-4">
              We only recommend tools, products, and services that we genuinely
              believe may be useful. A commission or referral arrangement does
              not influence our honest opinion, and you are never under any
              obligation to use a linked product or service. Where a commission
              may arise, we aim to make that relationship clear.
            </p>
          </section>

          {/* 2. Client testimonials and results */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              2. Client testimonials and results:
            </h2>

            <p className="mb-4">
              Our Website may feature testimonials, reviews, and examples of
              work from our clients. These reflect the genuine experiences and
              opinions of those specific clients at a specific point in time.
            </p>

            <p className="mb-4">
              Testimonials are not a guarantee that you will achieve the same
              or similar results. Every business, brand, and project is
              different, and outcomes depend on many factors — including your
              market, your goals, your involvement, and circumstances outside
              our control. Testimonials should be taken as individual
              experiences, not as a promise of results for your business.
            </p>
          </section>

          {/* 3. No guarantee of results */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              3. No guarantee of results:
            </h2>

            <p className="mb-4">
              We take pride in our work and are committed to delivering
              high-quality branding, websites, and software for our clients.
              However, we do not guarantee any specific business result,
              outcome, or performance from our services — including, for
              example, particular levels of traffic, leads, sales, search-engine
              rankings, conversions, or revenue.
            </p>

            <p className="mb-4">
              The success of any project depends on numerous factors, many of
              which are outside our control. Any timelines, projections, or
              examples shared on our Website or during consultations are
              illustrative only and are not promises or guarantees. Specific
              deliverables and commitments for your project will be set out in
              your written proposal or statement of work.
            </p>
          </section>

          {/* 4. Informational content */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              4. Informational content:
            </h2>

            <p className="mb-4">
              Content on our Website is provided for general information only.
              It does not constitute professional, legal, financial, or business
              advice, and should not be relied upon as such. You should seek
              appropriate professional advice before making decisions based on
              any information on our Website.
            </p>
          </section>

          {/* 5. Changes to this page */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              5. Changes to this page:
            </h2>

            <p className="mb-4">
              We may update this Disclosures page from time to time. The "Last
              updated" date reflects the current version.
            </p>
          </section>

          {/* 6. Contact us */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              6. Contact us:
            </h2>

            <p className="mb-3">
              If you have any questions about these disclosures:
            </p>

            {/* Contact list */}
            <ul
              className="
                list-disc
                pl-5
                mb-3
                font-['DM_Sans',sans-serif]
                text-[16px]
                font-normal
                leading-[22px]
                text-[#05050B]
              "
            >
              <li>The Copper Studio</li>

              <li>
                Email: support@thecopperstudio.com/ contact@thecopperstudio.com
              </li>

              <li>
                Phone: +91 9820933877
              </li>

              <li>
                Address: Registered Office No. 721, Floor 7th, Centura Square
                IT Park, Road Number 27, Wagle Estate, Thane West (400604) -
                Maharashtra, India.
              </li>
            </ul>
          </section>
        </article>
      </section>

      {/* =========================
          SAME FOOTER AS PRIVACY
      ========================= */}
      <Footer />
    </main>
  );
};

export default Disclosures;