
"use client"

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import MarsPlateau from "@/components/mars-plateau/mars-plateau";
import RoverControlPanel from "@/components/rover-control-panel/rover-control-panel";
import { controlPanelSchema } from "@/components/rover-control-panel/control-panel-schema";

const Home = () => {
  const [start, setStart] = useState(false); 

  const form = useForm<z.infer<typeof controlPanelSchema>>({
    resolver: zodResolver(controlPanelSchema),
    defaultValues: {
      plateauX: 5,
      plateauY: 5,
      initialPosition: "00N",
      roverMovements: "RM",
    },
  });

  const plateauX = useWatch({
    control: form.control,
    name: "plateauX",
  });
  
  const plateauY = useWatch({
    control: form.control,
    name: "plateauY",
  });

  const roverMovements = useWatch({
    control: form.control,
    name: "roverMovements",
  });

  const initialPosition = useWatch({
    control: form.control,
    name: "initialPosition",
  });

  const onSubmit = () => {
    setStart(true);
  };

  const onReset = () => {
    form.reset();
    setStart(false);
  }
  
  return (
    <section className="flex flex-col items-center space-y-8 p-8">
      <h2 className="text-3xl font-bold tracking-tight">Mars Colonization</h2>
      <RoverControlPanel 
        form={form} 
        onSubmit={form.handleSubmit(onSubmit)} 
        onReset={onReset} 
      />
      <MarsPlateau 
        plateauX={plateauX} 
        plateauY={plateauY} 
        start={start} 
        initialPosition={initialPosition}
        roverMovements={roverMovements}
        onReset={onReset} 
      />
    </section>
  );
}

export default Home;