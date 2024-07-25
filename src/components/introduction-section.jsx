import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";

function JoinDiscord() {
  return (
    <div className="flex">
      <img
        className="object-cover h-96 md:h-auto md:w-80 rounded-2xl"
        src="/src/assets/logo.png"
        alt="Logo"
      />
      <div className="m-8 my-auto">
        <h1 className="text-foreground font-bold text-3xl mb-2">
          Welcome to SUDO
        </h1>
        <p className="text-white mb-6">
          Sudo is an 18+ LGBTQ+ friendly server dedicated to coding and web
          development
          <br />
          Anyone with an interest is welcome to join regardless of experience
          level.
        </p>
        <div className="flex flex-row gap-x-2">
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center align-middle"
          >
            Another Button <ArrowRightIcon className="size-4 inline ml-2" />
          </Button>
          <a href="https://discord.gg/sudors">
            <Button size="lg" className="flex items-center align-middle">
              Join our Discord <ArrowRightIcon className="size-4 inline ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinDiscord;
