
const Conversation = () => {
  return (
    <div
      className="
        -mt-8
        -ml-30
        flex
        h-[405.5px]
        w-full
        max-w-[495px]
        flex-col
        sm:-mt-10
        max-[1023px]:ml-0
        max-[1023px]:mt-0
        max-[1023px]:h-auto
      "
    >

      {/* =====================================
          HEADING — 495 × 140
      ====================================== */}

      <div
        className="
          flex
          h-[140px]
          w-full
          items-start
          max-[1023px]:h-auto
          max-[1023px]:pb-4
        "
      >
        <h2
          className="
            font-['DM_Sans']
            text-4xl
            font-semibold
            leading-[1]
            tracking-tight
            text-black
            sm:text-5xl
            md:text-6xl
          "
        >
          Let's start A conversation.
        </h2>
      </div>


      {/* =====================================
          PARAGRAPH — 443 × 44
      ====================================== */}

      <div
        className="
          mt-2
          h-[44px]
          w-full
          max-w-[443px]
          max-[1023px]:h-auto
        "
      >
        <p
          className="
            text-sm
            leading-6
            text-black/50
            sm:text-base
            font-['DM_Sans']
          "
        >
          Have a project in mind? Tell us what you're looking to build, and let's explore how Copper Studio can help bring it to life.
        </p>
      </div>


      {/* =====================================
          CONTACT INFORMATION
      ====================================== */}

      <div className="mt-7 flex flex-col gap-5">

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-black/5">
            <img src="/contactus/mail.png" alt="Email" className="h-5 w-5 object-contain" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-black font-['DM_Sans'] sm:text-base">Email</h3>
            <p className="mt-1 text-xs leading-5 font-['DM_Sans'] text-black/45 sm:text-sm">contact@thecopperstudio.com</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-4">
          <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-black/5">
            <img src="/contactus/wtsp.png" alt="WhatsApp" className="h-5 w-5 object-contain" />
          </div>
          <div>
            <h3 className="text-sm font-medium font-['DM_Sans'] text-black sm:text-base">Whatsapp Us</h3>
            <p className="mt-1 text-xs leading-5 font-['DM_Sans'] text-black/45 sm:text-sm">+91 9820933877</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-black/5">
            <img src="/contactus/phone.png" alt="Phone" className="h-5 w-5 object-contain" />
          </div>
          <div>
            <h3 className="text-sm font-medium font-['DM_Sans'] text-black sm:text-base">Phone Number</h3>
            <p className="mt-1 text-xs leading-5 font-['DM_Sans'] text-black/45 sm:text-sm">+91 9820933877</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Conversation;
