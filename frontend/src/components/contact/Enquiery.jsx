import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s\-().]{7,20}$/; // accepts +91 9876543210 or 9876543210

const Enquiry = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // clear that field's error as the user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName.trim()) {
      errors.firstName = "First name is required.";
    } else if (values.firstName.trim().length < 2) {
      errors.firstName = "First name must be at least 2 characters.";
    }

    if (!values.lastName.trim()) {
      errors.lastName = "Last name is required.";
    } else if (values.lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters.";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!values.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!PHONE_REGEX.test(values.phone.trim())) {
      errors.phone = "Enter a valid phone number.";
    }

    if (!values.message.trim()) {
      errors.message = "Message is required.";
    } else if (values.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    } else if (values.message.trim().length > 2000) {
      errors.message = "Message must be under 2000 characters.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const errors = validate(form);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setErrorMsg("Please fix the highlighted fields.");
      return;
    }

    if (status === "loading") return;
    setStatus("loading");

    try {
      const apiBase = import.meta.env.VITE_API_URL || "https://thecopperstudio.com";
      const res = await fetch(`${apiBase}/api/contact-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });

      let data = {};
      try { data = await res.json(); } catch (_) {}

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed.");
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setFieldErrors({});
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
          <div className="flex w-full gap-4">

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
                className={`
                  h-[48px] w-full rounded-xl border
                  bg-white px-4 text-sm text-black outline-none
                  placeholder:text-black/30
                  ${fieldErrors.firstName ? "border-red-400 focus:border-red-400" : "border-black/10 focus:border-black/30"}
                `}
              />
              {fieldErrors.firstName && (
                <p className="mt-1 text-xs text-red-500 font-['DM_Sans']">{fieldErrors.firstName}</p>
              )}
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
                className={`
                  h-[48px] w-full rounded-xl border
                  bg-white px-4 text-sm text-black outline-none
                  placeholder:text-black/30
                  ${fieldErrors.lastName ? "border-red-400 focus:border-red-400" : "border-black/10 focus:border-black/30"}
                `}
              />
              {fieldErrors.lastName && (
                <p className="mt-1 text-xs text-red-500 font-['DM_Sans']">{fieldErrors.lastName}</p>
              )}
            </div>

          </div>

          {/* EMAIL */}
          <div className="mt-5 w-full">
            <label className="mb-3 block text-sm font-medium font-['DM_Sans'] text-black">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`
                h-[48px] w-full rounded-xl border
                bg-white px-4 text-sm text-black outline-none
                placeholder:text-black/30
                ${fieldErrors.email ? "border-red-400 focus:border-red-400" : "border-black/10 focus:border-black/30"}
              `}
            />
            {fieldErrors.email && (
              <p className="mt-1 text-xs text-red-500 font-['DM_Sans']">{fieldErrors.email}</p>
            )}
          </div>

          {/* PHONE NUMBER */}
          <div className="mt-5 w-full">
            <label className="mb-3 block text-sm font-medium font-['DM_Sans'] text-black">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`
                h-[48px] w-full rounded-xl border
                bg-white px-4 text-sm text-black outline-none
                placeholder:text-black/30
                ${fieldErrors.phone ? "border-red-400 focus:border-red-400" : "border-black/10 focus:border-black/30"}
              `}
            />
            {fieldErrors.phone && (
              <p className="mt-1 text-xs text-red-500 font-['DM_Sans']">{fieldErrors.phone}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="mt-5 w-full">
            <label className="mb-3 block text-sm font-medium text-black font-['DM_Sans']">
              Write a Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className={`
                h-[165px] w-full resize-none rounded-xl border
                bg-white px-4 py-4 text-sm leading-6 text-black outline-none
                placeholder:text-black/30
                ${fieldErrors.message ? "border-red-400 focus:border-red-400" : "border-black/10 focus:border-black/30"}
              `}
            />
            {fieldErrors.message && (
              <p className="mt-1 text-xs text-red-500 font-['DM_Sans']">{fieldErrors.message}</p>
            )}
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