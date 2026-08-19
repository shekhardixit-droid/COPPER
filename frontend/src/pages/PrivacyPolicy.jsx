import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#05050B]">
      <Navbar />

      {/* =========================
          PAGE HEADING
          EXACTLY SAME AS DISCLOSURES
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
          Privacy Policy
        </h1>
      </section>

      {/* =========================
          CONTENT
          EXACTLY SAME ALIGNMENT
          AS DISCLOSURES
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
          {/* LAST UPDATED */}
          <p className="mb-8 font-medium">
            Last Updated: 9th July, 2026
          </p>

          {/* INTRODUCTION */}
          <p className="mb-7">
            The Copper Studio ("we", "us", "our") is a subsidiary owned and
            operated by of M/s DataCircles Technology with its place of
            business at Registered Office No. 721, Floor 7th, Centura Square IT
            Park, Road No. 27, Wagle Estate, Thane (West) – 400604,
            Maharashtra, India. We are committed to protecting the privacy of
            everyone who visits our website, thecopperstudio.com (the
            "Website"), and who contacts us or engages our services.
          </p>

          <p className="mb-8">
            This Privacy Policy explains what personal data we collect, why we
            collect it, how we use and protect it, and the rights you have over
            it. It is intended to align with the Digital Personal Data
            Protection Act, 2023 (the "DPDP Act") and other applicable Indian
            laws. By using our Website or sharing your information with us, you
            consent to the practices described here.
          </p>

          {/* =========================
              1. WHO WE ARE
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              1. Who we are (Data Fiduciary):
            </h2>

            <p className="mb-4">
              For the purposes of the DPDP Act, The Copper Studio is the "Data
              Fiduciary" that determines the purpose and means of processing
              your personal data. You ("you", "your", the "Data Principal") are
              the individual whose personal data we process.
            </p>

            <p className="mb-3">
              Contact for privacy matters:
            </p>

            <ul
              className="
                mb-3
                list-disc
                pl-5
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
                IT Park, Road Number 27, Wagle Estate, Thane West (400604) –
                Maharashtra, India.
              </li>
            </ul>
          </section>

          {/* =========================
              2. WHAT PERSONAL DATA WE COLLECT
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              2. What personal data we collect:
            </h2>

            <p className="mb-4">
              We collect only the data we need to respond to you and run our
              business:
            </p>

            <p className="mb-3">
              Information you give us directly
            </p>

            <ul
              className="
                mb-4
                list-disc
                pl-5
                font-['DM_Sans',sans-serif]
                text-[16px]
                font-normal
                leading-[22px]
                text-[#05050B]
              "
            >
              <li>
                Your name, email address, and phone number when you fill in a
                contact or enquiry form, book a consultation, or message us.
              </li>

              <li>
                The contents of your message, project brief, or enquiry.
              </li>

              <li>
                Any information you provide during a consultation or while
                engaging our services.
              </li>
            </ul>

            <p className="mb-3">
              Information collected automatically
            </p>

            <ul
              className="
                mb-4
                list-disc
                pl-5
                font-['DM_Sans',sans-serif]
                text-[16px]
                font-normal
                leading-[22px]
                text-[#05050B]
              "
            >
              <li>
                Usage and device data such as your IP address, browser type,
                device type, pages visited, and time spent on the Website.
              </li>

              <li>
                This is collected through cookies and similar technologies,
                including Google Tag Manager, Google Analytics, and Google Ads
                tracking (see Section 6).
              </li>
            </ul>

            <p className="mb-4">
              We do not intentionally collect sensitive personal data through
              the Website, and we ask that you do not send us such information
              through our forms.
            </p>
          </section>

          {/* =========================
              3. HOW WE USE YOUR DATA
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              3. How we use your personal data:
            </h2>

            <p className="mb-4">
              We use personal data only for legitimate business and service
              purposes, including to:
            </p>

            <ul
              className="
                mb-4
                list-disc
                pl-5
                font-['DM_Sans',sans-serif]
                text-[16px]
                font-normal
                leading-[22px]
                text-[#05050B]
              "
            >
              <li>
                Respond to enquiries, messages, and consultation requests.
              </li>

              <li>
                Understand your requirements and provide our services.
              </li>

              <li>
                Communicate with you about projects, services, and updates.
              </li>

              <li>
                Improve our Website, services, and user experience.
              </li>

              <li>
                Analyse Website usage and performance.
              </li>

              <li>
                Maintain the security and integrity of our Website and
                systems.
              </li>

              <li>
                Comply with applicable legal and regulatory requirements.
              </li>
            </ul>
          </section>

          {/* =========================
              4. HOW WE SHARE YOUR DATA
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              4. How we share your personal data:
            </h2>

            <p className="mb-4">
              We do not sell or rent your personal data.
            </p>

            <p className="mb-4">
              We may share information where necessary with trusted service
              providers who help us operate our business and Website, such as
              hosting providers, analytics providers, communication tools, and
              other technology providers.
            </p>

            <p className="mb-4">
              These providers may process information only as necessary to
              provide their services to us and are expected to maintain
              appropriate security and confidentiality.
            </p>

            <p className="mb-4">
              We may also disclose information where required by law,
              regulation, legal process, or to protect our rights, property,
              users, or the security of our services.
            </p>
          </section>

          {/* =========================
              5. DATA RETENTION
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              5. Data retention:
            </h2>

            <p className="mb-4">
              We retain personal data only for as long as reasonably necessary
              to fulfil the purposes for which it was collected, provide our
              services, maintain business records, resolve disputes, enforce
              agreements, and comply with applicable legal requirements.
            </p>
          </section>

          {/* =========================
              6. COOKIES AND TRACKING
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              6. Cookies and tracking technologies:
            </h2>

            <p className="mb-4">
              Our Website may use cookies and similar technologies to improve
              functionality, understand how visitors use the Website, measure
              performance, and support advertising or analytics activities.
            </p>

            <p className="mb-4">
              These technologies may include Google Tag Manager, Google
              Analytics, and Google Ads tracking. These services may collect
              information about your device, browser, interactions with our
              Website, and Website usage.
            </p>

            <p className="mb-4">
              You may control or disable cookies through your browser settings.
              However, disabling certain cookies may affect the functionality
              of parts of the Website.
            </p>
          </section>

          {/* =========================
              7. YOUR RIGHTS
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              7. Your rights:
            </h2>

            <p className="mb-4">
              Subject to applicable law, you may have rights regarding your
              personal data, including the right to request access,
              correction, updating, or deletion of your personal information,
              and to withdraw consent where processing is based on consent.
            </p>

            <p className="mb-4">
              To exercise a privacy-related right or raise a concern, please
              contact us using the details provided above.
            </p>
          </section>

          {/* =========================
              8. DATA SECURITY
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              8. Data security:
            </h2>

            <p className="mb-4">
              We take reasonable technical and organisational measures to
              protect personal data against unauthorised access, misuse,
              alteration, disclosure, or destruction.
            </p>

            <p className="mb-4">
              However, no method of transmission or electronic storage is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* =========================
              9. THIRD-PARTY LINKS
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              9. Third-party links:
            </h2>

            <p className="mb-4">
              Our Website may contain links to third-party websites or
              services. We are not responsible for the privacy practices,
              security, or content of those third-party websites. We recommend
              reviewing their privacy policies before providing them with
              personal information.
            </p>
          </section>

          {/* =========================
              10. CHILDREN'S PRIVACY
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              10. Children's privacy:
            </h2>

            <p className="mb-4">
              Our Website and services are not intended to knowingly collect
              personal information from children. If you believe that a child
              has provided us with personal information, please contact us so
              that we can take appropriate action.
            </p>
          </section>

          {/* =========================
              11. CHANGES TO THIS POLICY
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              11. Changes to this Privacy Policy:
            </h2>

            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, services, legal requirements, or other
              relevant circumstances. The "Last Updated" date at the beginning
              of this policy reflects the current version.
            </p>
          </section>

          {/* =========================
              12. CONTACT US
          ========================= */}
          <section className="mb-8">
            <h2 className="mb-3 font-bold">
              12. Contact us:
            </h2>

            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our handling of personal data:
            </p>

            <ul
              className="
                mb-3
                list-disc
                pl-5
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
                IT Park, Road Number 27, Wagle Estate, Thane West (400604) –
                Maharashtra, India.
              </li>
            </ul>
          </section>
        </article>
      </section>

      {/* =========================
          FOOTER
          SAME AS DISCLOSURES
      ========================= */}
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;