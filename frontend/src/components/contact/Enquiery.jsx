import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Enquiry = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { firstName, lastName, email, message } = form;

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}api/contact-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      let data = {};
      try { data = await res.json(); } catch (_) {}

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed.");
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="
        w-full
        max-w-[630px]
        translate-x-15
        -translate-y-15
        max-[1023px]:translate-x-0
        max-[1023px]:translate-y-0
        rounded-[2rem]
        bg-black/5
        p-8
        sm:p-10
      "
    >
      <div className="mx-auto w-full max-w-[566px]">

        {/* HEADER */}
        <div className="h-[144px] w-full max-[1023px]:h-auto max-[1023px]:mb-4">
          <h2
            className="
              font-['DM_Sans']
              text-3xl
              font-semibold
              leading-[1]
              tracking-tight
              text-black
              sm:text-4xl
              md:text-5xl
            "
          >
            Send an Enquiry
          </h2>
          <p
            className="
              mt-5
              max-w-[566px]
              text-sm
              leading-6
              text-black/50
              sm:text-base
              font-['DM_Sans']
            "
          >
            Tell us a little about your business and what you're looking to build. We'll get back to you to discuss the next steps.
          </p>
        </div>

        {/* FORM */}
        <form className="mt-8 w-full" onSubmit={handleSubmit} noValidate>

          {/* FIRST + LAST NAME */}
          <div className="flex h-[97px] w-full gap-4">

            <div className="flex h-full flex-1 flex-col">
              <label className="mb-3 text-sm font-medium text-black font-['DM_Sans']">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="
                  h-[48px] w-full rounded-xl border border-black/10
                  bg-white px-4 text-sm text-black outline-none
                  placeholder:text-black/30 focus:border-black/30
                "
              />
            </div>

            <div className="flex h-full flex-1 flex-col">
              <label className="mb-3 text-sm font-medium font-['DM_Sans'] text-black">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="
                  h-[48px] w-full rounded-xl border border-black/10
                  bg-white px-4 text-sm text-black outline-none
                  placeholder:text-black/30 focus:border-black/30
                "
              />
            </div>

          </div>

          {/* EMAIL */}
          <div className="mt-5 h-[121px] w-full">
            <label className="mb-3 block text-sm font-medium font-['DM_Sans'] text-black">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="
                h-[48px] w-full rounded-xl border border-black/10
                bg-white px-4 text-sm text-black outline-none
                placeholder:text-black/30 focus:border-black/30
              "
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-2 h-[205px] w-full">
            <label className="mb-3 block text-sm font-medium text-black font-['DM_Sans']">
              Write a Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="
                h-[165px] w-full resize-none rounded-xl border border-black/10
                bg-white px-4 py-4 text-sm leading-6 text-black outline-none
                placeholder:text-black/30 focus:border-black/30
              "
            />
          </div>

          {/* ERROR MESSAGE */}
          {errorMsg && (
            <p className="mt-2 text-sm text-red-500 font-['DM_Sans']">{errorMsg}</p>
          )}

          {/* SUCCESS MESSAGE */}
          {status === "success" && (
            <p className="mt-2 text-sm text-green-600 font-['DM_Sans']">
              Message sent successfully. We'll be in touch soon.
            </p>
          )}

          {/* SUBMIT */}
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            className="
              mt-5
              flex
              h-[64px]
              w-full
              items-center
              justify-between
              rounded-full
              bg-black
              px-6
              text-sm
              font-medium
              text-white
              transition-colors
              duration-300
              hover:bg-orange-500
              font-['DM_Sans']
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            <span>
              {status === "loading" ? "Sending..." : "Submit Message"}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <FiArrowUpRight size={19} strokeWidth={2} />
            </span>
          </motion.button>

        </form>
      </div>
    </div>
  );
};

export default Enquiry;
