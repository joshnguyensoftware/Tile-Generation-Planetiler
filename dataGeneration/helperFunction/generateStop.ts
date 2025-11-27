import { randomPointNZ } from "./randomPointNZ.js";
import * as turf from "@turf/turf";
import type { Feature, Point } from "geojson";

export function generateStop(stopId: number): Feature<Point> {
    const coordinates = randomPointNZ();
    return turf.point(coordinates, {
        id: `stop_${stopId}`,
        type: "stop",
        duration_mins: Math.floor(Math.random() * 120) + 1 // Random duration between 1 and 120 minutes
    });

}