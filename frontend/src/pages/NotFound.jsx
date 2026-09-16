import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Helmet>
        <title>Page Not Found — Copper Studio</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Return to the Copper Studio homepage."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navbar />

      {/* 404 Section */}
      <section className="relative flex min-h-[calc(100vh-120px)] items-center justify-center overflow-hidden px-5 py-20 sm:py-24 md:py-28">
        {/* Background 404 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
        >
          <span
            className="
              block
              translate-y-1
              -translate-x-4
              whitespace-nowrap
              font-dm-sans
              text-[190px]
              font-semibold
              leading-none
              tracking-[-14px]
              text-black/[0.035]
              sm:text-[280px]
              sm:tracking-[-18px]
              md:text-[390px]
              md:tracking-[-25px]
              lg:text-[500px]
              lg:tracking-[-32px]
            "
          >
            404
          </span>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center justify-center text-center">
          {/* Orange Line */}
          <span className="mb-5 h-px w-12 bg-orange-500" />

          {/* Error Label */}
          <p className="font-Inter text-[13px] font-medium uppercase tracking-[3px] text-orange-500 sm:text-[14px]">
            Error 404
          </p>

          {/* Heading */}
          <h1
            className="
              mt-4
              font-dm-sans
              text-[40px]
              font-semibold
              leading-[1.05]
              tracking-[-1.5px]
              text-black
              sm:text-[52px]
              md:text-[64px]
              lg:text-[68px]
            "
          >
            Page not found
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[500px]
              font-dm-sans
              text-[15px]
              leading-[24px]
              text-black/55
              sm:text-[16px]
              sm:leading-[25px]
            "
          >
            The page you are looking for doesn&apos;t exist or may have been
            moved.
          </p>

          {/* Button */}
          <button
            type="button"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
            className="
              mt-8
              rounded-full
              bg-black
              px-8
              py-3.5
              font-dm-sans
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:bg-orange-500
              hover:shadow-lg
            "
          >
            Back to Home
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;