import React from "react";
function ShowCaseProjects(){

    const projects=[
        {name:'Sudo Website',description:'A website project that present the Discord server SUDO',madeby:'Shadi',link:'https://github.com/shadi993/SUDO-website'},
        {name:'TodoList Python',description:'First python project made for practice',madeby:'Shadi',link:'https://github.com/shadi993/ToDoListPyhon'}];

  

    return(
        <div className="p-10 items-center border shadow md:flex-row w-screen  dark:border-gray-700 dark:bg-slate-900">
            <h1 className=" text-6xl text-white p-5 m-5">Projects</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                  projects.map((project) =>(
                    <div className="border border-red-700 rounded-lg shadow text-white">
                    <h1 className="text-center text-3xl font-bold m-3">{project.name}</h1>
                    <p className="p-2">{project.description}</p>
                    <p className="p-2">Made by {project.madeby}</p>
                    <div className=" flex flex-col items-center justify-center basis-1/4">
                        <button onClick={(e) => {e.preventDefault();window.location.href=project.link}} className=" bg-red-600 text-white p-2 rounded m-2 text-lg hover:bg-red-800 hover:text-gray-200" type="button">Link to Project</button>
                    </div>
                </div>
                  ) )
                }
            </div>
        </div>
    );
}

export default ShowCaseProjects