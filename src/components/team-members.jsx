import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Shadi from "../assets/avatars/shadi.png";
import Mika from "../assets/avatars/Mika.png";
import Async from "../assets/avatars/Async.png";
import Skerath from "../assets/avatars/skerath.png";
import Jackie from "../assets/avatars/jackie.png";

const RANK_COLORS = {
  Owner: "accent",
  Supervisor: "default",
  Mod: "mod",
};

export const TEAM = [
  { name: "Shadi", rank: "Owner", image: Shadi },
  { name: "Mika", rank: "Supervisor", image: Mika },
  { name: "Async", rank: "Mod", image: Async },
  { name: "Skerath", rank: "Mod", image: Skerath },
  { name: "Jackie", rank: "Mod", image: Jackie },
];

function Team() {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold text-foreground mb-2">
          Our Team
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
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
