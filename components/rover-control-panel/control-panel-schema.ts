import * as z from "zod";

export const controlPanelSchema = z.object({
    plateauX: z.number().min(3, { message: "Min 3" }).max(7, { message: "Max 7" }).nonnegative(),
    plateauY: z.number().min(3, { message: "Min 3" }).max(7, { message: "Max 7" }).nonnegative(),    
    initialPosition: z.string().regex(/^[0-9][0-9][NWSE]$/, "Invalid position format"),
    roverMovements: z.string().regex(/^[MLR]+$/, "Rover Movements can only be M, L, or R"),
});