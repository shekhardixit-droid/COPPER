import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Industry from "../components/scopebuilder/Industry";
import WhatToBuild from "../components/scopebuilder/WhatToBuild";
import WhatBrings from "../components/scopebuilder/WhatBrings";
import WhatYouNeed from "../components/scopebuilder/WhatYouNeed";
import TellUs from "../components/scopebuilder/TellUs";

const ScopeBuilder = () => {
  const navigate = useNavigate();
  const handleClose = () => navigate("/");

  const [currentStep, setCurrentStep] = useState(1);
  const [industry,         setIndustry]         = useState(null);
  const [whatToBuild,      setWhatToBuild]      = useState([]);
  const [whatBrings,       setWhatBrings]       = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  return (
    /* Backdrop */
    <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/40 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-4 sm:py-6">
      {/* Card — full-screen on mobile, fixed size on desktop */}
      <div className="
        relative w-full max-w-[1000px] overflow-hidden rounded-2xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]
        min-h-[calc(100vh-2rem)]
        sm:min-h-0 sm:h-[500px]
      ">
        {currentStep === 1 && (
          <Industry selected={industry} onClose={handleClose}
            onContinue={(v) => { setIndustry(v); setCurrentStep(2); }} />
        )}
        {currentStep === 2 && (
          <WhatToBuild selected={whatToBuild} onClose={handleClose} onBack={() => setCurrentStep(1)}
            onContinue={(v) => { setWhatToBuild(v); setCurrentStep(3); }} />
        )}
        {currentStep === 3 && (
          <WhatBrings selected={whatBrings} onClose={handleClose} onBack={() => setCurrentStep(2)}
            onContinue={(v) => { setWhatBrings(v); setCurrentStep(4); }} />
        )}
        {currentStep === 4 && (
          <WhatYouNeed selected={selectedServices} onClose={handleClose} onBack={() => setCurrentStep(3)}
            onContinue={(v) => { setSelectedServices(v); setCurrentStep(5); }} />
        )}
        {currentStep === 5 && (
          <TellUs scopeData={{ industry, whatToBuild, whatBrings, selectedServices }}
            onClose={handleClose} onBack={() => setCurrentStep(4)} onContinue={handleClose} />
        )}
      </div>
    </div>
  );
};

export default ScopeBuilder;
