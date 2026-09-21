import Navbar from "../components/home/Navbar";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import CompanyMarquee from "../components/home/CompanyMarquee";
import FloatingActions from "../components/home/FloatingActions";
import SelectedProjects from "../components/home/SelectedProjects";
import Services from "../components/home/Services";
import ClientPortal from "../components/home/ClientPortal";
import Process from "../components/home/Process";
import Techstack from "../components/home/Techstack";
import FAQ from "../components/home/FAQ";
import SelectedProjects2 from "../components/home/SelectedProjects2";
import Footer from "../components/home/Footer";
import FinalCTA from "../components/home/FinalCTA";
import WhyCopperStudio from "../components/home/WhyCopperStudio";
import CustomerReviews from "../components/home/CustomerReviews";
import LongPage from "../components/home/LongPage";


function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Helmet>
  <title>Copper Studio | Digital Design & Development Studio</title>
  <meta
    name="description"
    content="Copper Studio creates thoughtful brands, websites, and digital experiences for ambitious businesses."
  />
  <meta
  property="og:image"
  content="https://res.cloudinary.com/tpxo8m6a/image/upload/v1789970465/ChatGPT_Image_Sep_21_2026_11_29_49_AM.png"
/>
<meta property="og:site_name" content="Copper Studio" />
</Helmet>

      {/* Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/10" />

      <Navbar />

     <Hero />

<CompanyMarquee />

<SelectedProjects />

<Services />

<CustomerReviews/>

<ClientPortal />

<LongPage/>


<FAQ/>

<SelectedProjects2 />

<FinalCTA/>

<Footer/>




    </div>
  );
}

export default Home;