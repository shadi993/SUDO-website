import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import apiClient from "../services/api-service";

const RANK_COLORS = {
  Owner: "accent",
  supervisor: "default",
  Moderator: "mod",
};

function Team() {
  const [staffTeam, setStaffTeam] = useState([]);

  useEffect(() => {
    apiClient
      .get()
      .then((serverStats) => {
        const { staff } = serverStats;
        setStaffTeam(
          staff.map((member) => ({
            name: member.displayName,
            rank: member.role,
            image: member.avatar,
          }))
        );
      })
      .catch((e) => {
        console.log(e);
        // Couldnt load the data!
        // do something else?
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold text-foreground mb-2">
          Our Team
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {staffTeam.map((member) => (
          <Card key={member.name} className="flex flex-col h-full group">
            <CardContent>
              <LazyLoadImage
                className="flex self-center w-full rounded-full p-4 group-hover:scale-105 transition-transform"
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
