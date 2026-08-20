import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Marquee from "../components/datacircles/Marquee";
 
const Cottson = () => {
  return (
    <div className="w-full bg-white">
      {/* NAVBAR */}
      <Navbar />
 
      <main>
        {/* TITLE */}
        <div className="mt-20 sm:mt-24 md:mt-32 lg:mt-40 flex w-full items-center justify-start px-5 sm:px-8 md:px-12 lg:px-20 xl:pl-35">
          <h1
            className="
              font-dm-sans
              text-[34px]
              leading-[40px]
              tracking-[-0.75px]
              font-semibold
              text-black
 
              sm:text-[42px]
              sm:leading-[48px]
 
              md:text-[52px]
              md:leading-[60px]
 
              lg:text-[64px]
              lg:leading-[72px]
              lg:tracking-[-1px]
            "
          >
            Cottson Clothing
          </h1>
        </div>
 
        {/* SCOPE + DESCRIPTION */}
        <div
          className="
            mx-auto
            mt-5
            flex
            w-full
            max-w-[1231px]
            flex-col
            gap-8
            items-start
            justify-between
            px-5 sm:px-8 md:px-12 lg:px-20 xl:px-0
 
            lg:h-[91px]
            lg:flex-row
          "
        >
          {/* LEFT */}
          <div className="flex w-full lg:w-fit flex-col items-start shrink-0">
            <p className="font-dm-sans text-[18px] font-semibold leading-[22px] tracking-[-0.75px] text-black">
              Scope
            </p>
 
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
              {[
                "Brand Identity",
                "Print Collateral",
                "Product Assets",
                "Website Design",
                "Company Portal",
              ].map((tag) => (
                <span
                  key={tag}
                  className="
                    flex
                    h-[30px]
                    w-fit
                    items-center
                    rounded-full
                    bg-[#f5f5f2]
                    px-3
                    font-dm-sans
                    text-[12px]
                    font-normal
                    leading-[19.5px]
                    text-black/80
                    whitespace-nowrap
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
 
          {/* RIGHT */}
          <div className="flex w-full lg:w-[876px] max-w-full flex-col items-start">
            <div className="w-full sm:w-[484px] max-w-full">
              <p className="font-dm-sans text-[18px] font-semibold leading-[22px] tracking-[-0.75px] text-black">
                Project Description
              </p>
            </div>
 
            <div className="mt-2 w-full max-w-full">
              <p className="font-dm-sans text-[15px] sm:text-[16px] font-normal leading-[20px] sm:leading-[22px] text-black/80">
                Corporate apparel is more than fabric and stitching. It
                brings teams together, represents businesses, and becomes
                part of how people experience a brand. For Cottson, we
                wanted that idea of connection to sit at the heart of the
                identity. The result is a visual system inspired by
                interwoven threads, representing fabric, people,
                partnerships, and the relationships that make the business
                work.
              </p>
            </div>
          </div>
        </div>
 
        {/* HERO IMAGE */}
        <div
          className="
            mx-auto
            mt-10
            sm:mt-12
            lg:mt-16
            w-full
            max-w-[1280px]
            aspect-[3/1]
            overflow-hidden
            rounded-[12px]
            sm:rounded-[16px]
            px-5 sm:px-8 md:px-12 lg:px-0
          "
        >
          <img
            src="https://ik.imagekit.io/qiap0iq38/cottson/Frame%20154.png"
            alt=""
            className="h-full w-full object-cover rounded-[12px] sm:rounded-[16px]"
          />
        </div>
 
        {/* THE CHALLENGE */}
        <div
          className="
            mx-auto
            mt-12
            sm:mt-14
            lg:mt-16
            flex
            w-full
            max-w-[1280px]
            flex-col
            gap-6
            sm:gap-8
            items-start
            justify-between
            px-5 sm:px-8 md:px-12 lg:px-20 xl:px-0
 
            lg:flex-row
          "
        >
          {/* LEFT HEADING */}
          <div className="w-full lg:w-[244px] shrink-0">
            <h2
              className="
                font-dm-sans
                text-[28px]
                leading-[34px]
                font-semibold
                tracking-[-0.5px]
                text-black
 
                sm:text-[32px]
                sm:leading-[38px]
 
                lg:text-[36px]
                lg:leading-[42px]
                lg:tracking-[-0.75px]
              "
            >
              The Challenge
            </h2>
          </div>
 
          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[940px] max-w-full flex flex-col gap-4">
            <p className="font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-black/65">
              Cottson had the expertise and manufacturing capabilities to
              deliver at scale, but its existing visual presence didn't
              communicate the quality or professionalism of the business.
              The goal wasn't simply to create a new logo.
            </p>
 
            <p className="font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-black/65">
              We needed to build a complete brand system that could work
              across everything from a business card and clothing tag to a
              product catalogue, website, and digital client experience.
            </p>
          </div>
        </div>
 
        {/* CHALLENGE IMAGES */}
        <div
          className="
            mx-auto
            mt-8
            sm:mt-10
            lg:mt-12
            flex
            w-full
            max-w-[1280px]
            flex-col
            lg:flex-row
            items-start
            justify-between
            gap-5
            px-5 sm:px-8 md:px-12 lg:px-20 xl:px-0
          "
        >
          <div className="w-full lg:w-[750px] max-w-full aspect-[3/2] lg:h-[500px] lg:aspect-auto overflow-hidden rounded-[12px] sm:rounded-[16px]">
            <img
              src="https://ik.imagekit.io/qiap0iq38/cottson/Frame%202147227995.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
 
          <div className="w-full lg:w-[510px] max-w-full aspect-[510/500] lg:h-[500px] lg:aspect-auto overflow-hidden rounded-[12px] sm:rounded-[16px]">
            <img
              src="https://ik.imagekit.io/qiap0iq38/cottson/Frame%202147227996.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
 
        {/* THE IDEA */}
        <div
          className="
            mx-auto
            mt-12
            sm:mt-14
            lg:mt-16
            flex
            w-full
            max-w-[1280px]
            flex-col
            gap-6
            sm:gap-8
            items-start
            justify-between
            px-5 sm:px-8 md:px-12 lg:px-20 xl:px-0
 
            lg:flex-row
          "
        >
          <div className="w-full lg:w-[244px] shrink-0">
            <h2
              className="
                font-dm-sans
                text-[28px]
                leading-[34px]
                font-semibold
                tracking-[-0.5px]
                text-black
 
                sm:text-[32px]
                sm:leading-[38px]
 
                lg:text-[36px]
                lg:leading-[42px]
                lg:tracking-[-0.75px]
              "
            >
              The Idea
            </h2>
          </div>
 
          <div className="w-full lg:w-[940px] max-w-full flex flex-col gap-4">
            <p className="font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-black/65">
              The identity is built around a continuous form that brings
              multiple elements together. Inspired by the way threads
              cross and interlock within a fabric, the symbol represents{" "}
              <span className="text-black font-bold">
                people, partnerships and craftsmanship coming together.
              </span>
            </p>
 
            <p className="font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-black/65">
              The visual language carries this idea throughout the brand,
              using overlapping forms, structured layouts and a considered
              blue palette to create an identity that feels dependable,
              contemporary and distinctly Cottson.
            </p>
          </div>
        </div>
 
        {/* IDEA IMAGES */}
        <div
          className="
            mx-auto
            mt-8
            sm:mt-10
            lg:mt-12
            flex
            w-full
            max-w-[1280px]
            flex-col
            lg:flex-row
            items-start
            justify-between
            gap-5
            px-5 sm:px-8 md:px-12 lg:px-20 xl:px-0
          "
        >
          <div className="w-full lg:w-[630px] max-w-full aspect-[3/2] lg:h-[400px] lg:aspect-auto overflow-hidden rounded-[12px] sm:rounded-[16px]">
            <img
              src="https://ik.imagekit.io/qiap0iq38/cottson/Frame%202147227993.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
 
          <div className="w-full lg:w-[630px] max-w-full aspect-[510/500] lg:h-[400px] lg:aspect-auto overflow-hidden rounded-[12px] sm:rounded-[16px]">
            <img
              src="https://ik.imagekit.io/qiap0iq38/cottson/Frame%202147227994%20(1).png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
 
        {/* PHYSICAL TOUCHPOINT */}
        <div
          className="
            mx-auto
            mt-12
            sm:mt-14
            lg:mt-16
            flex
            w-full
            max-w-[1280px]
            flex-col
            gap-6
            sm:gap-8
            items-start
            justify-between
            px-5 sm:px-8 md:px-12 lg:px-20 xl:px-0
 
            lg:flex-row
          "
        >
          <div className="w-full lg:w-[283px] shrink-0">
            <h2
              className="
                font-dm-sans
                text-[28px]
                leading-[34px]
                font-semibold
                tracking-[-0.5px]
                text-black
 
                sm:text-[32px]
                sm:leading-[38px]
 
                lg:text-[36px]
                lg:leading-[42px]
                lg:tracking-[-0.75px]
              "
            >
              Designing for the physical touchpoint
            </h2>
          </div>
 
          <div className="w-full lg:w-[940px] max-w-full flex flex-col gap-4">
            <p className="font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-black/65">
              A brand for a clothing manufacturer needs to work beyond
              screens. We created applications across business stationery,
              brochures, product tags and marketing collateral, making
              sure the identity remained consistent across different
              materials, formats and contexts.
            </p>
 
            <p className="font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-black/65">
              The result is a system that feels equally at home in a sales
              meeting, on a garment, inside a catalogue or across a
              digital interface.
            </p>
          </div>
        </div>
 
        {/* BROCHURE IMAGES */}
        <div
          className="
            mx-auto
            mt-8
            sm:mt-10
            lg:mt-12
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            w-full
            max-w-[1280px]
            items-center
            justify-between
            gap-5
            px-5 sm:px-8 md:px-12 lg:px-20 xl:px-0
          "
        >
          {[
            "https://ik.imagekit.io/qiap0iq38/cottson/brochure%201.png",
            "https://ik.imagekit.io/qiap0iq38/cottson/brochure%202.png",
            "https://ik.imagekit.io/qiap0iq38/cottson/brochure%203.png",
          ].map((src, i) => (
            <div
              key={i}
              className="aspect-square w-full lg:h-[413px] lg:w-[413px] lg:aspect-auto overflow-hidden rounded-[12px] sm:rounded-[16px] mx-auto"
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
 
        {/* CONNECTED SYSTEM */}
        <div
          className="
            mx-auto
            mt-12
            sm:mt-14
            lg:mt-16
            flex
            w-full
            max-w-[1280px]
            flex-col
            gap-6
            sm:gap-8
            items-start
            justify-between
            px-5 sm:px-8 md:px-12 lg:px-20 xl:px-0
 
            lg:flex-row
          "
        >
          <div className="w-full lg:w-[283px] shrink-0">
            <h2
              className="
                font-dm-sans
                text-[28px]
                leading-[34px]
                font-semibold
                tracking-[-0.5px]
                text-black
                whitespace-pre-line
 
                sm:text-[32px]
                sm:leading-[38px]
 
                lg:text-[36px]
                lg:leading-[42px]
                lg:tracking-[-0.75px]
              "
            >
              {"Built as one \nconnected \nsystem"}
            </h2>
          </div>
 
          <div className="w-full lg:w-[940px] max-w-full flex flex-col gap-4">
            <p className="font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-black/65">
              The <span className="text-black font-bold">website</span> gives
              prospective clients a clear view of Cottson's capabilities,
              products and custom apparel solutions, while the{" "}
              <span className="text-black font-bold">client portal</span> takes the
              experience further, giving existing clients a dedicated
              space to manage projects, share files, review deliverables
              and track progress.
            </p>
 
            <p className="font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-black/65">
              From the first interaction to project delivery, the entire
              experience is designed to make working with Cottson
              clearer, smoother and more transparent.
            </p>
          </div>
        </div>
 
        {/* FINAL IMAGES */}
        <div
          className="
            mx-auto
            mt-8
            sm:mt-10
            lg:mt-12
            flex
            w-full
            max-w-[1280px]
            flex-col
            lg:flex-row
            items-start
            justify-between
            gap-5
            px-5 sm:px-8 md:px-12 lg:px-20 xl:px-0
 
            mb-16
            lg:mb-0
          "
        >
          <div className="w-full lg:w-[630px] max-w-full aspect-[3/2] lg:h-[400px] lg:aspect-auto overflow-hidden rounded-[12px] sm:rounded-[16px]">
            <img
              src="https://ik.imagekit.io/qiap0iq38/cottson/Frame%202147228001.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
 
          <div className="w-full lg:w-[630px] max-w-full aspect-[510/500] lg:h-[400px] lg:aspect-auto overflow-hidden rounded-[12px] sm:rounded-[16px]">
            <img
              src="https://ik.imagekit.io/qiap0iq38/cottson/Frame%202147227999.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
 
        <Marquee />
      </main>
 
      {/* FOOTER */}
      <Footer />
    </div>
  );
};
 
export default Cottson;