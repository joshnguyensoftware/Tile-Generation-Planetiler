import { randomPointNZ } from "./randomPointNZ.js"; 
import { getRandomInt } from "./getRandomInt.js";
import * as turf from "@turf/turf";
// Importing as type because only used type annotation of function return
import type { Feature, Polygon } from "geojson";

/**
 * Generates a geofence as a circular polygon  with random properties.
 *
 * @param id - A unique identifier for the geofence.
 * @returns A GeoJSON representing the geofence polygon.
 */

export function generateGeofence (geoId: number): Feature<Polygon> {
    const vertices = getRandomInt(3, 100);
    const centre = randomPointNZ();
    const radius = getRandomInt(0.01, 0.1);

    return turf.circle(centre, radius, {
        steps: vertices,
        units: "degrees",
        properties: {
            id: `geofence_${geoId}`,
            type: "geofence"
        }

    })
}



