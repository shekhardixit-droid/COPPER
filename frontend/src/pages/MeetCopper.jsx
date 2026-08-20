import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import FinalCTA from "../components/home/FinalCTA";
import FAQ from "../components/meet-copper/FAQ";
import CallPoints from "../components/three-services/FourCards";
import Process from "../components/home/Process";
import Techstack from "../components/home/Techstack";
import Marquee from "../components/meet-copper/Marquee";

const MeetCopper = () => {
  return (
    <div className="w-full bg-white">

      {/* NAVBAR */}
      <Navbar />


      <div
        className="
          mx-auto
          flex
          h-[343px]
          w-[1200px]
          max-w-full
          flex-col
          items-center
          justify-center
          mt-30

          max-[767px]:h-auto
          max-[767px]:w-full
          max-[767px]:px-5
          max-[767px]:py-16
          max-[767px]:mt-20

          max-[480px]:px-4
          max-[480px]:py-12
        "
      >

        {/* Main Text */}

        <div
          className="
            flex
            h-[152px]
            w-[892px]
            max-w-full
            items-center
            justify-center
            text-center

            max-[767px]:h-auto
            max-[767px]:w-full
          "
        >
          <h1
            className="
              w-full
              font-dm-sans
              text-[70px]
              font-bold
              leading-[76px]
              tracking-[-0.75px]
              text-black

              max-[767px]:text-[42px]
              max-[767px]:leading-[46px]
              max-[767px]:tracking-[-0.5px]

              max-[480px]:text-[34px]
              max-[480px]:leading-[38px]
            "
          >
            More Than A Design Agency,

            <br />
            Meet Copper Studio
          </h1>
        </div>


        {/* Supporting Text */}

        <div
          className="
            mt-6
            flex
            h-[76px]
            w-[750px]
            max-w-full
            items-center
            justify-center
            text-center
            -translate-y-5

            max-[767px]:mt-8
            max-[767px]:h-auto
            max-[767px]:w-full
            max-[767px]:translate-y-0
          "
        >
          <p
            className="
              w-full
              font-dm-sans
              text-[18px]
              font-light
              leading-[24px]
              text-black/75

              max-[767px]:text-[16px]
              max-[767px]:leading-[22px]

              max-[480px]:text-[15px]
              max-[480px]:leading-[21px]
            "
          >
            A strategic design partner helping ambitious businesses turn ideas into meaningful
            brands and digital experiences.
          </p>
        </div>

      </div>


      {/* SECTION TITLE */}

      <div
        className="
          mt-10
          flex
          h-[65px]
          w-[286px]
          items-center
          justify-start
          ml-30
          max-[767px]:ml-0
          max-[767px]:w-full
          max-[767px]:px-5
        "
      >
        <h2
          className="
            w-full
            font-dm-sans
            text-[48px]
            font-semibold
            leading-[65px]
            tracking-[-2px]
            text-black
          "
        >
          Why Copper?
        </h2>
      </div>


      {/* DESCRIPTION */}

      <div
        className="
          mt-5
          flex
          h-[95px]
          w-[928px]
          max-w-full
          items-center
          justify-start
          text-left
          ml-30
          max-[767px]:ml-0
          max-[767px]:h-auto
          max-[767px]:w-full
          max-[767px]:px-5
        "
      >
        <p
          className="
            w-full
            font-dm-sans
            text-[18px]
            font-normal
            leading-[24px]
            text-black/75
          "
        >
          Inspired by the qualities of copper, we believe great brands are built through storytelling, connection, and craftsmanship, uncovering what makes each business unique and turning it into a meaningful visual presence that connects with people, communicates what the brand stands for, and leaves a lasting impression across every touchpoint, creating brands that gain character, value, and strength over time.
        </p>
      </div>


      {/* CARDS */}

      <div
        className="
          mt-16
          flex
          h-[486px]
          w-[1279px]
          max-w-full
          justify-between
          gap-5
          ml-30

          max-[1024px]:ml-0
          max-[1024px]:w-full
          max-[1024px]:h-auto
          max-[1024px]:flex-wrap
          max-[1024px]:justify-center
          max-[767px]:flex-col
          max-[767px]:items-center
          max-[767px]:flex-nowrap
        "
      >

        {/* CARD 1 */}

        <div
          className="
            h-[486px]
            w-[413px]
            shrink-0
            bg-[#fbfbf9]
            rounded-[8px]
          "
        >

          {/* IMAGE */}

          <div
            className="
              h-[310px]
              w-[397px]
              overflow-hidden
              mt-2
              ml-2
            "
          >
            <img
              src="https://res.cloudinary.com/ioempbte/image/upload/v1787135040/storytelling_diagram_1.png"
              alt=""
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>


          {/* CONTENT */}

          <div
            className="
              flex
              h-[168px]
              w-[397px]
              flex-col
              px-5
              pt-5
            "
          >

            {/* HEADING */}

            <div
              className="
                h-[26px]
                w-[269px]
              "
            >
              <h3
                className="
                  font-dm-sans
                  text-[22px]
                  font-semibold
                  leading-[25.8px]
                  text-black
                "
              >
                Storytelling
              </h3>
            </div>


            {/* DESCRIPTION */}

            <div
              className="
                mt-4
                h-[86px]
                w-[357px]
                max-w-full
              "
            >
              <p
                className="
                  font-dm-sans
                  text-[16px]
                  font-normal
                  leading-[22px]
                  text-black/80
                "
              >
                Every brand has a story worth telling. We turn your ideas, values, and ambitions into a clear visual story people can understand and remember.
              </p>
            </div>

          </div>
        </div>


        {/* CARD 2 */}

        <div
          className="
            h-[486px]
            w-[413px]
            shrink-0
            bg-[#fbfbf9]
            rounded-[8px]
          "
        >

          <div
            className="
              h-[310px]
              w-[397px]
              overflow-hidden
              ml-2
              mt-2
            "
          >
            <img
              src="https://res.cloudinary.com/ioempbte/image/upload/v1787135035/connection_diagram_1.png"
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
              flex
              h-[168px]
              w-[397px]
              flex-col
              px-5
              pt-5
            "
          >

            <div
              className="
                h-[26px]
                w-[269px]
              "
            >
              <h3
                className="
                  font-dm-sans
                  text-[22px]
                  font-semibold
                  leading-[25.8px]
                  text-black
                "
              >
                Connection
              </h3>
            </div>


            <div
              className="
                mt-4
                h-[86px]
                w-[357px]
                max-w-full
              "
            >
              <p
                className="
                  font-dm-sans
                  text-[16px]
                  font-normal
                  leading-[22px]
                  text-black/80
                "
              >
                Good design creates meaningful connections between brands and people. We build experiences that turn interactions into lasting relationships.
              </p>
            </div>

          </div>
        </div>


        {/* CARD 3 */}

        <div
          className="
            h-[486px]
            w-[413px]
            shrink-0
            bg-[#fbfbf9]
            rounded-[8px]
          "
        >

          <div
            className="
              h-[310px]
              w-[397px]
              overflow-hidden
              ml-2
              mt-2
            "
          >
            <img
              src="https://res.cloudinary.com/ioempbte/image/upload/v1787135035/craftsmanship_diagram_1.png"
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
              flex
              h-[168px]
              w-[397px]
              flex-col
              px-5
              pt-5
            "
          >

            <div
              className="
                h-[26px]
                w-[269px]
              "
            >
              <h3
                className="
                  font-dm-sans
                  text-[22px]
                  font-semibold
                  leading-[25.8px]
                  text-black
                "
              >
                Craftsmanship
              </h3>
            </div>


            <div
              className="
                mt-4
                h-[86px]
                w-[357px]
                max-w-full
              "
            >
              <p
                className="
                  font-dm-sans
                  text-[16px]
                  font-normal
                  leading-[22px]
                  text-black/80
                "
              >
                Great design lives in the details. We balance creativity with precision to create work that feels considered, distinctive, and built to last.
              </p>
            </div>

          </div>
        </div>

      </div>


      <div
        className="
          h-[84px]
          w-[292px]
          mt-20
          ml-30
          max-[767px]:ml-0
          max-[767px]:w-full
          max-[767px]:h-auto
          max-[767px]:px-5
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
          "
        >
          Why We Created
          Copper Studio
        </h2>
      </div>


      {/* WHY WE CREATED CONTENT */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1280px]
          items-start
          justify-between
          overflow-hidden
          -mt-20

          max-[1024px]:mt-8
          max-[1024px]:flex-col
          max-[1024px]:justify-start
          max-[1024px]:gap-8
          max-[767px]:mt-8
        "
      >

        {/* RIGHT CONTENT */}

        <div
          className="
            ml-[340px]
            h-[192px]
            w-[940px]
            shrink-0
            mb-20

            max-[1024px]:ml-0
            max-[1024px]:w-full
            max-[1024px]:h-auto
            max-[1024px]:px-5
            max-[1024px]:mb-12
            max-[767px]:mb-8
          "
        >
          <p
            className="
              font-dm-sans
              text-[18px]
              font-normal
              leading-[24px]
              text-black/65

              max-[767px]:text-[16px]
              max-[767px]:leading-[22px]
            "
          >
            We believe a brand should be more than a logo or a visual identity, it should have an
            <span className="text-black">
              {" "}emotion, a voice, and a story worth telling {" "}
            </span>
            .We created Copper Studio to uncover what a brand truly stands for and give that meaning a distinctive presence through thoughtful design, storytelling, and strategy.
          </p>

          <br />

          <p
            className="
              font-dm-sans
              text-[18px]
              font-normal
              leading-[24px]
              text-black/65

              max-[767px]:text-[16px]
              max-[767px]:leading-[22px]
            "
          >
            That’s also why we bring brand identity, web design, and custom company portals together under one roof. A
            <span className="text-black">
              {" "}brand doesn’t exist in isolation; it needs rhythm across how it looks, how it communicates, and how it works. {" "}
            </span>
            From the first impression to every digital interaction behind the scenes, we create a consistent presence that helps brands feel connected, memorable, and built to grow.
          </p>
        </div>
      </div>



      


      <Marquee />


      <div
        className="
          mx-auto
          mt-16
          flex
          h-[165px]
          w-[1280px]
          max-w-full
          items-center
          justify-between
          bg-[#C55418]
          rounded-2xl
          px-12

          max-[1024px]:h-auto
          max-[1024px]:w-full
          max-[1024px]:gap-6
          max-[1024px]:px-6
          max-[767px]:flex-col
          max-[767px]:items-center
          max-[767px]:py-8
        "
      >

        

        {/* LEFT CONTENT */}

        <div
          className="
            flex
            h-[92px]
            w-[487px]
            flex-col
            justify-between

            max-[767px]:h-auto
            max-[767px]:w-full
          "
        >

          <div
            className="
              h-[40px]
              w-[263px]
            "
          >
            <h3
              className="
                font-dm-sans
                text-[24px]
                font-semibold
                leading-[54px]
                text-white
              "
            >
              Want to join the team?
            </h3>
          </div>


          <div
            className="
              h-[44px]
              w-[487px]

              max-[767px]:h-auto
              max-[767px]:w-full
            "
          >
            <p
              className="
                font-dm-sans
                text-[16px]
                font-normal
                leading-[22px]
                tracking-[0.16px]
                text-white
              "
            >
              We are always in the search of creative minds with fresh perspectives, and the same curiosity and passion for creativity!
            </p>
          </div>

        </div>


        {/* RIGHT PILL */}

        <div
          className="
            flex
            h-[53px]
            w-[253px]
            items-center
            justify-center
            gap-3
            rounded-full
            bg-white
          "
        >
          <span
            className="
              h-[29px]
              w-[171px]
              font-dm-sans
              text-[18px]
              font-normal
              leading-[28.8px]
              text-black
            "
          >
            View Open Positions
          </span>

          <img
            src="https://res.cloudinary.com/ioempbte/image/upload/v1787136475/ic.svg"
            alt=""
            className="
              h-[20px]
              w-[20px]
            "
          />
        </div>

      </div>


      <Techstack />

      <Process />

      <CallPoints />

      <FAQ />


      {/* FINAL CTA */}

      <FinalCTA />


      {/* FOOTER */}

      <Footer />

    </div>
  );
};

export default MeetCopper;