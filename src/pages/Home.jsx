import HomeTop from "../components/home/HomeTop"


const Home = () => {
  return (
    <div className="">
      
      <HomeTop/>
      <video
        className=" block lg:hidden mt-5 w-full lg:h-screen object-cover "
        src="YOUTUBE_INTRO.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* <Youtube/> */}
    </div>
    
  )
}

export default Home