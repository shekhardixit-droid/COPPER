import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showRejectMessage, setShowRejectMessage] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (consent !== "accepted") {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");

    setShowRejectMessage(false);
    setShowBanner(false);

    window.dispatchEvent(new Event("cookie-consent-accepted"));
  };

  const handleReject = () => {
    setShowRejectMessage(true);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl sm:p-9">
        <h2 className="font-dm-sans text-2xl font-semibold text-black">
          We use cookies
        </h2>

        <p className="mt-4 text-sm leading-6 text-black/60">
          We use cookies and similar technologies to improve your experience
          and understand how visitors use our website. Please accept cookies
          to continue to the website.
        </p>

        {showRejectMessage && (
          <p className="mt-4 text-sm font-medium text-[#C87533]">
            Please accept cookies to proceed to the website.
          </p>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleReject}
            className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium text-black transition hover:border-[#C87533] hover:bg-[#C87533] hover:text-white"
          >
            Reject
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#C87533]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;