import { Link } from "react-router-dom";
import Logo from "../../assets/logo-transparent.png";

function Menubar() {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between align-middle items-center">
          <div className="flex items-center text-center">
            <img src={Logo} className="size-12 rounded-full mr-1" />
            <h1 className="font-audiowide font-bold text-2xl inline select-none">
              SUDO
            </h1>
          </div>
          <nav className="flex items-center">
            <ul className="grid grid-flow-col gap-x-6 text-foreground font-semibold">
              <Link
                to="/"
                className="py-2 pr-2 hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="py-2 px-3 hover:text-primary transition-colors duration-200 "
              >
                Projects
              </Link>
              <Link
                to="/our-team"
                className="py-2 px-3 hover:text-primary transition-colors duration-200"
              >
                Our Team
              </Link>
            </ul>
          </nav>
        </div>
        {/** rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 */}
      </div>
    </header>
  );
}

export default Menubar;
