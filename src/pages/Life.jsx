import BackButton from "../components/BackButton";
import Hobbies from "../components/life/Hobbies";

const Life = () => {
  return (
    <div className="pt-10" id="life">
      {/* <BackButton /> */}

      <div className="lg:flex justify-around mt-5">
        <div className="">
          <img src="life.png" alt="" className="w-96" />
          <div className="space-y-5 lg:space-y-10 lg:pt-10  lg:w-3xl">
            <p className="text-lg sm:text-xl font-semibold px-2 sm:pl-20 sm:px-16  font-imprima">
              My life isn’t a straight line — it’s a collection of little
              adventures, quiet mornings, and unexpected turns. I find joy in
              the smell of fresh coffee, the sound of rain, and the thrill of
              discovering something new. These moments fuel my creativity and
              shape the way I see the world, influencing not just my work, but
              the way I live every day.
            </p>
            <p className="text-lg sm:text-xl font-semibold px-2 sm:pl-20 sm:px-16  font-imprima">
              I value building strong connections — with colleagues, clients,
              and communities. Outside of work, I spend time mentoring, engaging
              in cultural experiences, and exploring ideas that challenge the
              status quo. These moments keep my mind open and my approach to
              leadership grounded in empathy and understanding.
            </p>
          </div>
        </div>
        <img src="lifeimage.png" alt="" className="w-[600px]" />
      </div>
      <div className="sm:px-20 px-2 sm:-mt-20 space-y-5 sm:space-y-10">
        <Hobbies />
        {/* <h1 className="text-4xl sm:text-8xl font-pirplepurse ">
          35 facts about me
        </h1>
        <h1 className="text-3xl sm:text-6xl font-serif font-bold">HOBBIES </h1>
        <div className="flex justify-end">
          <p className="text-2xl font-imprima max-w-lg sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Life;
