import { NavLink } from "react-router-dom";
function Menubar(){

    return(
        <header>
        <div className=" w-full bg-slate-900">
        <div className="w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 bg-slate-900">
        <div className="h-full w-full bg-gray-800">
        <nav className=" dark:bg-gray-800  border-solid border-transparent ">
            <div className=" w-full md:block rounded-l-lg">
                <ul className=" flex w-full ">
                    {/* <li><a onClick={()=>Homeclicked()} className=" block py-2 px-3 text-white hover:text-red-600">Home</a></li>
                    <li><a href="#" className=" block py-2 px-3 text-white hover:text-red-600">Projects</a></li>
                    <li><a href="#" className=" block py-2 px-3 text-white hover:text-red-600">Our Team</a></li>
                    <li><a href="#" className=" block py-2 px-3 text-white hover:text-red-600">Contact</a></li> */}
                    <NavLink to="/" className=" block py-2 px-3 text-white hover:text-red-600">Home</NavLink>
                    <NavLink to="/projects" className=" block py-2 px-3 text-white hover:text-red-600">Projects</NavLink>
                    <NavLink to="/our-team" className=" block py-2 px-3 text-white hover:text-red-600">Our Team</NavLink>
                    <NavLink to="/contact" className=" block py-2 px-3 text-white hover:text-red-600">Contact</NavLink>
                </ul>
            </div>
        </nav>
        </div>
        </div>
        </div>
        </header>
    );
    
}

export default Menubar