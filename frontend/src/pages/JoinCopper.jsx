import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const JoinCopper = () => {
  const [openRole, setOpenRole] = useState(null);

  const toggleRole = (role) => {
    setOpenRole(openRole === role ? null : role);
  };

  const roles = [
    {
      id: "brand",
      title: "Brand Designer",
      description:
        "Help shape distinctive identities for ambitious brands, from strategy and visual systems to the details that bring them to life.",
      tags: ["DESIGN", "FULL-TIME", "IN OFFICE"],
      whatYoullDo: [
        "Develop brand identities, visual systems, and creative concepts",
        "Translate strategy into thoughtful, distinctive design",
        "Create brand assets across digital and physical touchpoints",
        "Collaborate with the team to refine and deliver high-quality work",
      ],
      lookingFor: [
        "2+ years of branding or graphic design experience",
        "Strong portfolio with identity and visual design work",
        "Good understanding of typography, layout, and visual systems",
        "Strong attention to detail and communication skills",
      ],
      niceToHave: [
        "Experience working with startups or growing brands",
        "Motion, illustration, or digital design skills",
        "Familiarity with Figma and Adobe Creative Suite",
      ],
      button: "Apply for Brand Designer",
      note: "Send your portfolio + a paragraph on why this role.",
    },
    {
      id: "web",
      title: "Web Developer",
      description:
        "Build brands and digital experiences that matter.",
      tags: ["DEVELOPMENT", "FULL-TIME", "IN OFFICE"],
      whatYoullDo: [
        "Design websites and digital experiences from concept to launch",
        "Create responsive layouts and intuitive user journeys",
        "Develop websites with clean, scalable code",
        "Collaborate with designers and clients throughout projects",
      ],
      lookingFor: [
        "2+ years of web design or development experience",
        "Strong portfolio of websites or digital products",
        "Good understanding of UX, responsive design, and web standards",
        "Strong problem-solving and communication skills",
      ],
      niceToHave: [
        "Experience working with figma or similar platforms",
        "Basic understanding of HTML, CSS, and JavaScript",
        "Motion and interaction design experience",
      ],
      button: "Apply for Web Developer",
      note: "Send your portfolio + a paragraph on why this role.",
    },
    {
      id: "creative",
      title: "Creative Intern",
      description:
        "Learn how strategy, design, and development come together.",
      tags: ["DESIGN", "INTERNSHIP", "IN OFFICE"],
      whatYoullDo: [
        "Support ongoing branding and digital design projects",
        "Explore concepts, layouts, references, and visual directions",
        "Assist with presentations and project deliverables",
        "Learn how strategy, design, and development come together",
      ],
      lookingFor: [
        "Strong interest in branding and design",
        "Basic understanding of typography, layout, and composition",
        "Curious mindset and willingness to learn",
        "A portfolio, college work, or personal projects to share",
      ],
      niceToHave: [
        "Figma or Adobe Creative Suite experience",
        "Interest in branding projects",
        "Experience working on self-initiated projects",
      ],
      button: "Apply for Creative Intern",
      note: "Send your portfolio + a short note introducing yourself",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="w-full overflow-hidden bg-white">
        {/* =========================================================
            MAIN CONTAINER
        ========================================================= */}
        <div className="w-full max-w-[1200px] mx-auto px-5">

          {/* =========================================================
              HERO
          ========================================================= */}
          <section
            className="
              w-full
              flex
              flex-col
              items-center
              pt-[200px]

              max-[900px]:pt-[90px]
              max-[600px]:pt-[65px]
            "
          >
            <div
              className="
                w-full
                max-w-[845px]
                min-h-[152px]
                flex
                items-center
                justify-center
              "
            >
              <h1
                className="
                  m-0
                  w-full
                  text-center
                  font-['DM_Sans']
                  font-bold
                  text-[#05050B]
                  text-[70px]
                  leading-[76px]
                  tracking-[-2.5px]

                  max-[900px]:text-[56px]
                  max-[900px]:leading-[62px]

                  max-[600px]:text-[40px]
                  max-[600px]:leading-[46px]
                  max-[600px]:tracking-[-1.5px]
                "
              >
                Think you’d fit in?
                <br />
                Come build with us
              </h1>
            </div>

            <div
              className="
                w-full
                max-w-[750px]
                min-h-[76px]
                flex
                items-center
                justify-center
                text-center
              "
            >
              <p
                className="
                  m-0
                  w-full
                  text-center
                  font-['DM_Sans']
                  font-light
                  text-[#05050B]
                  opacity-75
                  text-[18px]
                  leading-[25px]

                  max-[600px]:text-[16px]
                  max-[600px]:leading-[23px]
                "
              >
                We’re looking for curious thinkers, thoughtful designers, and
                problem solvers who want to build brands and digital
                experiences that matter.
              </p>
            </div>
          </section>

          {/* =========================================================
              WHERE YOU'LL FIT
          ========================================================= */}
          <section
            className="
              w-full
              max-w-[994px]
              mx-auto
              mt-[96px]

              max-[900px]:mt-[80px]
              max-[600px]:mt-[60px]
            "
          >
            <h2
              className="
                m-0
                w-full
                font-['DM_Sans']
                font-semibold
                text-[#05050B]
                text-[62px]
                leading-[1.1]
                tracking-[-1.5px]

                max-[900px]:text-[52px]

                max-[600px]:text-[40px]
                max-[600px]:tracking-[-1px]
              "
            >
              Where you’ll fit?
            </h2>
          </section>
        </div>

        {/* =========================================================
            JOB ROLES
        ========================================================= */}
        <div
          className="
            w-full
            max-w-[994px]
            mx-auto
            px-0

            max-[1020px]:px-5
          "
        >
          {roles.map((role) => {
            const isOpen = openRole === role.id;

            return (
              <section
                key={role.id}
                className="
                  w-full
                  mt-[64px]

                  max-[900px]:mt-[55px]
                  max-[600px]:mt-[45px]
                "
              >
                {/* =====================================================
                    ROLE HEADER
                ===================================================== */}
                <div className="relative w-full">

                  {/* TITLE */}
                  <h3
                    className={`
                      m-0
                      pr-[70px]
                      font-['DM_Sans']
                      font-extrabold
                      text-[36px]
                      leading-[42px]
                      tracking-[-0.8px]
                      transition-colors
                      duration-200

                      max-[600px]:text-[26px]
                      max-[600px]:leading-[32px]
                      max-[600px]:pr-[55px]

                      ${
                        isOpen
                          ? "text-[#E47317]"
                          : "text-[#1A1A1A]"
                      }
                    `}
                  >
                    {role.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      m-0
                      mt-[2px]
                      pr-[70px]
                      font-['DM_Sans']
                      font-normal
                      text-[16px]
                      leading-[27px]
                      text-[#4A4A4A]

                      max-[700px]:pr-[55px]

                      max-[600px]:text-[14px]
                      max-[600px]:leading-[22px]
                      max-[600px]:pr-[45px]
                    "
                  >
                    {role.description}
                  </p>

                  {/* =================================================
                      TAGS + DROPDOWN
                  ================================================= */}
                  <div
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      mt-[8px]

                      max-[600px]:items-start
                    "
                  >
                    {/* TAGS */}
                    <div
                      className="
                        flex
                        items-center
                        gap-[8px]
                        flex-wrap
                        pr-[55px]

                        max-[600px]:gap-[6px]
                      "
                    >
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            inline-flex
                            items-center
                            justify-center
                            h-[27px]
                            px-[13px]
                            rounded-full
                            bg-[#FBFBF9]
                            font-['DM_Sans']
                            font-normal
                            text-[11px]
                            leading-[27px]
                            tracking-[1px]
                            text-[#1A1A1A]
                            whitespace-nowrap

                            max-[600px]:h-[25px]
                            max-[600px]:px-[11px]
                            max-[600px]:text-[9px]
                            max-[600px]:leading-[25px]
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* DROPDOWN */}
                    <button
                      type="button"
                      onClick={() => toggleRole(role.id)}
                      aria-expanded={isOpen}
                      aria-label={`Toggle ${role.title}`}
                      className="
                        absolute
                        right-0
                        top-[6px]

                        w-[36px]
                        h-[36px]
                        rounded-full
                        bg-black

                        flex
                        items-center
                        justify-center

                        border-0
                        p-0
                        cursor-pointer
                        shrink-0

                        transition-transform
                        duration-200

                        max-[600px]:w-[36px]
                        max-[600px]:h-[36px]
                        max-[600px]:top-[2px]
                      "
                    >
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`
                          transition-transform
                          duration-200
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        <path
                          d="M0 0L5 5L10 0"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* =====================================================
                    EXPANDED ROLE CONTENT
                    IMPORTANT:
                    No fixed height here.
                    Everything flows naturally on mobile.
                ===================================================== */}
                {isOpen && (
                  <div
                    className="
                      w-full
                      mt-[10px]
                      pb-[2px]
                      font-['DM_Sans']

                      transition-all
                      duration-200
                    "
                  >
                    {/* =================================================
                        WHAT YOU'LL DO
                    ================================================= */}
                    <div className="w-full">
                      <h4
                        className="
                          m-0
                          font-['DM_Sans']
                          font-semibold
                          text-[16px]
                          leading-[23px]
                          text-[#1A1A1A]
                        "
                      >
                        What you’ll do
                      </h4>

                      <ul
                        className="
                          m-0
                          mt-[2px]
                          p-0
                          pl-[17px]
                          list-disc
                          marker:text-[#AFAFAF]
                        "
                      >
                        {role.whatYoullDo.map((item, index) => (
                          <li
                            key={index}
                            className="
                              w-full
                              min-h-[23px]
                              font-['DM_Sans']
                              font-normal
                              text-[14px]
                              leading-[23px]
                              text-[#4A4A4A]
                              pr-0
                              break-words

                              max-[600px]:min-h-0
                              max-[600px]:leading-[23px]
                            "
                          >
                            <span className="inline">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* =================================================
                        WHAT WE'RE LOOKING FOR
                    ================================================= */}
                    <div className="w-full mt-[25px]">
                      <h4
                        className="
                          m-0
                          font-['DM_Sans']
                          font-semibold
                          text-[16px]
                          leading-[23px]
                          text-[#1A1A1A]
                        "
                      >
                        What we’re looking for
                      </h4>

                      <ul
                        className="
                          m-0
                          mt-[2px]
                          p-0
                          pl-[17px]
                          list-disc
                          marker:text-[#AFAFAF]
                        "
                      >
                        {role.lookingFor.map((item, index) => (
                          <li
                            key={index}
                            className="
                              w-full
                              min-h-[23px]
                              font-['DM_Sans']
                              font-normal
                              text-[14px]
                              leading-[23px]
                              text-[#4A4A4A]
                              break-words

                              max-[600px]:min-h-0
                              max-[600px]:leading-[23px]
                            "
                          >
                            <span className="inline">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* =================================================
                        NICE TO HAVE
                    ================================================= */}
                    <div className="w-full mt-[25px]">
                      <h4
                        className="
                          m-0
                          font-['DM_Sans']
                          font-semibold
                          text-[16px]
                          leading-[23px]
                          text-[#1A1A1A]
                        "
                      >
                        Nice to have
                      </h4>

                      <ul
                        className="
                          m-0
                          mt-[2px]
                          p-0
                          pl-[17px]
                          list-disc
                          marker:text-[#AFAFAF]
                        "
                      >
                        {role.niceToHave.map((item, index) => (
                          <li
                            key={index}
                            className="
                              w-full
                              min-h-[23px]
                              font-['DM_Sans']
                              font-normal
                              text-[14px]
                              leading-[23px]
                              text-[#4A4A4A]
                              break-words

                              max-[600px]:min-h-0
                              max-[600px]:leading-[23px]
                            "
                          >
                            <span className="inline">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* =================================================
                        APPLY BUTTON
                    ================================================= */}
                    <div
                      className="
                        w-full
                        flex
                        items-center
                        gap-[12px]
                        mt-[30px]

                        max-[600px]:items-start
                        max-[600px]:flex-wrap
                        max-[600px]:gap-[10px]
                        max-[600px]:mt-[28px]
                      "
                    >
                      <button
                        type="button"
                        className="
                          h-[40px]
                          px-[18px]
                          rounded-full
                          border
                          border-[#D1D1D1]
                          bg-white

                          flex
                          items-center
                          justify-center
                          gap-[16px]

                          font-['DM_Sans']
                          font-normal
                          text-[14px]
                          leading-[20px]
                          text-[#1A1A1A]

                          cursor-pointer
                          whitespace-nowrap
                          shrink-0

                          max-[600px]:h-[39px]
                          max-[600px]:px-[16px]
                          max-[600px]:gap-[14px]
                        "
                      >
                        {role.button}

                        <svg
                          width="7"
                          height="12"
                          viewBox="0 0 7 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L5.5 6L1 11"
                            stroke="#1A1A1A"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <p
                        className="
                          m-0
                          font-['DM_Sans']
                          font-normal
                          text-[13px]
                          leading-[20px]
                          text-[#4A4A4A]

                          max-[600px]:text-[12px]
                          max-[600px]:leading-[19px]
                        "
                      >
                        {role.note}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* =========================================================
            DON'T SEE YOUR ROLE
        ========================================================= */}
        <section
          className="
            w-full
            max-w-[1280px]
            min-h-[345px]
            mx-auto

            mt-[110px]
            mb-[95px]

            rounded-[16px]
            bg-[#E47317]

            flex
            flex-col
            items-center
            justify-center
            text-center

            px-[30px]

            max-[900px]:mt-[90px]
            max-[900px]:mb-[75px]
            max-[900px]:min-h-[310px]

            max-[600px]:mt-[70px]
            max-[600px]:mb-[60px]
            max-[600px]:min-h-[300px]
            max-[600px]:rounded-[14px]
            max-[600px]:px-[24px]
          "
        >
          <h2
            className="
              m-0
              w-full
              max-w-[864px]

              font-['DM_Sans']
              font-bold
              text-[48px]
              leading-[46px]
              text-[#FFFFFF]

              max-[900px]:text-[40px]
              max-[900px]:leading-[44px]

              max-[600px]:text-[32px]
              max-[600px]:leading-[38px]
            "
          >
            Don&apos;t see your role?
          </h2>

          <p
            className="
              m-0
              mt-[8px]
              w-full
              max-w-[864px]

              font-['DM_Sans']
              font-normal
              text-[18px]
              leading-[25px]
              text-[#FFFFFF]

              max-[900px]:text-[16px]
              max-[900px]:leading-[23px]

              max-[600px]:text-[14px]
              max-[600px]:leading-[21px]
            "
          >
            Send us your work, even if there isn’t an open role that fits. If
            your work catches our eye, we’ll make room for the right talent.
          </p>

         <a
  href="mailto:contact@thecopperstudio.com"
  className="
    mt-[22px]

    inline-flex
    h-[40px]
    items-center
    justify-center
    px-[22px]

    rounded-full
    border-0

    bg-[#FFFFFF]
    text-[#1A1A1A]

    font-['DM_Sans']
    font-semibold
    text-[13px]
    leading-[20px]

    shadow-[0px_4px_8px_rgba(0,0,0,0.18)]

    cursor-pointer
    no-underline

    max-[600px]:mt-[20px]
    max-[600px]:h-[38px]
    max-[600px]:px-[20px]
  "
>
  Send Your Work
</a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default JoinCopper;