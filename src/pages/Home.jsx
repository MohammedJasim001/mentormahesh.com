import HomeTop from "../components/home/HomeTop";
import Nav from "../components/Nav";
import Life from "./Life";
import Music from "./Music";
import Services from "./Services";
import Work from "./Works";
import Workshops from "./Workshops";

const Home = () => {
  return (
    <div className="">
      <video
        className=" hidden lg:block w-full lg:h-screen object-cover "
        src="YOUTUBE_INTRO2.mp4"
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
        src="YOUTUBE_INTRO2.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
      />
      <Workshops />
      <Work />
      <Life />
      <Music />
      <Services />
    </div>
  );
};

export default Home;
