"use client"

import { Navigation2 } from "lucide-react";
import { RoverProps } from "./types";
import { OrientationType } from "../../types";

const Rover = ({orientation}: RoverProps) => {
  const getRotationDegrees = (orientation: OrientationType) => {
    switch (orientation) {
      case "N": return "rotate-0"; 
      case "E": return "rotate-90"; 
      case "S": return "rotate-180"; 
      case "W": return "-rotate-90"; 
      default: return ""; 
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Navigation2 className={`h-10 w-10 ${getRotationDegrees(orientation)}`} />
    </div>
  );
}

export default Rover;