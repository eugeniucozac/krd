import { OrientationType } from "../types";

export const MovementDirections: Record<OrientationType, () => { dx: number, dy: number }> = {
    N: () => ({ dx: 0, dy: 1 }),
    E: () => ({ dx: 1, dy: 0 }),
    S: () => ({ dx: 0, dy: -1 }),
    W: () => ({ dx: -1, dy: 0 }),
};

export const Turn: Record<"left" | "right", Record<OrientationType, OrientationType>> = {
    left: {
        N: "W",
        W: "S",
        S: "E",
        E: "N",
    },
    right: {
        N: "E",
        E: "S",
        S: "W",
        W: "N",
    },
};