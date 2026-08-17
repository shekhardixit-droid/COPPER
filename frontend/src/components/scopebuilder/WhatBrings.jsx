import { useState } from "react";

const WhatBrings = ({ selected: initialSelected, onBack, onContinue, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(initialSelected || null);

  const options = [
    { title: "Launching Something New" },
    { title: "Rebrand/Refresh" },
    { title: "Scaling what works" },
    { title: "Fixing something broken" },
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
            <span className="font-['DM_Sans'] text-[11px] font-medium text-black sm:text-[12px]">Step 3 of 5</span>
            <div className="relative h-[3px] w-[60px] overflow-hidden rounded-full bg-black/10 sm:w-[100px]">
              <div className="absolute left-0 top-0 h-full w-3/5 rounded-full bg-orange-500" />
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
        <h1 className="font-['DM_Sans'] text-[22px] font-semibold leading-tight tracking-tight text-black sm:text-3xl">What brings you to us?</h1>
        <p className="mt-1 font-['DM_Sans'] text-xs text-black/45 sm:text-sm">One line, then we'll move on.</p>
      </div>

      {/* OPTIONS */}
      <div className="flex-1 overflow-y-auto px-4 pb-[70px] sm:px-6" style={{ scrollbarWidth: "none" }}>
        <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">
          {options.map((option) => {
            const isSelected = selectedOption === option.title;
            return (
              <button key={option.title} type="button" onClick={() => setSelectedOption(option.title)}
                className={`flex w-full items-center justify-center rounded-2xl border px-6 py-5 text-center transition-all duration-300 ${isSelected ? "border-2 border-orange-500 bg-white" : "border border-black/10 bg-white hover:border-orange-500"}`}
              >
                <h3 className="font-['DM_Sans'] text-sm font-medium leading-5 tracking-tight text-black sm:text-base">{option.title}</h3>
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
          <button type="button" disabled={!selectedOption}
            onClick={() => { if (!selectedOption) return; onContinue(selectedOption); }}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-['DM_Sans'] text-sm font-medium transition-all duration-300 ${selectedOption ? "bg-black text-white hover:bg-orange-500" : "cursor-not-allowed bg-black/10 text-black/30"}`}
          >
            <span>Continue</span><span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatBrings;
