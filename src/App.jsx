import { Routes, Route } from "react-router-dom";
import { Home } from "./Home.jsx";
import { Projects } from "./Projects.jsx";
import { OurTeam } from "./OurTeam.jsx";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";

function App() {
  return (
    <div className="bg-background text-foreground pt-4">
      <Header />
      <div className="container mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/our-team" element={<OurTeam />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
