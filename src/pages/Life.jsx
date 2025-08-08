import BackButton from "../components/BackButton";
import Hobbies from "../components/life/Hobbies";

const Life = () => {
  return (
    <div className="">
      <BackButton />

      <div className="lg:flex justify-betweenj mt-5">
        <div className="">
          <img src="life.png" alt="" className="" />
          <p className="text-3xl px-2 sm:pl-20 sm:px-16 sm:text-center font-imprima">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img src="lifeimage.png" alt="" className="w-[700px]" />
      </div>
      <div className="sm:px-20 px-2 sm:-mt-20 space-y-5 sm:space-y-10">
        <Hobbies/>
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
