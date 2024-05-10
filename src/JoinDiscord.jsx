function JoinDiscord(){

    document.title= "SUDO - HOME";

    return(

        <div className=" p-10 items-center border shadow md:flex-row  dark:border-gray-700 dark:bg-slate-900 ">
            <div className=" border border-red-700 rounded-lg shadow md:flex-row flex">
                <img className=" object-cover h-96 md:h-auto md:w-80 rounded-l-lg" src="/src/assets/20.png" alt="" />
                <div className=" m-8">
                    <h1 className="text-white font-bold text-xl my-11"> Welcome to SUDO</h1>
                    <p className="text-white">Sudo is an 18+ LGBTQ+ friendly server dedicated to coding and web development<br/>Anyone with an interest is welcome to join regardless of experience level.</p>
                    <button onClick={(e) => {e.preventDefault();window.location.href='htttps://discord.gg/sudors'}} className=" bg-red-600 text-white p-2 rounded mx-2 my-12 text-lg hover:bg-red-800 hover:text-gray-200" type="button">Join Discord</button>
                </div>
            </div>
        </div>

    );
}

export default JoinDiscord