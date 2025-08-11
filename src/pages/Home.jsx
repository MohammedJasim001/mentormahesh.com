import { Link } from "react-router-dom"
import HomeTop from "../components/home/HomeTop"
import Nav from "../components/Nav"
import Youtube from "../components/home/Youtube"

const Home = () => {
  return (
    <div className="">
      <HomeTop/>
      <Nav/>
      <video
        className=" block lg:hidden mt-5 w-full lg:h-screen object-cover "
        src="YOUTUBE_INTRO.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <Youtube/>
    </div>
    
  )
}

export default Home