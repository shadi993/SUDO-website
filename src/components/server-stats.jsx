const serverInfos = [
  { title: "members count", amount: "300+" },
  { title: "channels count", amount: "20" },
];

function ServerStat() {
  return (
    <div>
      <h1 className="text-white font-bold text-4xl text-center m-5">
        Server Statistics
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {serverInfos.map((serverInfo) => (
          <div className="border border-red-700 rounded-lg shadow text-white">
            <h1 className="text-center text-3xl font-bold m-3">
              {serverInfo.title}
            </h1>
            <p className="text-center text-3xl font-bold m-3">
              {serverInfo.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ServerStat;
