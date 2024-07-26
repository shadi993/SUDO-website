import ProjectShowcase from "./components/project-showcase";
import React, { useEffect } from "react";

export const Projects = () => {
  useEffect(() => {
    document.title = "SUDO - Projects";
  }, []);

  return (
    <>
      <ProjectShowcase />
    </>
  );
};
