import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Life from "./pages/Life";
import Music from "./pages/Music";
import Youtube from "./components/home/Youtube";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Services from "./pages/Services";
import Work from "./pages/work";
// import AppRouter from "./routes";

function App() {
  return (
    <BrowserRouter>
      {/* <AppRouter /> */}
      <video
        className=" hidden lg:block w-full lg:h-screen object-cover "
        src="YOUTUBE_INTRO.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <Nav />
      <Home />
      <Youtube />
      <Work />
      <Life />
      <Music />
      <Services/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
