import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const creations = [
  {
    src: "/mentoons.png",
    title: "Mentoons",
    bg: "#FFE6DA",
    href: "https://mentoons.com/",
    description:
      " We're on a mission to help children and families rediscover balance—between digital play and real-life values.",
  },
  {
    src: "/mythos.png",
    title: "Mentoons Mythos",
    bg: "#F3E8FF",
    href: "https://mentoonsmythos.com/",
    description:
      "Mentoons Mythos is an initiative that explores the connection between mythology, human psychology, and storytelling.",
  },
  {
    src: "/cxo.png",
    title: "CXO Branding",
    bg: "#FEF3C7",
    href: "https://cxobranding.com/",
    description:
      "Empowering leaders through executive coaching and transformational leadership programs.",
  },
  {
    src: "/al.png",
    title: "Active Listeners",
    bg: "#DCFCE7",
    href: "https://www.activelisteners.in/",
    description:
      "From music and art therapy to engaging games and comics, we create safe, fun, and supportive environments to foster communication, understanding, and healing.",
  },
  {
    src: "/toonland.png",
    title: "Toonland",
    bg: "#DBEAFE",
    href: "https://toonland.in/",
    description:
      "Toonland is a land of mentoons characters, where children can explore stories, games, and activities that spark their imagination and creativity.",
  },
  {
    src: "/ps.png",
    title: "Propelling Stories",
    bg: "#FCE7F3",
    href: "https://www.propellingstories.com/",
    description:
      "Helping individuals and organizations communicate ideas through impactful storytelling.",
  },
];

const Creations = () => {
  return (
    <section id="creations" className="py-16 px-6 lg:px-20 ">
      {/* Header */}
      <div className="text-center px-5 mb-16">
        <motion.h2
          className="text-4xl md:text-5xl  font-extrabold "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MY <span className="text-[#FF7438]">CREATIONS</span>
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="hidden sm:block w-10 h-[2px] bg-[#FF7438]" />
          <p className="uppercase tracking-wider text-sm md:text-base  font-imprima">
            Turning ideas into meaningful brands.
          </p>
          <span className="hidden sm:block w-10 h-[2px] bg-[#FF7438]" />
        </motion.div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {creations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className="group rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Logo Section */}
            <div
              className="h-56 flex items-center justify-center"
              style={{ background: item.bg }}
            >
              <motion.img
                whileHover={{
                  scale: 1.08,
                  rotate: -2,
                }}
                transition={{
                  duration: 0.3,
                }}
                src={item.src}
                alt={item.title}
                className="h-28 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-8 ">
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>

              <p className="mt-4 text-gray-600 leading-7">{item.description}</p>

              <a
                href={item.href}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#FF7438] transition-all duration-300 group-hover:gap-4"
              >
                Learn More
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Creations;
