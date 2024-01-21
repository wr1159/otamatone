import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { SetStateAction } from "react";
import { Dispatch } from "react";

interface NavbarProps {
  playMode: boolean;
  setPlayMode: Dispatch<SetStateAction<boolean>>;
}
const Navbar = ({ playMode, setPlayMode }: NavbarProps) => {
  return (
    <nav className="flex items-center p-4 min-w-[100vw] mt-2">
      <div>
        <Button onClick={() => setPlayMode(!playMode)}>
          {!playMode ? "Toggle Otamatone" : "Toggle Play Mode"}
        </Button>
      </div>
      <div className="flex absolute right-2">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
