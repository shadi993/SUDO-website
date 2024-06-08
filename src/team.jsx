function Team(){

    const teams = [{name:'Shadi',rank:'Owner',image:'/src/assets/avatars/shadi.png'},
        {name:'Mika',rank:'Supervisor',image:'/src/assets/avatars/Mika.png'},
        {name:'Async',rank:'Mod',image:'/src/assets/avatars/Async.png'},
        {name:'Skerath',rank:'Mod',image:'/src/assets/avatars/skerath.png'},
        {name:'Jackie',rank:'Mod',image:'/src/assets/avatars/jackie.png'}
];

    return(
        <div className="p-10 items-center shadow md:flex-row w-full flex-1">
        <h1 className=" text-6xl text-white p-5 m-5 text-center">Our Team</h1>
        <div className="grid grid-cols-3 gap-4">
            {
                teams.map((team)=>(
                <div className="border border-red-700 rounded-lg shadow text-white">
                <img className=" object-cover h-96 md:h-auto md:w-80 rounded-l-lg" src={team.image} alt="" />
                <h1 className="text-center text-3xl font-bold m-3">{team.name}</h1>
                <h1 className="text-center text-2xl text-red-600 font-bold m-3">{team.rank}</h1>
            </div>
))}
        </div>
    </div>
    );
}
export default Team