import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Workshops = () => {
  return (
    <motion.section
      id="workshops"
      className="px-4 py-16 sm:px-8 lg:px-20 space-y-8 md:space-y-16 "
      {...fadeInUp}
    >
      <div>
        {/* <div className="relative  flex items-center justify-center py-10  overflow-hidden">
          <motion.h1
            className="absolute text-[50px] md:text-[90px] lg:text-[120px] font-extrabold uppercase text-black/10 whitespace-nowrap select-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            WORKSHOPS
          </motion.h1>

          <motion.h2
            className="relative z-10 text-2xl md:text-4xl lg:text-6xl font-extrabold text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            WORKSHOPS <span className="text-[#FF7438]">I CONDUCT</span>
          </motion.h2>
        </div> */}

        <div className="text-center px-5 mb-16">
          <motion.h2
            className="text-4xl md:text-5xl  font-extrabold "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            MY <span className="text-[#FF7438]">WORKSHOPS</span>
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-4 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="hidden sm:block w-10 h-[2px] bg-[#FF7438]" />
            <p className="uppercase tracking-wider text-sm md:text-base  font-imprima">
              Creative learning experiences through storytelling & performance.
            </p>
            <span className="hidden sm:block w-10 h-[2px] bg-[#FF7438]" />
          </motion.div>
        </div>
      </div>

      {/* Workshop Images */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        {...fadeInUp}
      >
        {[
          {
            src: "/hasyaras.png",
            title: "Hasyaras",
            bg: "#60b010",
            href: "https://mentoons.com/mentoons-workshops?category=Hasyaras",
            description:
              "Discover the joy of humor through storytelling, improvisation, and interactive performances.",
          },
          {
            src: "/kalakrithi.png",
            title: "Kalakrithi",
            bg: "#D4AF37",
            href: "https://mentoons.com/mentoons-workshops?category=KalaKriti",
            description:
              "A creative art workshop that nurtures imagination through drawing, painting, and hands-on activities.",
          },
          {
            src: "/instantkatha.png",
            title: "Instant Katha",
            bg: "#6aa4e8",
            href: "https://mentoons.com/mentoons-workshops?category=Instant%20Katha",
            description:
              "Learn storytelling techniques and build confidence through engaging narrative exercises.",
          },
          {
            src: "/swar.png",
            title: "Swar",
            bg: "#ef6c57",
            href: "https://mentoons.com/mentoons-workshops?category=Swar",
            description:
              "Experience the beauty of music, rhythm, and expression through fun and interactive sessions.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            style={{ backgroundColor: item.bg }}
            className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="bg-gray-100 p-4">
              <motion.img
                src={item.src}
                alt={item.title}
                className="w-full h-44 object-contain"
                whileHover={{ scale: 1.08 }}
              />
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

                <p className="text-sm leading-7 opacity-95">
                  {item.description}
                </p>
              </div>

              <a
                href={item.href}
                target="_self"
                rel="noopener noreferrer"
                className="mt-6 inline-flex justify-center items-center bg-white text-gray-900 font-semibold px-5 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Book Now →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* <motion.div
        className="grid grid-cols-2 gap-5 md:gap-20 max-w-5xl mx-auto"
        {...fadeInUp}
      >
        <motion.div
          className="border rounded-2xl p-3 md:p-8 space-y-4 text-center hover:shadow-lg transition-shadow bg-[#5bc7d0]"
          {...fadeInUp}
        >
          <motion.h3 className="text-2xl sm:text-3xl font-bold" {...fadeInUp}>
            OFFLINE
          </motion.h3>

          <motion.div
            className="space-y-1 text-gray-600 font-medium"
            {...fadeInUp}
          >
            <p>BANGALORE</p>
            <p>DELHI</p>
            <p>KERALA</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="border rounded-2xl p-3 md:p-8 space-y-5 text-center hover:shadow-lg transition-shadow bg-[#5bc7d0]"
          {...fadeInUp}
        >
          <motion.h3 className="text-2xl sm:text-3xl font-bold" {...fadeInUp}>
            ONLINE
          </motion.h3>

          <motion.p className="text-gray-600 font-medium" {...fadeInUp}>
            Batches Open
          </motion.p>

          <motion.a
            href="https://mentoons.com/mentoons-workshops"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold px-6 py-2 rounded-lg"
            {...fadeInUp}
          >
            Book Now
          </motion.a>
        </motion.div>
      </motion.div> */}
    </motion.section>
  );
};

export default Workshops;
