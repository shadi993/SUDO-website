import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookIcon, CalendarIcon, CoffeeIcon } from "lucide-react";

const weOffers = [
  {
    title: "Events",
    icon: CalendarIcon,
    description:
      "We have volunteered helpers to teach people who are new to programming and help them start their journey.",
  },
  {
    title: "Resources",
    icon: BookIcon,
    description:
      "We got channels for resources and tutorials to help any beginner plus helpful members that are ready to answer any question you have about programming.",
  },
  {
    title: "Off-Topic channels",
    icon: CoffeeIcon,
    description:
      "Wanna take small break? We have off-topic channels for chatting, talking about Anime or Videogames or even share your favorite music with others.",
  },
];

function AboutDiscord() {
  return (
    <div className="text-center">
      <Badge>Why Sudo</Badge>
      <h1 className=" text-white font-bold text-4xl text-center my-8">
        Join our fast growing community
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-20">
        {weOffers.map((offers) => (
          <Card className="bg-transparent border-none">
            <CardContent className="text-center">
              <CardTitle className="flex flex-col gap-y-6 items-center">
                <div>
                  <offers.icon className="size-9 text-primary" />
                </div>
                <>{offers.title}</>
              </CardTitle>
              <p
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: offers.description }}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AboutDiscord;
