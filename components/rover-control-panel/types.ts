import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { controlPanelSchema } from "./control-panel-schema";

export type RoverControlPanelProps = {
    form: UseFormReturn<z.infer<typeof controlPanelSchema>>;
    onSubmit: () => void;
    onReset: () => void;
}