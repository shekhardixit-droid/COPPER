import { useState } from "react";

const Industry = ({ selected: initialSelected, onContinue, onClose }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(initialSelected || null);

  const industries = [
    { title: "F&B/Hospitality", description: "Restaurants, cafés, cloud kitchens, hotels & hospitality brands.", icon: "/scope_builder/F&B.png" },
    { title: "Real Estate", description: "Property developers, real estate firms, brokers & sales teams.", icon: "/scope_builder/RealEstate.png" },
    { title: "Fitness & Wellness", description: "Gyms, fitness studios, coaches, wellness & lifestyle brands.", icon: "/scope_builder/Fitness.png" },
    { title: "SaaS/Tech", description: "Software products, platforms, tech startups & AI solutions.", icon: "/scope_builder/SaaS.png" },
    { title: "D2C/E-Commerce", description: "Consumer brands, online stores, marketplaces & retail businesses.", icon: "/scope_builder/D2C.png" },
    { title: "Fashion & Lifestyle", description: "Apparel, accessories, beauty, footwear & lifestyle brands.", icon: "/scope_builder/Fashion.png" },
    { title: "Healthcare", description: "Clinics, hospitals, healthcare providers & dental practices.", icon: "/scope_builder/Healthcare.png" },
    { title: "Finance & Professional Services", description: "Fintech, consultancies, agencies, legal, accounting & advisory firms.", icon: "/scope_builder/Finance.png" },
    { title: "Something Else", description: "Don't see your industry? Tell us what you do and we'll find the right fit.", icon: "/scope_builder/Else.png" },
  ];

  return (
    <section className="flex h-full w-full flex-col bg-white">
      {/* HEADER */}
      <div className="flex w-full flex-col px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-['DM_Sans'] text-[16px] font-medium tracking-tight text-black sm:text-[20px]">Copper Studio</span>
            <span className="h-[4px] w-[4px] shrink-0 rounded-full bg-black/30" />
            <span className="hidden font-['DM_Sans'] text-[11px] text-black/40 sm:inline">Scope Builder</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="font-['DM_Sans'] text-[11px] font-medium text-black sm:text-[12px]">Step 1 of 5</span>
            <div className="relative h-[3px] w-[60px] overflow-hidden rounded-full bg-black/10 sm:w-[100px]">
              <div className="absolute left-0 top-0 h-full w-1/5 rounded-full bg-orange-500" />
            </div>
            <button type="button" aria-label="Close" onClick={onClose}
              className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-black/5 text-black/60 hover:bg-black/10 hover:text-black">
              <span className="text-[16px] font-light leading-none">×</span>
            </button>
          </div>
        </div>
        <div className="mt-3 h-px w-full bg-black/10" />
      </div>

      {/* TITLE */}
      <div className="px-4 pb-2 text-center sm:px-6">
        <h1 className="font-['DM_Sans'] text-[22px] font-semibold leading-tight tracking-tight text-black sm:text-3xl">What industry are you in?</h1>
        <p className="mt-1 font-['DM_Sans'] text-xs text-black/45 sm:text-sm">Choose your industry and we'll tailor the experience around your business.</p>
      </div>

      {/* CARDS — scrollable on mobile */}
      <div className="flex-1 overflow-y-auto px-4 pb-[70px] sm:px-6" style={{ scrollbarWidth: "none" }}>
        <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {industries.map((industry) => {
            const isSelected = selectedIndustry === industry.title;
            return (
              <button key={industry.title} type="button" onClick={() => setSelectedIndustry(industry.title)}
                className={`flex w-full items-center rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${isSelected ? "border-2 border-orange-500 bg-white" : "border border-black/10 bg-white hover:border-orange-500"}`}
              >
                <div className="flex h-[36px] w-[30px] shrink-0 items-center justify-center">
                  <img src={industry.icon} alt={industry.title} className="h-full w-full object-contain" />
                </div>
                <div className="ml-3 flex flex-col justify-center">
                  <h3 className="text-sm font-medium leading-5 tracking-tight text-black">{industry.title}</h3>
                  <p className="mt-0.5 text-[10px] leading-4 text-black/45">{industry.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full border-t border-black/10 bg-white">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <button type="button" className="flex items-center gap-2 font-['DM_Sans'] text-sm font-medium text-black/50">
            <span className="text-lg leading-none">←</span><span>Back</span>
          </button>
          <button type="button" disabled={!selectedIndustry}
            onClick={() => { if (!selectedIndustry) return; onContinue(selectedIndustry); }}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-['DM_Sans'] text-sm font-medium transition-all duration-300 ${selectedIndustry ? "bg-black text-white hover:bg-orange-500" : "cursor-not-allowed bg-black/10 text-black/30"}`}
          >
            <span>Continue</span><span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industry;
