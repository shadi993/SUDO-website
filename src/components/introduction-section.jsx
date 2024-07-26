import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";

function JoinDiscord() {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <img
        className="object-cover h-96 w-fit md:h-auto md:w-80 rounded-2xl"
        src="/src/assets/logo.png"
        alt="Logo"
      />
      <div className="md:m-8 mt-6 md:mt-0 my-auto">
        <h1 className="text-foreground font-bold text-3xl mb-2">
          Welcome to SUDO
        </h1>
        <p className="text-white mb-6">
          Sudo is an 18+ LGBTQ+ friendly server dedicated to coding and web
          development.
          <br />
          Anyone with an interest is welcome to join regardless of experience
          level.
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <a href="https://discord.gg/sudors" target="_blank">
            <Button
              size="lg"
              className="w-full flex items-center justify-center md:justify-start"
            >
              Join our Discord <ArrowRightIcon className="size-4 inline ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinDiscord;
