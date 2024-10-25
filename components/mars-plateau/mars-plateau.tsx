"use client"

import { useEffect, useState } from "react";
import Rover from "@/components/rover/rover";
import WarningModal from "@/components/ui/warning-modal";
import { MovementDirections, Turn } from "@/lib/constants";
import { GridProps, PositionType } from "./types";
import { OrientationType } from "../../types";

const MarsPlateau = ({ plateauX, plateauY, start, initialPosition, roverMovements, onReset }: GridProps) => {
  const validX = Math.max(3, Math.min(plateauX, 7));
  const validY = Math.max(3, Math.min(plateauY, 7));

  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0, orientation: "N" });
  const [roverMovementIndex, setRoverMovementIndex] = useState(0);
  const [crash, setCrash] = useState(false);

  const moveRover = () => {
    if (roverMovementIndex >= roverMovements.length || crash) return;
    const command = roverMovements[roverMovementIndex];
    const { x, y, orientation } = position;

    if (command === "L") {
      setPosition({
        ...position,
        orientation: Turn.left[orientation],
      });
    } 

    if (command === "R") {
      setPosition({
        ...position,
        orientation: Turn.right[orientation],
      });
    } 

    if (command === "M") {
      const { dx, dy } = MovementDirections[orientation]();
      const newX = x + dx;
      const newY = y + dy;

      if (newX < 0 || newX >= validX || newY < 0 || newY >= validY) {
        setCrash(true);
        return;
      }

      setPosition({
        ...position,
        x: newX,
        y: newY,
      });
    }

    setRoverMovementIndex(roverMovementIndex + 1);
  };

  useEffect(() => {
    let frameId: number;
    let frameCount = 0;
    const frameDelay = 30;
  
    const moveAndRequestNextFrame = () => {
      frameCount++;
      if (frameCount >= frameDelay) {
        frameCount = 0;
        if (!start || roverMovementIndex >= roverMovements.length || crash) return;
        moveRover();
      }
      frameId = requestAnimationFrame(moveAndRequestNextFrame);
    };
  
    if (start) {
      frameId = requestAnimationFrame(moveAndRequestNextFrame);
    }

    return () => cancelAnimationFrame(frameId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, roverMovementIndex, roverMovements, crash]);

  useEffect(() => {
    if (initialPosition.length === 3) {
      const [xChar, yChar, orientationChar] = initialPosition;
      setPosition({ x: parseInt(xChar, 10) || 0, y: parseInt(yChar, 10) || 0, orientation: orientationChar as OrientationType || "N" });
      setRoverMovementIndex(0); 
      setCrash(false); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onReset]);

  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow p-4 mx-auto">
      <div 
        className="grid border" 
        style={{ gridTemplateColumns: `repeat(${validX}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: validX * validY }, (_, index) => {
          const cellX = index % validX;
          const cellY = Math.floor(index / validX);
          const reversedY = validY - cellY - 1;
          const isRoverPosition = position.x === cellX && position.y === reversedY;

          return (
            <div
              key={index}
              className={`h-24 w-24 flex justify-center items-center 
              ${index % validX !== validX - 1 ? "border-r" : ""} 
              ${index < validX * (validY - 1) ? "border-b" : ""}`}
            >
              {isRoverPosition && <Rover orientation={position.orientation} />}
          </div>
          )
        })}
      </div>
      <WarningModal open={crash} onReset={onReset} />
    </section>
  );
}

export default MarsPlateau;