
import { randomPoint } from "@turf/turf";

import { NZ_BBOX } from "../constants.js";
/**
 * Generates a random point within New Zealand.
 
 * The approximate bounding box of New Zealand is ([166.0, -47.3, 178.6, -34.4])
 *
 * It returns an array containing the longitude and latitude [lon, lat] of the generated point.
 */

export function randomPointNZ(): number[] {
    const pt = randomPoint(1, { bbox: NZ_BBOX });
    
    if (!pt) {
        throw new Error("Point generation failed");
    }
    else{
        return pt.features[0]!.geometry.coordinates;
    }
}

