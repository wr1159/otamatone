import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="flex items-center p-4 min-w-[100vw] mt-2">
      <div></div>
      <div className="flex absolute right-2">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
