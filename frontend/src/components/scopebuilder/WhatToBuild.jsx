import { useState } from "react";

const WhatToBuild = ({ selected: initialSelected, onBack, onContinue, onClose }) => {
  const [selectedBuilds, setSelectedBuilds] = useState(Array.isArray(initialSelected) ? initialSelected : []);

  const toggleBuild = (title) => {
    setSelectedBuilds((prev) => prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]);
  };

  const buildOptions = [
    { title: "Brand Identity", description: "Logo, visual identity, brand guidelines & core assets." },
    { title: "Website/Landing Page/CMS", description: "Marketing websites, landing pages & content-managed sites." },
    { title: "E-Commerce Store", description: "Online storefronts designed to attract, engage & convert." },
    { title: "Company Portal", description: "Client portals, internal systems, CRMs & business tools." },
    { title: "Full Rebrand + rebuild", description: "A complete brand and website transformation, built together." },
    { title: "Not sure yet?", description: "Tell us what you're working on and we'll help shape the right direction." },
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
            <span className="font-['DM_Sans'] text-[11px] font-medium text-black sm:text-[12px]">Step 2 of 5</span>
            <div className="relative h-[3px] w-[60px] overflow-hidden rounded-full bg-black/10 sm:w-[100px]">
              <div className="absolute left-0 top-0 h-full w-2/5 rounded-full bg-orange-500" />
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
        <h1 className="font-['DM_Sans'] text-[22px] font-semibold leading-tight tracking-tight text-black sm:text-3xl">What are you building?</h1>
        <p className="mt-1 font-['DM_Sans'] text-xs text-black/45 sm:text-sm">Tell us what you have in mind. Select all that apply.</p>
      </div>

      {/* CARDS */}
      <div className="flex-1 overflow-y-auto px-4 pb-[70px] sm:px-6" style={{ scrollbarWidth: "none" }}>
        <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {buildOptions.map((option) => {
            const isSelected = selectedBuilds.includes(option.title);
            return (
              <button key={option.title} type="button" onClick={() => toggleBuild(option.title)}
                className={`flex w-full flex-col items-center justify-center rounded-2xl border px-4 py-4 text-center transition-all duration-300 ${isSelected ? "border-2 border-orange-500 bg-white" : "border border-black/10 bg-white hover:border-orange-500"}`}
              >
                <h3 className="text-sm font-medium leading-5 tracking-tight text-black">{option.title}</h3>
                <p className="mt-1 text-[10px] leading-4 text-black/45">{option.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full border-t border-black/10 bg-white">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <button type="button" onClick={onBack}
            className="flex items-center gap-2 font-['DM_Sans'] text-sm font-medium text-black/60 hover:text-black">
            <span className="text-lg leading-none">←</span><span>Back</span>
          </button>
          <button type="button" disabled={selectedBuilds.length === 0}
            onClick={() => { if (selectedBuilds.length === 0) return; onContinue(selectedBuilds); }}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-['DM_Sans'] text-sm font-medium transition-all duration-300 ${selectedBuilds.length > 0 ? "bg-black text-white hover:bg-orange-500" : "cursor-not-allowed bg-black/10 text-black/30"}`}
          >
            <span>Continue</span><span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatToBuild;
