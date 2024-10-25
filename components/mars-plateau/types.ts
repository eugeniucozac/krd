import { OrientationType } from "../../types";
export type GridProps = {
    plateauX: number;
    plateauY: number;
    start: boolean;
    initialPosition: string;
    roverMovements: string;
    onReset: () => void;
}

export type PositionType = {
    x: number;
    y: number;
    orientation: OrientationType;
}