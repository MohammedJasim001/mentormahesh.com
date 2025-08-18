import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Life from "./pages/Life";
import Music from "./pages/Music";
import Nav from "./components/Nav";
import Services from "./pages/Services";
import Work from "./pages/Works";
import AppRouter from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />

    </BrowserRouter>
  );
}

export default App;
