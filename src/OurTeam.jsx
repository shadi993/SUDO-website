import Menubar from "./menubar"
import Team from "./team"
import Footer from "./footer"

export const OurTeam = () => {
    return (
      <>
        <div id="root" class="flex flex-col min-h-screen dark:border-gray-700 dark:bg-slate-900">
        <Menubar/>
        <Team/>
        <div className="absolute bottom-0 w-full ">
        <Footer/>
        </div>
        </div>
      </>
    )
}