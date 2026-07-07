const experience = [
  {
    year: "1994 - 1998",
    company: "RPG Recolt",
    title: "Sales",
    description:
      "Business-to-business sales and client relationship management.",
  },
  {
    year: "1998 - 2007",
    company: "Correkt Consortium",
    title: "Executive",
    description:
      "Worked with Handsight and IMI Network on business development and strategic partnerships.",
  },
  {
    year: "2007 - 2015",
    company: "",
    title: "",
    description: "",
  },
  {
    year: "2015 - Present",
    company: "CXO Branding",
    title: "CEO & Founder",
    description:
      "Leading executive branding, leadership consulting, and career transformation initiatives.",
  },
  {
    year: "2020 - Present",
    company:
      "Mentoons • Mentoons Mythos • Active Listeners • Propelling Stories • UI/UX Club • Toonland",
    title: "CEO & Founder",
    description:
      "Building purpose-driven brands focused on storytelling, mentoring, education, creativity, and community development.",
  },
];

const TimeLine = () => {
  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#FF7438]" />

      {experience.map((item, index) => (
        <div
          key={index}
          className={`flex items-center mb-20 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`w-[45%] ${
              index % 2 === 0 ? "text-right pr-10" : "text-left pl-10"
            }`}
          >
            <p className="text-gray-500">{item.year}</p>

            <h3 className="text-2xl font-bold">{item.title}</h3>

            <h4 className="font-semibold text-[#FF7438]">{item.company}</h4>

            {item.description && (
              <p className="mt-3 text-gray-600">{item.description}</p>
            )}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#FF7438] bg-white" />
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
