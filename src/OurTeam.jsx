import Team from "./components/team-members";
import React, { useEffect } from "react";

export const OurTeam = () => {
  useEffect(() => {
    document.title = "SUDO - Our Team";
  }, []);

  return (
    <>
      <Team />
    </>
  );
};
