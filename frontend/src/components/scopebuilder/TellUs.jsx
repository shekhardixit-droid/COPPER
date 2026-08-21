import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SuccessPopup = ({ show, onClose }) => (
  <AnimatePresence>
    {show && (
      <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <motion.div key="card"
          initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }} transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()} className="relative mx-4 w-full max-w-[420px] rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-center text-xl font-semibold text-black font-['DM_Sans'] sm:text-2xl">Scope Submitted!</h3>
          <p className="mt-3 text-center text-sm leading-6 text-black/50 font-['DM_Sans']">
            Your project details have been saved. We'll review your scope and get back to you shortly.
          </p>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={onClose}
            className="mt-6 w-full rounded-full bg-black py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-500 font-['DM_Sans']"
          >Done</motion.button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Field = ({ id, label, type = "text", placeholder, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="font-['DM_Sans'] text-[12px] font-semibold text-black sm:text-[13px]">{label}</label>
    <input id={id} name={id} type={type} placeholder={placeholder} value={value} onChange={onChange}
      className="mt-[5px] h-[22px] w-full border-0 border-b border-[#d0d0d0] bg-transparent px-0 pb-[4px] font-['DM_Sans'] text-[12px] text-black outline-none placeholder:text-[#c0c0c0] focus:border-black/50 sm:text-[13px]"
    />
  </div>
);

export default function TellUs({ onBack, onContinue, onClose, scopeData = {} }) {
  const { industry = null, whatToBuild = null, whatBrings = null, selectedServices = [] } = scopeData;

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup,    setShowPopup]    = useState(false);
  const [errorMsg,     setErrorMsg]     = useState("");

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setErrorMsg("");
    setIsSubmitting(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL || "https://thecopperstudio.com";
      const res = await fetch(`${apiBase}/api/tell-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          industry,
          whatToBuild: Array.isArray(whatToBuild) ? whatToBuild.join(", ") : whatToBuild,
          whatBrings,
          selectedServices: Array.isArray(selectedServices) ? selectedServices : [],
        }),
      });
      let result = {};
      try { result = await res.json(); } catch (_) {}
      if (!res.ok) throw new Error(result.message || "Failed to save");
      setShowPopup(true);
    } catch (err) {
      setErrorMsg(err.message || "Unable to save. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scopePills = [
    industry,
    ...(Array.isArray(whatToBuild) ? whatToBuild : whatToBuild ? [whatToBuild] : []),
    whatBrings,
    ...selectedServices.map((s) => s.name),
  ].filter(Boolean);

  return (
    <>
      <SuccessPopup show={showPopup} onClose={() => { setShowPopup(false); onContinue(); }} />

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
              <span className="font-['DM_Sans'] text-[11px] font-medium text-black sm:text-[12px]">Step 5 of 5</span>
              <div className="relative h-[3px] w-[60px] overflow-hidden rounded-full bg-black/10 sm:w-[100px]">
                <div className="absolute left-0 top-0 h-full w-full rounded-full bg-orange-500" />
              </div>
              <button type="button" aria-label="Close" onClick={onClose}
                className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-black/5 text-black/60 hover:bg-black/10 hover:text-black">
                <span className="text-[16px] font-light leading-none">×</span>
              </button>
            </div>
          </div>
          <div className="mt-3 h-px w-full bg-black/10" />
        </div>

        {/* SCROLLABLE MIDDLE */}
        <div className="flex-1 overflow-y-auto px-4 pb-[70px] pt-2 sm:px-6 sm:pt-4" style={{ scrollbarWidth: "none" }}>
          <h1 className="text-center font-['DM_Sans'] text-[20px] font-semibold leading-tight tracking-tight text-black sm:text-[26px]">
            Tell us about your project &amp; we'll send you an estimate.
          </h1>
          <p className="mt-1 text-center font-['DM_Sans'] text-xs text-black/45 sm:text-sm">
            Share a few details. You can always update them later.
          </p>

          {/* YOUR SCOPE */}
          {scopePills.length > 0 && (
            <div className="mt-3 flex flex-wrap items-baseline gap-x-[5px] gap-y-[3px] font-['DM_Sans'] text-[12px]">
              <span className="font-semibold text-black">Your Scope:</span>
              {scopePills.map((pill, i) => (
                <span key={i} className="flex items-center gap-x-[5px]">
                  <span className="text-black/60">{pill}</span>
                  {i < scopePills.length - 1 && <span className="text-black/25">•</span>}
                </span>
              ))}
            </div>
          )}

          {/* FORM — stacks on mobile, 2-col on sm+ */}
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 sm:items-start">

            {/* LEFT — 4 fields */}
            <div className="flex flex-col gap-[14px]">
              <Field id="name"    label="Full Name"          placeholder="Enter Your Name"          value={formData.name}    onChange={handleChange} />
              <Field id="email"   label="Work Email"         type="email" placeholder="Enter Your Email"         value={formData.email}   onChange={handleChange} />
              <Field id="phone"   label="Phone Number"       type="tel"   placeholder="Enter Your Phone Number"  value={formData.phone}   onChange={handleChange} />
              <Field id="company" label="Company/Brand Name" placeholder="Enter Your Company Name"   value={formData.company} onChange={handleChange} />
            </div>

            {/* RIGHT — textarea */}
            <div className="mt-4 flex flex-col sm:mt-0">
              <label htmlFor="message" className="font-['DM_Sans'] text-[12px] font-semibold text-black sm:text-[13px]">
                Something about the project
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                placeholder={"eg. Launching a new specialty coffee brand in Bangalore. Already have a name.\nNeed everything else."}
                className="mt-[5px] h-[120px] w-full resize-none rounded-xl border border-[#d8d8d8] bg-white px-3 py-3 font-['DM_Sans'] text-[12px] leading-[1.5] text-black outline-none placeholder:text-[#c0c0c0] focus:border-black/40 sm:h-[150px] sm:rounded-[12px] sm:px-[14px] sm:py-[12px]"
              />
            </div>

          </div>

          {errorMsg && <p className="mt-3 text-xs text-red-500 font-['DM_Sans']">{errorMsg}</p>}
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 left-0 w-full border-t border-black/10 bg-white">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <button type="button" onClick={onBack}
              className="flex items-center gap-2 font-['DM_Sans'] text-sm font-medium text-black/70 hover:text-black">
              <span className="text-lg leading-none">←</span><span>Back</span>
            </button>
            <button type="button" onClick={handleSubmit} disabled={isSubmitting}
              className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 font-['DM_Sans'] text-sm font-medium text-white transition-all duration-300 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60">
              <span>{isSubmitting ? "Saving..." : "Submit"}</span>
              <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
