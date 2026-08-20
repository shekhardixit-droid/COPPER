import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Marquee from "../components/datacircles/Marquee";

const NittyGritty = () => {
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
    Nitty Gritty
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

      max-[1023px]:w-full
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
        Website Design
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
        Nitty Gritty is a creative production brand with an energetic,
        culture-driven personality. Copper Studio designed a website that
        moves away from the predictable agency aesthetic and creates a
        digital experience with the same attitude as the work itself.
      </p>
    </div>
  </div>
</div>




<div
  className="
    mx-auto
    mt-12
    h-[600px]
    w-[1280px]
    max-w-full
    overflow-hidden
    rounded-[16px]

    max-[1023px]:mx-5
    max-[1023px]:w-[calc(100%-40px)]

    max-[767px]:h-auto
    max-[767px]:aspect-[3/1]
    max-[767px]:rounded-[12px]
  "
>
  <img
    src="https://ik.imagekit.io/qiap0iq38/nittygritty/Frame%20154.png"
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
      h-[168px]
      w-[275px]
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
      Making the
      <br />
      website feel as
      <br />
      bold as the work
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
      Creative businesses are often judged by the quality of what they put
      out into the world. For Nitty Gritty, the website needed to do more
      than explain what they do, it needed to immediately communicate their
      <span className="text-black font-bold">
        {" "}energy, creativity and point of view.
      </span>{" "}
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
      We built the experience around a dark visual environment, strong
      typography, vivid imagery and subtle motion-inspired graphics,
      creating a digital identity that feels confident without becoming
      overwhelming.
      <span className="text-black font-bold">
        {" "}
      </span>{" "}
      {" "}
      <span className="text-black font-bold"></span>{" "}
    </p>
  </div>
</div>




<div
  className="
    mx-auto
    mt-12
    h-[600px]
    w-[1280px]
    max-w-full
    overflow-hidden
    rounded-[16px]

    max-[1023px]:mx-5
    max-[1023px]:w-[calc(100%-40px)]

    max-[767px]:h-auto
    max-[767px]:aspect-[3/1]
    max-[767px]:rounded-[12px]
  "
>
  <img
    src="https://ik.imagekit.io/qiap0iq38/nittygritty/Frame%20155.png"
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
      h-[168px]
      w-[275px]
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
      Designed around the work
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
      Instead of treating the website as a collection of information pages,
      we designed the experience to make the work the hero. Large visual
      sections create moments of impact, while structured content helps
      visitors quickly understand the studio, its capabilities and the kind
      of work it creates.

      <span className="text-black font-bold">
        {" "}
      </span>{" "}
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
      The visual system balances
      <span className="text-black font-bold">
        {" "}impact with usability
      </span>{" "}
      {" "}
      <span className="text-black font-bold"></span>{" "}
      , giving the brand personality without making the experience difficult
      to navigate.
    </p>
  </div>
</div>




<div
  className="
    mx-auto
    flex
    w-[1280px]
    max-w-full
    items-start
    justify-between
    gap-5
    px-5

    max-[1023px]:flex-col
    max-[1023px]:items-center
  "
>
  {/* =========================
      LEFT SIDE
  ========================== */}
  <div
    className="
      flex
      w-[630px]
      max-w-full
      flex-col
      items-start
      gap-5
    "
  >
    {/* LEFT — 630 × 2329 */}
    <div
      className="
        h-[2329px]
        w-[630px]
        max-w-full
        overflow-hidden
        rounded-[16px]

        max-[767px]:h-auto
        max-[767px]:aspect-[630/2329]
        max-[767px]:rounded-[12px]
      "
    >
      <img
        src="https://ik.imagekit.io/qiap0iq38/nittygritty/Frame%20156.png"
        alt=""
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>

    {/* LEFT — 630 × 334 */}
    <div
      className="
        h-[334px]
        w-[630px]
        max-w-full
        overflow-hidden
        rounded-[16px]

        max-[767px]:h-auto
        max-[767px]:aspect-[630/334]
        max-[767px]:rounded-[12px]
      "
    >
      <img
        src="https://ik.imagekit.io/qiap0iq38/nittygritty/cover.png"
        alt=""
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>
  </div>


  {/* =========================
      RIGHT SIDE
  ========================== */}
  <div
    className="
      flex
      w-[630px]
      max-w-full
      flex-col
      items-start
      gap-5
    "
  >
    {/* RIGHT — 630 × 600 */}
    <div
      className="
        h-[600px]
        w-[630px]
        max-w-full
        overflow-hidden
        rounded-[16px]

        max-[767px]:h-auto
        max-[767px]:aspect-square
        max-[767px]:rounded-[12px]
      "
    >
      <img
        src="https://ik.imagekit.io/qiap0iq38/nittygritty/cover%20(1).png"
        alt=""
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>

    {/* RIGHT — 630 × 2063 */}
    <div
      className="
        h-[2063px]
        w-[630px]
        max-w-full
        overflow-hidden
        rounded-[16px]

        max-[767px]:h-auto
        max-[767px]:aspect-[630/2063]
        max-[767px]:rounded-[12px]
      "
    >
      <img
        src="https://ik.imagekit.io/qiap0iq38/nittygritty/screen%202%201.png"
        alt=""
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>
  </div>
</div>

<Marquee/>



      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default NittyGritty;