import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
const RANK_COLORS = {
  Owner: "accent",
  Supervisor: "default",
  Mod: "mod",
};

const TEAM = [
  { name: "Shadi", rank: "Owner", image: "/src/assets/avatars/shadi.png" },
  { name: "Mika", rank: "Supervisor", image: "/src/assets/avatars/Mika.png" },
  { name: "Async", rank: "Mod", image: "/src/assets/avatars/Async.png" },
  { name: "Skerath", rank: "Mod", image: "/src/assets/avatars/skerath.png" },
  { name: "Jackie", rank: "Mod", image: "/src/assets/avatars/jackie.png" },
];

function Team() {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold text-foreground mb-2">
          Our Team
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {TEAM.map((member) => (
          <Card key={member.name} className="flex flex-col h-full group">
            <CardContent>
              <img
                className="flex self-center rounded-l-lg w-auto p-4 group-hover:scale-105 transition-transform"
                src={member.image}
                alt={member.name}
              />
              <div className="flex flex-col gap-y-2 items-center mt-2">
                <h1 className="justify-center gap-x-3 align-middle items-center flex text-3xl font-bold">
                  {member.name}
                </h1>
                <Badge className="py-1 px-2" variant={RANK_COLORS[member.rank]}>
                  {member.rank}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Team;
