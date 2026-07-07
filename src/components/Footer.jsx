import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoCall, IoSend } from "react-icons/io5";
import { MdLocationOn, MdOutlineMailOutline, MdPerson } from "react-icons/md";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { toast } from "sonner";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const MotionText = ({ children, className, variant = fadeInUp }) => (
  <motion.div className={className} {...variant}>
    {children}
  </motion.div>
);

// Contact list — label, icon, value, href
const contactRows = [
  {
    label: "Phone",
    value: "+91 9036033300",
    href: "tel:+919036033300",
    icon: IoCall,
  },
  {
    label: "Email",
    value: "mahesh@mentoons.com",
    href: "mailto:mahesh@mentoons.com",
    icon: MdOutlineMailOutline,
  },

  {
    label: "Location",
    value: "Bengaluru, India",
    href: null,
    icon: MdLocationOn,
  },
];

// Circular icon row at the bottom of the left column
const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mentormahesh/",
    icon: FaInstagram,
  },
  { name: "WhatsApp", href: "https://wa.me/9036033300", icon: FaWhatsapp },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mentor.mahesh",
    icon: FaFacebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/metalmahesh/",
    icon: FaLinkedin,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/@maheshmentor5946/featured",
    icon: FaYoutube,
  },
];

const Footer = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_bypx0hd",
        "template_bs12qns",
        form.current,
        "xl785f1tuKrt5Pac3",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong: " + error.text);
        },
      )
      .finally(() => setSending(false));
  };

  return (
    <motion.div className="pt-20 pb-16 px-6 lg:px-24 " id="contact">
      {/* Heading */}
      <div className="text-center px-5 mb-16">
        <motion.h2
          className="text-4xl md:text-5xl  font-extrabold "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GET IN <span className="text-[#FF7438]">TOUCH</span>
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="hidden sm:block w-10 h-[2px] bg-[#FF7438]" />
          <p className="uppercase tracking-wider text-sm md:text-base  font-imprima">
            I&apos;m always open to discussing mentoring, workshops or
            partnerships.
          </p>
          <span className="hidden sm:block w-10 h-[2px] bg-[#FF7438]" />
        </motion.div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 px-6 lg:px-16">
        {/* LEFT COLUMN */}
        <MotionText variant={fadeInLeft} className="space-y-6 col-span-1">
          <div className="space-y-3 font-imprima">
            {contactRows.map(({ label, value, href, icon }) => {
              const Icon = icon;
              return (
                <div key={label} className="space-y-2">
                  <p className="text-gray-800 text-sm">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-3  hover:text-[#FF7438] transition-colors w-fit"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#FF7438] text-[#FF7438]">
                        <Icon className="text-sm" />
                      </span>
                      <span className="font-semibold text-sm">{value}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3  w-fit">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#FF7438] text-[#FF7438]">
                        <Icon className="text-sm" />
                      </span>
                      <span className="font-semibold text-sm">{value}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Social circles */}
          <div className="space-y-3">
            <p className="text-gray-800 text-sm font-imprima">
              Social Profiles
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ name, href, icon }) => {
                const Icon = icon;
                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-[#FF7438] text-[#FF7438] hover:bg-[#FF7438] hover:text-white transition-colors"
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>
        </MotionText>

        {/* RIGHT COLUMN — intro + form */}
        <div className="space-y-8 col-span-2">
          {/* <MotionText className="font-imprima  text-base leading-relaxed">
            If you have any suggestion, project, or just want to say hello —
            fill out the form below and I&apos;ll get back to you shortly.
          </MotionText> */}

          <motion.form
            className="space-y-5"
            ref={form}
            onSubmit={sendEmail}
            {...fadeInUp}
          >
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="relative flex-1">
                <MdPerson className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="YOUR NAME"
                  className="w-full bg-[#2a2a2a] text-gray-200 placeholder-gray-500 placeholder:text-sm placeholder:tracking-wide rounded-full pl-12 pr-5 py-4 border border-white/5 focus:outline-none focus:border-[#FF7438] transition-colors "
                />
              </div>
              <div className="relative flex-1">
                <MdOutlineMailOutline className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  id="from_name"
                  name="from_name"
                  type="email"
                  required
                  placeholder="YOUR EMAIL"
                  className="w-full bg-[#2a2a2a] text-gray-200 placeholder-gray-500 placeholder:text-sm placeholder:tracking-wide rounded-full pl-12 pr-5 py-4 border border-white/5 focus:outline-none focus:border-[#FF7438] transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <HiOutlineChatBubbleLeftRight className="absolute left-5 top-5 text-gray-400 text-lg" />
              <textarea
                id="message"
                name="message"
                placeholder="YOUR MESSAGE"
                rows={4}
                required
                className="w-full bg-[#2a2a2a] text-gray-200 placeholder-gray-500 placeholder:text-sm placeholder:tracking-wide rounded-3xl pl-12 pr-5 py-4 resize-none border border-white/5 focus:outline-none focus:border-[#FF7438] transition-colors"
              ></textarea>
              <input type="hidden" name="to_name" value="Mahesh" />
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              className="flex items-center gap-3 bg-[#FF7438] hover:bg-[#e9622a] text-black font-bold uppercase tracking-wide rounded-full px-8 py-4 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              whileTap={{ scale: 0.98 }}
            >
              <IoSend className="text-lg" />
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full flex justify-center items-center mt-16 pt-6 border-t border-black/10">
        <p className="text-sm  font-imprima">Copyright@2026</p>
      </div>
    </motion.div>
  );
};

export default Footer;
