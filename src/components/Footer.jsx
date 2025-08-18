import { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";
import Youtube from "../components/home/Youtube";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

const MotionText = ({ children, className, down = false }) => (
  <motion.div className={className} {...(down ? fadeInDown : fadeInUp)}>
    {children}
  </motion.div>
);

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bypx0hd",
        "template_bs12qns",
        form.current,
        "xl785f1tuKrt5Pac3"
      )
      .then(
        (result) => {
          console.log(result);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Something went wrong: " + error.text);
        }
      );
  };

  return (
    <motion.div className="pt-14" >
      <div className="lg:flex mt-10 lg:px-16 lg:space-x-20">
        <div className="lg:w-1/2 space-y-5 lg:px-10 px-5">
          {/* <MotionText className="font-imprima text-xl font-semibold">
            Whether you’re looking for a mentor, career counselling, resume and
            portfolio management, or just want to say hi and vibe on music— I’d
            love to hear from you.
          </MotionText> */}
          <MotionText className="font-imprima text-xl font-semibold">
            This isn’t just a contact section. It’s where new conversations
            begin, new ideas take shape, and sometimes, new paths open.
          </MotionText>
          <div className="flex items-center justify-center">
            <motion.img
            src="contact.png"
            alt=""
            className="w-[200px] sm:w-[280px]"
            {...fadeInUp}
          />
          </div>
        </div>
        <div className=" lg:w-1/2 px-4 lg:px-10 space-y-16">
          <form
            className=" space-y-5 flex flex-col justify-center w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <motion.div className="flex flex-col space-y-3" {...fadeInUp}>
              <label htmlFor="name" className="font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="border border-black rounded-lg p-3 focus:outline-none focus:border-[#FF7438] focus:ring-1 focus:ring-[#FF7438]"
              />
            </motion.div>

            <motion.div className="flex flex-col space-y-3" {...fadeInUp}>
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                id="from_name"
                name="from_name"
                type="email"
                required
                placeholder="Your Email"
                className="border border-black rounded-lg p-3 focus:outline-none focus:border-[#FF7438] focus:ring-1 focus:ring-[#FF7438]"
              />
            </motion.div>

            <motion.div className="flex flex-col space-y-3" {...fadeInUp}>
              <label htmlFor="message" className="font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="border border-black rounded-lg p-3 resize-none focus:outline-none focus:border-[#FF7438] focus:ring-1 focus:ring-[#FF7438]"
              ></textarea>
              <input type="hidden" name="to_name" value="Mahesh" />
            </motion.div>

            <motion.button
              type="submit"
              className="bg-[#FF7438] text-white font-semibold py-3 rounded-lg hover:bg-[#e15f2d] transition duration-300"
              {...fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Submit
            </motion.button>
          </form>
          <div className="space-y-3 font-imprima">
            <MotionText className="flex items-center space-x-2">
              <IoCall className="text-[#FF7438] text-2xl" />
              <p className="font-bold">+91 9036033300</p>
            </MotionText>
            <MotionText className="flex items-center space-x-2">
              <MdOutlineMailOutline className="text-[#FF7438] text-2xl" />
              <p className="font-bold">metalmahesh@gmail.com</p>
            </MotionText>
            <MotionText className="flex items-center space-x-2">
              <MdLocationOn className="text-[#FF7438] text-2xl" />
              <p className="font-bold">Bangaluru, India</p>
            </MotionText>
          </div>
        </div>
      </div>
        <Youtube />
      <div className="w-full flex justify-center mt-3 space-x-10 bg-white h-20 items-center">
        <hr className="border-t-4 border-[#8D8080] my-4 w-1/6" />
        <h1 className="text-lg text-[#FF7438] font-imprima ">Copyright@2025</h1>
        <div className="flex items-center justify-center text-3xl text-[#FF7438]  space-x-2">
          <a
            href="https://www.instagram.com/mentormahesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-[#fb4f06]" />
          </a>
          <a
            href="https://wa.me/9036033300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-[#fb4f06]" />
          </a>
          <a
            href="https://www.facebook.com/mentor.mahesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-[#fb4f06]" />
          </a>
          <a
            href="https://www.linkedin.com/in/metalmahesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-[#fb4f06]" />
          </a>
        </div>
        <hr className="border-t-4 border-[#8D8080] my-4 w-1/6" />
      </div>
    </motion.div>
  );
};

export default Footer;
