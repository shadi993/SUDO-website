import React from "react";
function AboutDiscord(){

    const weOffers = [{title:'Events',description:'We have volunteered helpers to teach people who are new to programming and help them start their journey.'},
                    {title:'Resources',description:'We got channels for resources and tutorials to help any beginner plus helpful members that are ready to answer any question you have about programming.'},
                    {title:'Off-Topic channels',description:'You wanna take small break? We have some off-topic channels for chatting, talking about Anime or Videogames or even share your favorite music with others.'},
    ];

    return(
    <div className=" p-10 items-center border shadow md:flex-row w-screen  dark:border-gray-700 dark:bg-slate-900 ">
        <h1 className=" text-white font-bold text-4xl text-center m-5">We offer</h1>
        <div className="grid grid-cols-3 gap-4">
            {
            weOffers.map((weoffer)=>(
                <div className="border border-red-700 rounded-lg shadow text-white">
                <h1 className="text-center text-3xl font-bold m-3">{weoffer.title}</h1>
                <p className="p-2">{weoffer.description}</p>
            </div>
            ))}
        </div>
    </div>
);
}
export default AboutDiscord