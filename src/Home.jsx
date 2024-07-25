import JoinDiscord from "./components/introduction-section.jsx";
import AboutDiscord from "./components/about-section.jsx";
import ServerStats from "./components/server-stats.jsx";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "SUDO - Home";
  }, []);

  return (
    <div className="grid grid-flow-row gap-y-8">
      <JoinDiscord />
      <AboutDiscord />
      <ServerStats />
    </div>
  );
};
