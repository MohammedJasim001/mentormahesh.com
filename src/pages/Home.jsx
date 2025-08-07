import { Link } from "react-router-dom"
import HomeTop from "../components/home/HomeTop"
import Nav from "../components/Nav"
import Youtube from "../components/home/Youtube"

const Home = () => {
  return (
    <div>
      <HomeTop/>
      <Nav/>
      <Youtube/>
    </div>
    
  )
}

export default Home