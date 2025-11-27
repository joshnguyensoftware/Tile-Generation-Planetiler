import { getRandomInt } from "./getRandomInt.js";
import { randomPointNZ } from "./randomPointNZ.js";
import * as turf from "@turf/turf";
import type { Feature, LineString } from "geojson";


/**
* Generates a trip as a LineString with random points within New Zealand.
* 
* A trip is a series of connected points (10 to 100 points).

*/

export function generateTrip(tripId: number): Feature<LineString> {
    const numPoints = getRandomInt(10, 100);
    const startPoint = randomPointNZ();
    const coordinates: number[][] = [startPoint];

    let currentPoint = startPoint;
    for (let i = 0; i < numPoints; i++) {
        const moveLon = (Math.random() - 0.5) * 0.1;
        const moveLat = (Math.random() - 0.5) * 0.1;
        
        const nextPoint = [currentPoint[0]! + moveLon, currentPoint[1]! + moveLat];

        coordinates.push(nextPoint);
        currentPoint = nextPoint;
    
    
    
    }

    return turf.lineString(coordinates, {
        id: `trip_${tripId}`,
        type: "trip",
        vehicle: "truck"
    });
}