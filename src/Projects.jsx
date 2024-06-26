import Menubar from "./menubar"
import ShowCaseProjects from "./showProjects"
import Footer from "./footer"

export const Projects = () => {
    return (
      <>
        <div id="root" class="flex flex-col min-h-screen">
        <Menubar/>
        <ShowCaseProjects/>
        <div className="absolute bottom-0 w-full ">
        <Footer/>
        </div>
        </div>
      </>
    )
  }