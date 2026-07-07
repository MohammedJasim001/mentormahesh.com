import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BrandBar from "./components/BrandBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Contact from "./pages/Contact";
import Creations from "./pages/Creations";
import Groups from "./pages/Groups";
import Hobbies from "./pages/Hobbies";
import Home from "./pages/Home";
import Lifestyle from "./pages/Lifestyle";
import Music from "./pages/Music";
import Path from "./pages/Path";
import Stories from "./pages/Stories";
import Workshops from "./pages/Workshops";
import AppRouter from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <div className="bg-[#FFFDE7]">
        <Navbar />
        <Home />
        <Workshops />
        <Lifestyle />
        <Creations />
        <Footer />
        {/* <BrandBar /> */}
        {/* <Path />
      <Hobbies />
      <Groups />
      <Music /> */}
        {/* <Stories/> */}
        {/* <Contact/> */}
        {/* <About/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
