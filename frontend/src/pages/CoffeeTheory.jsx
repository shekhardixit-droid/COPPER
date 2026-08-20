import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Marquee from "../components/datacircles/Marquee";
 
const CoffeeTheory = () => {
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
            Coffee Theory: Brewed for Belonging
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
                "Packaging",
                "Brand Icons",
                
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
                Coffee Theory is a contemporary coffee brand with a warm, playful personality. Copper Studio developed a visual identity that brings together the ritual of coffee with a more approachable, character led brand world. The result is a brand that feels familiar enough to be inviting, but distinctive enough to stand out.
              </p>
            </div>
          </div>
        </div>
 

 
<div
  className="
    mx-auto
    mt-12
    flex
    w-[1280px]
    max-w-full
    items-start
    justify-between
    gap-5

    max-[1023px]:flex-col
    max-[1023px]:px-5
  "
>
  {/* LEFT IMAGE — 750 × 500 */}
  <div
    className="
      h-[400px]
      w-[630px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[3/2]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/coffeetheory/Frame%202147228009%20(2).png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>

  {/* RIGHT IMAGE — 510 × 500 */}
  <div
    className="
      h-[400px]
      w-[630px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[510/500]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/coffeetheory/Frame%202147228010.png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>
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
    h-[126px]
    w-[309px]
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
  Making coffee feel more personal
  
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
  Coffee culture can often feel overly serious. For Coffee Theory, we wanted to create something that felt
    <span className="text-black font-bold">
      {" "}welcoming, memorable and full of personality.
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
  

The identity is built around a playful rabbit character, expressive typography and a warm colour palette inspired by coffee, natural textures and the café environment. The result is a brand that feels familiar enough to be inviting, but distinctive enough to stand out.
    <span className="text-black">
    </span>{" "}
  {" "}
    <span className="text-black">
     
    </span>{" "}
   
  </p>
</div>
</div>


<div
  className="
    mx-auto
    mt-16
    h-[400px]
    w-[1280px]
    max-w-full
    overflow-hidden
    rounded-[16px]

    max-[1023px]:h-auto
    max-[1023px]:aspect-[1280/300]
    max-[1023px]:rounded-[12px]
  "
>
  <img
    src="https://ik.imagekit.io/qiap0iq38/coffeetheory/color%20palette.png"
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
    h-[126px]
    w-[309px]
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
  From the cup <br/>to the counter
  
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
  We extended the identity across the everyday touchpoints customers interact with. Menus, paper cups, wrappers, tote bags and loyalty cards were designed as part of one cohesive system, turning ordinary café materials into opportunities for brand expression. The result is a visual experience that feels consistent without feeling repetitive.

    <span className="text-black">
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

    <span className="text-black font-bold">Every cup. Every card. Every detail has a little personality.
    </span>{" "}
  {" "}
    <span className="text-black">
     
    </span>{" "}
   
  </p>
</div>
</div>



<div
  className="
    mx-auto
    mt-12
    flex
    w-[1280px]
    max-w-full
    items-start
    justify-between
    gap-5

    max-[1023px]:flex-col
    max-[1023px]:px-5
  "
>
  {/* LEFT IMAGE — 750 × 500 */}
  <div
    className="
      h-[900px]
      w-[900px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[3/2]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/coffeetheory/menu.png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>

  {/* RIGHT IMAGE — 510 × 500 */}
  <div
    className="
      h-[900px]
      w-[360px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[510/500]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/coffeetheory/menu%20(1).png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>
</div>



<div
  className="
    mx-auto
    mt-6
    flex
    w-[1280px]
    max-w-full
    items-start
    justify-between
    gap-5

    max-[1023px]:flex-col
    max-[1023px]:px-5
  "
>
  {/* LEFT IMAGE — 750 × 500 */}
  <div
    className="
      h-[600px]
      w-[630px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[3/2]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/coffeetheory/Frame%202147228011.png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>

  {/* RIGHT IMAGE — 510 × 500 */}
  <div
    className="
      h-[600px]
      w-[630px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[510/500]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/Frame%202147228012_cNFSETT7Y.svg"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>
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
    h-[126px]
    w-[309px]
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
The result
  
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
 A playful coffee brand built around

    <span className="text-black font-bold">
      {" "}character, warmth and everyday moments.
    </span>{" "}
   Coffee Theory now has a flexible identity system that can move effortlessly from the café counter to cups, packaging, loyalty programmes and merchandise, creating a brand experience that feels cohesive, approachable and easy to remember.
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

    <span className="text-black font-bold">Good coffee deserves a good personality.
    </span>{" "}
  {" "}
    <span className="text-black">
     
    </span>{" "}
   
  </p>
</div>
</div>



<div
  className="
    mx-auto
    mt-6
    flex
    w-[1280px]
    max-w-full
    items-start
    justify-between
    gap-5

    max-[1023px]:flex-col
    max-[1023px]:px-5
  "
>
  {/* LEFT IMAGE — 750 × 500 */}
  <div
    className="
      h-[600px]
      w-[630px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[3/2]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/coffeetheory/Frame%202147228013%20(1).png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>

  {/* RIGHT IMAGE — 510 × 500 */}
  <div
    className="
      h-[600px]
      w-[630px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[510/500]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/coffeetheory/Frame%202147228014.png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>
</div>




<div
  className="
    mx-auto
    mt-6
    flex
    w-[1280px]
    max-w-full
    items-start
    justify-between
    gap-5

    max-[1023px]:flex-col
    max-[1023px]:px-5
  "
>
  {/* LEFT IMAGE — 750 × 500 */}
  <div
    className="
      h-[600px]
      w-[800px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[3/2]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/coffeetheory/Frame%202147228015%20(1).png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>

  {/* RIGHT IMAGE — 510 × 500 */}
  <div
    className="
      h-[600px]
      w-[454px]
      max-w-full
      overflow-hidden
      rounded-[16px]

      max-[1023px]:w-full
      max-[1023px]:h-auto
      max-[1023px]:aspect-[510/500]
      max-[1023px]:rounded-[12px]
    "
  >
    <img
      src="https://ik.imagekit.io/qiap0iq38/coffeetheory/Frame%202147228016%20(1).png"
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
 
export default CoffeeTheory;