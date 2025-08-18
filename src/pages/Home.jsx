import HomeTop from "../components/home/HomeTop";
import Nav from "../components/Nav";
import Life from "./Life";
import Music from "./Music";
import Services from "./Services";
import Work from "./Works";

const Home = () => {
  return (
    <div className="">

      <video
        className=" hidden lg:block w-full lg:h-screen object-cover "
        src="YOUTUBE_INTRO.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
      />
      <Nav />
      <HomeTop />

      <video
        className="block lg:hidden mt-5 w-full lg:h-screen object-cover "
        src="YOUTUBE_INTRO.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
      />

      <Work />
      <Life />
      <Music />
      <Services />
    </div>
  );
};

export default Home;
