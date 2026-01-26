import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements"
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const showFooter = location.pathname === "/";

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen
        bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
      </div>
      <div className="w-full">
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto px-8">
                <Home />
              </div>
            }
          />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        {showFooter ? <Footer /> : null}
      </div>
    </div>
  );
};

export default App;
