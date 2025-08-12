import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Life = lazy(() => import("./pages/Life"));
const Work = lazy(() => import("./pages/Work"));
const Music = lazy(() => import("./pages/Music"));
const Services = lazy(() => import("./pages/Services"));

const AppRouter = () => {
  return (
    <>
      <Suspense>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="life" element={<Life />} />
          <Route path="work" element={<Work />} />
          <Route path="music" element={<Music />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default AppRouter;
