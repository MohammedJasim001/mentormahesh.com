import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Lifestyle = () => {
  return (
    <motion.section
      id="lifestyle"
      className="px-4 py-16 sm:px-8 lg:px-20 space-y-8 md:space-y-16 "
      {...fadeInUp}
    >
      <div className="text-center px-5 mb-16">
        <motion.h2
          className="text-4xl md:text-5xl  font-extrabold "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MY <span className="text-[#FF7438]">LIFESTYLE</span>
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="hidden sm:block w-10 h-[2px] bg-[#FF7438]" />
          <p className="uppercase tracking-wider text-sm md:text-base  font-imprima">
            Where passion, purpose, and everyday moments come together.
          </p>
          <span className="hidden sm:block w-10 h-[2px] bg-[#FF7438]" />
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        {...fadeInUp}
      >
        {[
          {
            src: "/work.png",
            title: "Work",
            bg: "#60b010",
            href: "/work",
            description:
              "Discover the joy of humor through storytelling, improvisation, and interactive performances.",
          },
          {
            src: "/life.png",
            title: "Life",
            bg: "#D4AF37",
            href: "/life",
            description:
              "A creative art workshop that nurtures imagination through drawing, painting, and hands-on activities.",
          },
          {
            src: "/music.png",
            title: "Music",
            bg: "#6aa4e8",
            href: "/music",
            description:
              "Learn storytelling techniques and build confidence through engaging narrative exercises.",
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
                Know More
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Lifestyle;
