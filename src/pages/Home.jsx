import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Workshops from "./Workshops";
import Lifestyle from "./Lifestyle";
import Creations from "./Creations";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mentormahesh/",
    icon: FaInstagram,
  },
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
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen  flex items-center px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center p-10"
          >
            <img
              src="image.png"
              alt="Mahesh"
              className="w-full max-w-md lg:max-w-xl object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-center lg:text-left"
          >
            <div>
              <h3 className="text-3xl font-bold text-[#FF7438] mb-">Hello !</h3>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#FF7438] leading-tight">
                I'm Mahesh
              </h1>

              <h2 className="mt-3 text-3xl font-bold text-gray-800">
                Career Mentor &
                <br />
                Executive Search Expert
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-8 max-w-xl font-semibold">
              A career mentor, executive search expert, founder of
              transformative communities like Propelling Stories, Story Club,
              Mentoons and Mentoons Mythos.
            </p>

            <p className="text-lg text-gray-700 leading-8 max-w-xl font-semibold">
              With over 11 years in corporate talent recruitment and 10 years in
              executive search, helping professionals and organizations grow.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-5 pt-4">
              <p className="font-semibold text-lg">Follow me</p>

              <div className="flex items-center gap-2">
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
          </motion.div>
        </div>
      </section>
      <Workshops />
      <Lifestyle />
      <Creations />
      <Footer />
    </div>
  );
};

export default Home;
