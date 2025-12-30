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
      className="px-4 py-16 sm:px-8 lg:px-20 space-y-16"
      {...fadeInUp}
    > 
      <div className="text-center space-y-3" {...fadeInUp}>
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold
             bg-gradient-to-r from-yellow-500 via-rose-500 to-purple-600
             bg-clip-text text-transparent"
          {...fadeInUp}
        >
          WORKSHOPS I CONDUCT
        </motion.h1>

        <motion.p className="text-gray-500 text-sm sm:text-base" {...fadeInUp}>
          Creative learning experiences through storytelling & performance
        </motion.p>
      </div>

      {/* Workshop Images */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        {...fadeInUp}
      >
        {[
          {
            src: "/hasyaras.png",
            title: "Hasyaras",
            bg: "#60b010",
            href: "https://mentoons.com/mentoons-workshops?category=Hasyaras",
          },
          {
            src: "/kalakrithi.png",
            title: "Kalakrithi",
            bg: "#D4AF37",
            href: "https://mentoons.com/mentoons-workshops?category=KalaKriti",
          },
          {
            src: "/instantkatha.png",
            title: "Instant Katha",
            bg: "#6aa4e8",
            href: "https://mentoons.com/mentoons-workshops?category=Instant%20Katha",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bg }}
            className="rounded-2xl p-6 flex flex-col items-center justify-center
                 hover:shadow-xl transition-all duration-300"
          >
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={item.src}
                alt={item.title}
                className="w-full h-40 object-contain"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false, amount: 0.2 }}
              />
            </a>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto"
        {...fadeInUp}
      >
        <motion.div
          className="border rounded-2xl p-8 space-y-4 text-center hover:shadow-lg transition-shadow bg-[#5bc7d0]"
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

        {/* Online */}
        <motion.div
          className="border rounded-2xl p-8 space-y-5 text-center hover:shadow-lg transition-shadow bg-[#5bc7d0]"
          {...fadeInUp}
        >
          <motion.h3 className="text-2xl sm:text-3xl font-bold" {...fadeInUp}>
            ONLINE
          </motion.h3>

          <motion.p className="text-gray-600 font-medium" {...fadeInUp}>
            Live & Recorded Batches Open
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
      </motion.div>
    </motion.section>
  );
};

export default Workshops;
