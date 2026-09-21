import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";
import LetsTalk from "../components/contact/LetsTalk";
import Conversation from "../components/contact/Conversation";
import Enquiery from "../components/contact/Enquiery";
import CTA from "../components/contact/CTA";
import CallPoints from "../components/contact/CallPoints";
import FAQ2 from "../components/contact/FAQ2";
import Footer2 from "../components/contact/Footer2";

const ContactUs = () => {
  return (
    <main className="min-h-screen w-full bg-white">
      <Helmet>
  <title>Contact | Copper Studio</title>
  <meta
    name="description"
    content="Get in touch with Copper Studio to discuss your next brand, website, or digital project."
  />
  <meta
  property="og:image"
  content="https://res.cloudinary.com/tpxo8m6a/image/upload/v1789970465/ChatGPT_Image_Sep_21_2026_11_29_49_AM.png"
/>
<meta property="og:site_name" content="Copper Studio" />
</Helmet>

      <Navbar />

      <LetsTalk />

      {/* =====================================
          CONVERSATION + ENQUIeRY
      ====================================== */}

      <section className="bg-white px-4 pb-20 sm:px-6 md:px-10 lg:px-16">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1200px]
            flex-col
            items-start
            gap-12
            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-0
          "
        >

          {/* LEFT — CONVERSATION */}

          <div className="w-[495px] max-w-full">
            <Conversation />
          </div>

          {/* RIGHT — ENQUIeRY */}

          <div className="w-[630px] max-w-full">
            <Enquiery />
          </div>

         

        </div>

         <CTA/>

         <CallPoints/>

         <FAQ2/>

        

      </section>
      <Footer2/>
    </main>
  );
};

export default ContactUs;