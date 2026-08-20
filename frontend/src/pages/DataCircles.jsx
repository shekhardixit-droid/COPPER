import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Marquee from "../components/datacircles/Marquee";

const DataCircles = () => {
  return (
    <div className="w-full bg-white">

      {/* NAVBAR */}
      <Navbar />

      <main>
<div
  className="
    mt-40
    flex
    h-[72px]
    w-[1203px]
    items-center
    justify-start
    ml-35

    max-[1023px]:ml-0
    max-[1023px]:w-full
    max-[1023px]:h-auto
    max-[1023px]:px-5

    max-[767px]:mt-24
  "
>
  <h1
    className="
      font-dm-sans
      text-[64px]
      font-semibold
      leading-[72px]
      tracking-[-1px]
      text-black

      max-[1023px]:text-[52px]
      max-[1023px]:leading-[60px]

      max-[767px]:text-[42px]
      max-[767px]:leading-[48px]
      max-[767px]:tracking-[-0.75px]

      max-[480px]:text-[34px]
      max-[480px]:leading-[40px]
    "
  >
    DataCircles: CRM & Invoicing Software
  </h1>
</div>


<div
  className="
    mx-auto
    mt-5
    flex
    h-[91px]
    w-[1231px]
    max-w-full
    items-start
    justify-between

    max-[1023px]:h-auto
    max-[1023px]:flex-col
    max-[1023px]:gap-8
    max-[1023px]:px-5
  "
>
  {/* LEFT */}
  <div
    className="
      flex
      w-fit
      flex-col
      items-start
      shrink-0
    "
  >
    <p
      className="
        font-dm-sans
        text-[18px]
        font-semibold
        leading-[22px]
        tracking-[-0.75px]
        text-black
      "
    >
      Scope
    </p>

    <div className="mt-2 flex items-center gap-2 flex-wrap">
      <span
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
        "
      >
        Brand Identity
      </span>

      <span
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
        "
      >
        Print Collateral
      </span>
    </div>
  </div>


  {/* RIGHT */}
  <div
    className="
      flex
      w-[876px]
      max-w-full
      flex-col
      items-start

      max-[1023px]:w-full
    "
  >
    <div
      className="
        h-[22px]
        w-[484px]
        max-w-full
      "
    >
      <p
        className="
          font-dm-sans
          text-[18px]
          font-semibold
          leading-[22px]
          tracking-[-0.75px]
          text-black
        "
      >
        Project Description
      </p>
    </div>

    <div
      className="
        mt-2
        h-[60px]
        w-[876px]
        max-w-full

        max-[1023px]:h-auto
      "
    >
      <p
        className="
          font-dm-sans
          text-[16px]
          font-normal
          leading-[20px]
          text-black/80
        "
      >
        DataCircles is built around making data feel more connected,
        accessible and intuitive. Copper Studio developed a visual identity
        that translates the complexity of data systems into a simple,
        distinctive and highly adaptable brand language.
      </p>
    </div>
  </div>
</div>


<div
  className="
    mx-auto
    mt-12
    h-[400px]
    w-[1200px]
    max-w-full
    overflow-hidden
    rounded-[16px]

    max-[767px]:h-auto
    max-[767px]:aspect-[3/1]
    max-[767px]:rounded-[12px]
  "
>
  <img
    src="https://ik.imagekit.io/qiap0iq38/DC/Frame%202147228009.png"
    alt=""
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>


<div
  className="
    mx-auto
    mt-16
    flex
    h-[154px]
    w-[1280px]
    max-w-full
    items-start
    justify-between

    max-[1023px]:h-auto
    max-[1023px]:flex-col
    max-[1023px]:gap-8
    max-[1023px]:px-5
  "
>
  {/* LEFT HEADING */}
<div
  className="
    h-[42px]
    w-[244px]
    shrink-0

    max-[1023px]:h-auto
    max-[1023px]:w-full
  "
>
  <h2
    className="
      font-dm-sans
      text-[36px]
      font-semibold
      leading-[42px]
      tracking-[-0.75px]
      text-black

      max-[767px]:text-[32px]
      max-[767px]:leading-[38px]
    "
  >
    Brand Identity
  </h2>
</div>


{/* RIGHT CONTENT */}
<div
  className="
    h-[154px]
    w-[940px]
    max-w-full

    max-[1023px]:h-auto
    max-[1023px]:w-full
  "
>
  <p
    className="
      font-dm-sans
      text-[18px]
      font-normal
      leading-[22px]
      text-black/65
    "
  >
    The identity is built from two fundamental symbols of computing:
    <span className="text-black font-bold">
      {" "}binary code and system processing.
      overwhelming the user.
    </span>{" "}
    The sequence 10101 represents the binary language that forms the
    foundation of all digital systems, while the loading icon symbolizes
    continuous computation, progress, and execution.
  </p>

  <br />

  <p
    className="
      font-dm-sans
      text-[18px]
      font-normal
      leading-[22px]
      text-black/65
    "
  >
    These two concepts merge into a distinctive circular mark, where
    <span className="text-black font-bold">
      {" "}alternating solid and hollow strokes
    </span>{" "}
    abstractly represent the{" "}
    <span className="text-black font-bold">
      binary digits 1 and 0.
    </span>{" "}
    The result is a symbol that communicates movement, precision, and
    perpetual innovation.
  </p>
</div>
</div>

<div
  className="
    mx-auto
    mt-16
    h-[300px]
    w-[1280px]
    max-w-full
    overflow-hidden
    rounded-[16px]

    max-[767px]:h-auto
    max-[767px]:aspect-[1280/300]
    max-[767px]:rounded-[12px]
  "
>
  <img
    src="https://ik.imagekit.io/qiap0iq38/DC/Frame%202147228010.png"
    alt=""
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>


<div
  className="
    mx-auto
    mt-16
    h-[750px]
    w-[1280px]
    max-w-full
    overflow-hidden
    rounded-[12px]

    max-[767px]:h-auto
    max-[767px]:aspect-[1280/75]
    max-[767px]:rounded-[10px]
  "
>
  <img
    src="https://ik.imagekit.io/qiap0iq38/DC/Frame%202147228018.png"
    alt=""
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>



<div
  className="
    mx-auto
    mt-16
    flex
    h-[154px]
    w-[1280px]
    max-w-full
    items-start
    justify-between

    max-[1023px]:h-auto
    max-[1023px]:flex-col
    max-[1023px]:gap-8
    max-[1023px]:px-5
  "
>
  {/* LEFT HEADING */}
  <div
    className="
      h-[42px]
      w-[244px]
      shrink-0

      max-[1023px]:h-auto
      max-[1023px]:w-full
    "
  >
    <h2
      className="
        font-dm-sans
        text-[36px]
        font-semibold
        leading-[42px]
        tracking-[-0.75px]
        text-black

        max-[767px]:text-[32px]
        max-[767px]:leading-[38px]
      "
    >
      Visual Assets
    </h2>
  </div>

  {/* RIGHT CONTENT */}
  <div
    className="
      h-[154px]
      w-[940px]
      max-w-full

      max-[1023px]:h-auto
      max-[1023px]:w-full
    "
  >
    <p
      className="
        font-dm-sans
        text-[18px]
        font-normal
        leading-[22px]
        text-black/65
      "
    >
      The visual assets for DataCircles extend the brand identity through a
      <span className="text-black font-bold">
        {" "}language of motion, intelligence, and precision.
      </span>{" "}
      Every element is rooted in the core concepts of binary code and system
      processing, translating complex technology into a visual language that
      feels clean, approachable, and distinctly human.
    </p>

    <br />

    <p
      className="
        font-dm-sans
        text-[18px]
        font-normal
        leading-[22px]
        text-black/65
      "
    >
      <span className="text-black font-bold">
        Gradients introduce a sense of depth, movement, and digital energy
      </span>
      {" "}, while modular patterns derived from the logo's alternating
      strokes express connectivity, data flow, and scalability. Designed as a
      flexible system, these assets integrate seamlessly across digital
      interfaces, backgrounds, presentations, and print collateral, creating
      a cohesive and recognizable brand experience.
    </p>
  </div>
</div>


<div
  className="
    mx-auto
    mt-16
    h-[595px]
    w-[1280px]
    max-w-full
    overflow-hidden
    rounded-[16px]

    max-[767px]:h-auto
    max-[767px]:aspect-[1280/595]
    max-[767px]:rounded-[12px]
  "
>
  <img
    src="https://ik.imagekit.io/qiap0iq38/DC/Frame%202147228012.png"
    alt=""
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>



<div
  className="
    mx-auto
    mt-16
    h-[600px]
    w-[1280px]
    max-w-full
    overflow-hidden
    rounded-[16px]

    max-[767px]:h-auto
    max-[767px]:aspect-[1280/595]
    max-[767px]:rounded-[12px]
  "
>
  <img
    src="https://ik.imagekit.io/qiap0iq38/DC/iMac_on_Table_Mockup_2%201.png"
    alt=""
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>



<div
  className="
    mx-auto
    mt-16
    flex
    w-[1280px]
    max-w-full
    gap-5

    max-[767px]:flex-col
    max-[767px]:gap-4
  "
>
  {/* IMAGE CARD 1 */}
  <div
    className="
      h-[600px]
      w-[630px]
      shrink-0
      overflow-hidden
      rounded-[16px]

      max-[767px]:h-auto
      max-[767px]:aspect-[630/600]
      max-[767px]:w-full
      max-[767px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/DC/Frame%202147228013.png"
      alt=""
      className="
        h-full
        w-full
        object-cover
      "
    />
  </div>

  {/* IMAGE CARD 2 */}
  <div
    className="
      h-[600px]
      w-[630px]
      shrink-0
      overflow-hidden
      rounded-[16px]

      max-[767px]:h-auto
      max-[767px]:aspect-[630/600]
      max-[767px]:w-full
      max-[767px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/DC/Frame%202147228014.png"
      alt=""
      className="
        h-full
        w-full
        object-cover
      "
    />
  </div>
</div>




<div
  className="
    mx-auto
    mt-16
    h-[595px]
    w-[1280px]
    max-w-full
    overflow-hidden
    rounded-[16px]

    max-[767px]:h-auto
    max-[767px]:aspect-[1280/595]
    max-[767px]:rounded-[12px]
  "
>
  <img
    src="https://ik.imagekit.io/qiap0iq38/DC/Frame%202147228013%20(1).png"
    alt=""
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>




<Marquee/>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default DataCircles;