import { useState } from "react";

const brandCards = [
  { name: "Brand Identity", description: "Logo design, brand strategy, visual identity and guidelines that help you stand out.", min: 15000, max: 25000, price: "₹15K to ₹25K" },
  { name: "Corporate Branding & Business Assets", description: "Business cards, letterhead & envelope, digital templates and employee assets.", min: 10000, max: 15000, price: "₹10K to ₹15K" },
  { name: "Marketing Collateral & Social Media", description: "Brochures, digital & promotional assets, marketing templates.", min: 10000, max: 20000, price: "₹10K to ₹20K" },
  { name: "Packaging, Environmental & Merchandise", description: "Packaging & label design, apparel & merchandise, event branding.", min: 35000, max: 60000, price: "₹35K to ₹60K" },
];
const webCards = [
  { name: "Website Design & Development", description: "Professional website design and development tailored to your business needs.", min: 25000, max: 75000, price: "₹25K to ₹75K" },
  { name: "E-commerce Website", description: "Complete online store with product pages, shopping cart and checkout.", min: 50000, max: 120000, price: "₹50K to ₹1.2L" },
  { name: "Web Application", description: "Custom web applications with interactive features and business workflows.", min: 75000, max: 150000, price: "₹75K to ₹1.5L" },
  { name: "Landing Page", description: "High-converting landing pages designed for campaigns, products and services.", min: 10000, max: 25000, price: "₹10K to ₹25K" },
];
const portalCards = [
  { name: "Custom Company Portals", description: "Secure client portal that simplifies communication, file sharing, approvals and tracking.", min: 25000, max: 120000, price: "₹25K to ₹1.2L" },
  { name: "Billing & Invoicing System", description: "Custom invoicing that automates billing, payments and financial workflows.", min: 20000, max: 60000, price: "₹20K to ₹60K" },
  { name: "Custom CRM Solution", description: "Tailored CRM that centralizes customer data, sales and relationship management.", min: 25000, max: 85000, price: "₹25K to ₹85K" },
];
const tabs = ["Brand Identity", "Web Design & Development", "Custom Company Portals"];

function WhatYouNeed({ selected: initialSelected, onBack, onContinue, onClose }) {
  const [activeTab, setActiveTab] = useState("Brand Identity");
  const [selectedItems, setSelectedItems] = useState(Array.isArray(initialSelected) ? initialSelected : []);

  const currentCards = activeTab === "Web Design & Development" ? webCards : activeTab === "Custom Company Portals" ? portalCards : brandCards;

  const toggleItem = (item) => {
    setSelectedItems((prev) => prev.some((s) => s.name === item.name) ? prev.filter((s) => s.name !== item.name) : [...prev, item]);
  };

  const estimatedMin = selectedItems.reduce((t, i) => t + i.min, 0);
  const estimatedMax = selectedItems.reduce((t, i) => t + i.max, 0);
  const fmt = (a) => a === 0 ? "₹0" : a >= 100000 ? `₹${Number.isInteger(a / 100000) ? a / 100000 : (a / 100000).toFixed(1)}L` : `₹${Math.round(a / 1000)}K`;

  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* HEADER */}
      <div className="flex w-full flex-col px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-['DM_Sans'] text-[16px] font-medium tracking-tight text-black sm:text-[20px]">Copper Studio</span>
            <span className="h-[4px] w-[4px] shrink-0 rounded-full bg-black/30" />
            <span className="hidden font-['DM_Sans'] text-[11px] text-black/40 sm:inline">Scope Builder</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="font-['DM_Sans'] text-[11px] font-medium text-black sm:text-[12px]">Step 4 of 5</span>
            <div className="relative h-[3px] w-[60px] overflow-hidden rounded-full bg-black/10 sm:w-[100px]">
              <div className="absolute left-0 top-0 h-full w-4/5 rounded-full bg-orange-500" />
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
      <div className="px-4 text-center sm:px-6">
        <h1 className="font-['DM_Sans'] text-[22px] font-semibold leading-tight tracking-tight text-black sm:text-[28px]">What do you need done?</h1>
        <p className="mt-1 font-['DM_Sans'] text-xs text-black/45 sm:text-sm">Pick as many as fit. You can always adjust later.</p>
      </div>

      {/* TABS */}
      <div className="mt-3 flex border-b border-black/10 px-4 sm:px-6">
        {tabs.map((tab) => (
          <button key={tab} type="button" onClick={() => setActiveTab(tab)}
            className={`relative flex flex-1 items-center justify-center pb-2 pt-1 font-['DM_Sans'] text-[11px] leading-tight transition-all duration-300 sm:text-[13px] ${activeTab === tab ? "font-medium text-black" : "font-normal text-black/40 hover:text-black"}`}
          >
            {tab}
            {activeTab === tab && <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-orange-500" />}
          </button>
        ))}
      </div>

      {/* CARDS — scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pb-[68px] pt-3 sm:px-6" style={{ scrollbarWidth: "none" }}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {currentCards.map((item) => {
            const selected = selectedItems.some((s) => s.name === item.name);
            return (
              <button key={item.name} type="button" onClick={() => toggleItem(item)}
                className={`relative flex w-full flex-col items-center justify-center rounded-2xl border px-4 py-4 text-center transition-all duration-300 ${selected ? "border-orange-500 bg-orange-50/30" : "border-black/10 bg-white hover:border-orange-500"}`}
              >
                <span className={`absolute right-[7px] top-[7px] flex h-[18px] w-[18px] items-center justify-center rounded-full border text-[10px] font-['DM_Sans'] ${selected ? "border-orange-500 bg-orange-500 text-white" : "border-black/10 bg-white text-transparent"}`}>✓</span>
                <h3 className="font-['DM_Sans'] text-[13px] font-medium leading-[18px] tracking-tight text-black sm:text-[14px]">{item.name}</h3>
                <p className="mt-1 font-['DM_Sans'] text-[10px] leading-[14px] text-black/45 sm:text-[11px]">{item.description}</p>
                <p className="mt-1 font-['DM_Sans'] text-[11px] font-medium text-black sm:text-[12px]">{item.price}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full border-t border-black/10 bg-white">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <button type="button" onClick={onBack}
            className="flex items-center gap-2 font-['DM_Sans'] text-sm font-medium text-black/70 hover:text-black">
            <span className="text-lg leading-none">←</span><span>Back</span>
          </button>
          {/* Estimate — hidden on very small screens */}
          <div className="hidden items-center gap-1 font-['DM_Sans'] text-[12px] sm:flex">
            <span className="text-[#8B9BB0]">{selectedItems.length} items</span>
            <span className="mx-1 text-[#C7CDD5]">•</span>
            <span className="font-medium text-black">Est. {fmt(estimatedMin)} – {fmt(estimatedMax)}</span>
          </div>
          <button type="button" onClick={() => onContinue(selectedItems)}
            className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 font-['DM_Sans'] text-sm font-medium text-white transition-all duration-300 hover:bg-orange-500">
            <span>Continue</span><span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatYouNeed;
