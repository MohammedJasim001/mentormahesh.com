import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const Home = lazy(()=>import("./pages/Home"))
const Life = lazy(()=>import("./pages/Life"))
const Work = lazy(()=>import("./pages/Work"))
const Music = lazy(()=>import("./pages/Music"))

const AppRouter = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="life" element={<Life />} />
          <Route path="work" element={<Work />} />
          <Route path="music" element={<Music />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
