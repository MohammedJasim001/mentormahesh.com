import BrandsCreated from "../components/work/BrandsCreated";

const Work = () => {
  return (
    <div className="sm:p-8 p-2  pt-12 " id="work">
      {/* <BackButton /> */}
      <div className="lg:flex lg: lg:space-x-10 ">
        <div className="lg:w-1/2 lg:space-y-6 ">
          <img src="work.png" alt="" className="w-96 " />
          <div className="space-y-6 lg:space-y-12 lg:px-10">
            <p className="text-lg font-bold sm:text-xl font-imprima max-w-xl">
              I began my career in sales. Leveraging my expertise in scouting
              talent, I then shifted to the dynamic industry of Recruiting.
              Having met over 40,000 candidates and hired hundreds of them, I
              learnt the recruitment industry in and out.
            </p>

            <img
            src="workimage.png"
            alt=""
            className="w-96 mx-auto block lg:hidden"
          />

            <p className="text-lg font-bold sm:text-xl font-imprima max-w-xl">
              Hiring for top management can be tricky. Those making the hiring
              decisions don't have ample time to go through an entire resume.
              Those applying, i.e. the ultra-accomplished corporate executives,
              do not know how to correctly leverage their experience and
              achievements.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 hidden lg:flex justify-center ">
          <img
            src="workimage.png"
            alt="work"
            className="w-full max-w-[800px] h-auto  object-contain"
          />
        </div>
      </div>

      <BrandsCreated />
    </div>
  );
};

export default Work;
