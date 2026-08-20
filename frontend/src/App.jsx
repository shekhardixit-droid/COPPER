import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ScopeBuilder from "./pages/ScopeBuilder";
import BrandIdentity from "./pages/BrandIdentity";
import WebDev from "./pages/WebDev";
import CustomPortal from "./pages/CustomPortal";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclosures from "./pages/Disclosures";

import Projects from "./pages/Projects";
import VisionPage from "./pages/VisionPage";

import BI from "./components/project/BrandIdentity";
import Webdesign from "./components/project/Webdesign";
import Designsystem from "./components/project/Designsystem";
import Casesstudy from "./components/project/Casestudy";
import Manifesto from "./components/project/Manifesto";
import Webdesign2 from "./components/project/Webdesign2";
import ThreeServices from "./pages/ThreeServices";
import MeetCopper from "./pages/MeetCopper";
import MainProjects from "./pages/MainProjects";
<<<<<<< Updated upstream
import JoinCopper from "./pages/JoinCopper";
=======
import DataCircles from "./pages/DataCircles";
import NittyGritty from "./pages/NittyGritty";
import Cottson from "./pages/Cottson";
import Nora from "./pages/Nora";
import CoffeeTheory from "./pages/CoffeeTheory";
>>>>>>> Stashed changes


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/scope-builder" element={<ScopeBuilder />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
          path="/disclosures"
          element={<Disclosures />}
         
        />
        {/* Service Pages */}
        <Route path="/brand-identity" element={<BrandIdentity />} />
        <Route path="/web-design" element={<WebDev />} />
        <Route path="/custom-portal" element={<CustomPortal />} />

        {/* Projects */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/vision" element={<VisionPage />} />
        <Route path="/projects/brand-identity" element={<BI />} />
        <Route path="/projects/web-design" element={<Webdesign />} />
        <Route path="/projects/design-system" element={<Designsystem />} />
        <Route path="/projects/case-study" element={<Casesstudy />} />
        <Route path="/projects/manifesto" element={<Manifesto />} />
        <Route path="/projects/web-design-2" element={<Webdesign2 />} />
                <Route path="/services" element={<ThreeServices />} />
                <Route path="/meet-copper" element={<MeetCopper />} />
                <Route path="/main-projects" element={<MainProjects />} />
<<<<<<< Updated upstream
                <Route path="/join-copper" element={<JoinCopper />} />
=======
                <Route path="/datacircles" element={<DataCircles />} />
                 <Route path="/nittygritty" element={<NittyGritty/>} />
                 <Route path="/cottson" element={<Cottson/>} />
                 <Route path="/nora" element={<Nora/>} />
                   <Route path="/coffeetheory" element={<CoffeeTheory/>} />



>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default App;
