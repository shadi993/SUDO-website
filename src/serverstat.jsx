function Serverstat(){

    const serverinfos = [{title:'members count', amount:'300+'},
                         {title:'channels count', amount:'20'}];

    return(
        <div className="p-10 items-center border shadow md:flex-row dark:border-gray-700 dark:bg-slate-900">
            <h1 className="text-white font-bold text-4xl text-center m-5">Server's info</h1>
            <div className="grid grid-cols-2 gap-4">
                {
                serverinfos.map((serverinfo)=>(
                                <div className="border border-red-700 rounded-lg shadow text-white">
                                    <h1 className="text-center text-3xl font-bold m-3">{serverinfo.title}</h1>
                                    <p className="text-center text-3xl font-bold m-3">{serverinfo.amount}</p>
                                </div>
                ))}
            </div>
        </div>
    );
}
export default Serverstat