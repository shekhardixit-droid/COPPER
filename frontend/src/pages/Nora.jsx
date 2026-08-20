import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Marquee from "../components/datacircles/Marquee";

const Nora = () => {
  return (
    <div className="w-full bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* NORA PAGE CONTENT */}
      <main>
       
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
            Nora: Yoga and Pilates Studio
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
                Nora is a contemporary yoga and Pilates studio built around movement, balance and mindful living. Copper Studio developed a visual identity that feels calm yet distinctive, bringing together the physicality of movement with a more refined, lifestyle led aesthetic.
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
      src="https://ik.imagekit.io/qiap0iq38/nora/Frame%20154.png"
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
      src="https://ik.imagekit.io/qiap0iq38/nora/Frame%202147227997.png"
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
  Making movement
  feel like a
  <br />
  brand
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
    Yoga and Pilates are rooted in balance, control and connection with the body. For Nora, we wanted to translate those qualities into an identity that felt
    <span className="text-black font-bold">
      {" "}minimal, expressive and unmistakably human.
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
    

 

Rather than relying on conventional wellness visuals, we created a flexible identity system inspired by movement itself,  from the custom wordmark and flowing forms to a set of symbols representing different practices.
    <span className="text-black font-bold">
      {" "}
    </span>{" "}
  {" "}
    <span className="text-black font-bold">
     
    </span>{" "}
   
  </p>
</div>
</div>



<div
  className="
    mx-auto
    mt-16
    h-[200px]
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
    src="https://ik.imagekit.io/qiap0iq38/nora/Frame%202147228002.png"
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
  Find your form
  
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
   The identity takes inspiration from the continuous movement of the body. The custom Nora wordmark uses soft, flowing forms to create a sense of movement without becoming overly literal. Supporting symbols extend this idea into a visual language that can represent different classes, practices and experiences within the Nora ecosystem.

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
    

 


    <span className="text-black font-bold">
      
The result is a brand that feels fluid rather than fixed, just like movement itself.
    </span>{" "}
  {" "}
    <span className="text-black font-bold">
     
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
      src="https://ik.imagekit.io/qiap0iq38/nora/Frame%202147228003.png"
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
      src="https://ik.imagekit.io/qiap0iq38/nora/Frame%202147228004.png"
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
  Designing the details
  
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
   For a wellness brand, the smallest details can shape the overall experience. We carried the Nora identity across branded equipment, reusable bottles, gifting materials and other studio touchpoints, creating a consistent experience from the moment someone discovers the studio to the moment they step onto the mat.

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
    

 


    <span className="text-black font-bold">
Quiet design. Thoughtful details. One cohesive experience.
    </span>{" "}
  {" "}
    <span className="text-black font-bold">
     
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
      h-[600px]
      w-[760px]
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
      src="https://ik.imagekit.io/qiap0iq38/nora/Frame%202147228005.png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>

  {/* RIGHT IMAGE — 510 × 500 */}
  <div
    className="
      h-[600px]
      w-[500px]
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
      src="https://ik.imagekit.io/qiap0iq38/nora/Frame%202147228006.png"
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
  From studio to everyday life
  
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
   We extended Nora beyond the core identity into a range of physical brand touchpoints. Visiting cards, studio graphics, equipment, bottles and gift certificates were designed as part of the same visual system, allowing the brand to remain recognisable across different materials and experiences.


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
    

 


    <span className="text-black font-bold">

The identity becomes something you can see, hold and interact with, rather than simply a logo on a wall.
    </span>{" "}
  {" "}
    <span className="text-black font-bold">
     
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
      src="https://ik.imagekit.io/qiap0iq38/nora/Frame%202147228007.png"
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
      src="https://ik.imagekit.io/qiap0iq38/nora/Frame%202147228008.png"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>
</div>
       
      </main>

      <Marquee/>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Nora;