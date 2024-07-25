import Menubar from "./components/layout/header";
import ProjectShowcase from "./components/project-showcase";
import Footer from "./components/layout/footer";

export const Projects = () => {
  useEffect(() => {
    document.title = "SUDO - Projects";
  }, []);

  return (
    <>
      <div class="flex flex-col min-h-screen">
        <Menubar />
        <ProjectShowcase />
        <div className="absolute bottom-0 w-full ">
          <Footer />
        </div>
      </div>
    </>
  );
};
