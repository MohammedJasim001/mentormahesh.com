import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Brands from "./components/work/Brands";
// import Facts from "./components/life/Facts";
// import Musicions from "./components/music/Musicions";
import ScrollToTop from "./components/ScrollToTop";
import Music from "./pages/Music";

const Home = lazy(() => import("./pages/Home"));

const AppRouter = () => {
  return (
    <>
      <Suspense>
        <ScrollToTop />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="life" element={<Facts />} />
          <Route path="work" element={<Brands />} /> */}
          <Route path="music" element={<Music />} />
          {/* <Route path="services" element={<Services />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
