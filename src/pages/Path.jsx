import { motion } from "framer-motion";
import { ThreeBarsBig, ThreeBarSmall, WireframeBox } from "../components/path/ThreeBars";
import { ListHeader } from "../components/path/ListHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const BrandMentorshipSection = () => {
  return (
    <motion.section
      className="bg-[#FFFDE7]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div>
        {/* Section 01: Brands I Have Created */}
        <motion.div className="flex justify-between" variants={fadeInUp}>
          {/* Left Content */}
          <motion.div
            className="basis-2/3 space-y-8 ml-24 mt-10"
            variants={staggerContainer}
          >
            <motion.div className="ml-10" variants={fadeInUp}>
              <h2 className="text-7xl text-[#FF7438] font-bold press-start">
                01
              </h2>
              <h1 className="text-5xl font-bold text-gray-900">
                Brands I Have Created
              </h1>
              <p className="text-2xl mt-3">
                Ideas To Impact — Mentorship, Ventures, And Talent Strategy
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 mt-10 space-y-16"
              variants={staggerContainer}
            >
              <motion.div className="max-w-[420px]" variants={fadeInUp}>
                <ListHeader bg={"#EB2682"}/>
                <div className="border-2 bg-white p-5 shadow-lg space-y-7 ">
                  <h3 className="font-bold text-3xl w-[80%]">
                    CXO BRANDING Creating CXO Stories
                  </h3>
                  <p className=" font-semibold mt-2 leading-relaxed">
                    I decided to bridge that gap through my Venture CXO
                    branding. Here my team and I collectively help these
                    interviewees ace these interviews by designing and writing
                    concise and competency based Cover letters, resumes and
                    Video introductions. We also help them build a personal
                    brand on LinkedIn as an additional asset that can help them
                    get the best industry opportunities.
                  </p>
                </div>
              </motion.div>

              <motion.div className="max-w-[400px] mt-16" variants={fadeInUp}>
                  <ListHeader bg={"#78B8F1"}/>
                <div className="border-2 bg-white p-5 shadow-lg space-y-7 pb-10">
                  <h3 className="font-bold text-3xl">
                    Propelling <br /> Stories
                  </h3>
                  <p className="font-semibold mt-2 leading-relaxed">
                    For the 20+ Youngsters, I conceptualised 'Propelling
                    Stories', where we help individuals to revamp their personal
                    / digital presence through websites and social media
                    strategies. We harness the impeccable power of story-telling
                    and illustrations to capture the ever declining attention
                    spans and evoke powerful emotions.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="basis-1/3 flex justify-end items-end"
            variants={fadeInUp}
          >
            <img
              src="first_sales.png"
              alt="Mahesh with suitcase"
              className="w-full max-w-md object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Section 02: Who I Mentor */}
        <motion.div className="flex" variants={fadeInUp}>
          {/* Left Image */}
          <motion.div
            className="basis-1/3 flex items-start -ml-2 mt-3"
            variants={fadeInUp}
          >
            <img
              src="hire.png"
              alt="Mentorship Crowd"
              className="w-full max-w-md object-contain"
            />
          </motion.div>

          <motion.div
            className="basis-2/3 space-y-8 ml-10"
            variants={staggerContainer}
          >
            <motion.div className="ml-10" variants={fadeInUp}>
              <h2 className="text-7xl text-[#FF7438] font-bold press-start">
                02
              </h2>
              <h1 className="text-5xl font-bold text-gray-900">
                LIFE — “Who I Mentor?”
              </h1>
              <p className="text-2xl mt-3">
                Mentoring for Kids, Career Mentoring for Students, Freshers &
                Confused Professionals
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 mt-10 space-y-16"
              variants={staggerContainer}
            >
              <motion.div className="max-w-[420px]" variants={fadeInUp}>
                  <ListHeader bg={"#EB2682"}/>
                <div className="border-2 bg-white p-5 shadow-lg space-y-7 ">
                  <h3 className="font-bold text-3xl w-[80%]">MENTOONS</h3>
                  <p className=" font-semibold mt-2 leading-relaxed">
                    After keenly observing modern technology and social media, I
                    noticed the extent of their detrimental effects on our
                    well-being. Seeing children and teenagers addicted to
                    technology disheartens me.
                    <br /> Thus I began Mentoons. Psychology and cartoon based
                    platform that helps people lead healthy, tech-enabled and
                    not tech dependent lives. We also mentor young professionals
                    seeking career guidance.
                  </p>
                </div>
              </motion.div>

              <motion.div className="max-w-[400px] mt-16" variants={fadeInUp}>
                 <ListHeader bg={"#78B8F1"}/>
                <div className="border-2 bg-white p-5 shadow-lg space-y-7 pb-10">
                  <h3 className="font-bold text-3xl">
                    Mentoons <br />
                    Mythos
                  </h3>
                  <p className="font-semibold mt-2 leading-relaxed">
                    A combination of of PSYCHOLOGY + VEDIC ASTROLOGY Mythos
                    isn’t just about reports; it’s a thriving community of
                    individuals seeking purpose, clarity, and cosmic guidance.
                    Whether you’re exploring astrology, psychology, or career
                    growth, our groups help you connect with like-minded people
                    who share your journey.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BrandMentorshipSection;
