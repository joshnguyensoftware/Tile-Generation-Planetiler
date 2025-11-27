import { generateGeofence } from "../helperFunction/generateGeofence.js";
import * as fs from "fs";
import { TOTAL_FEATURES } from "../constants.js";

/**
 * 
 * Writes the specified number of geofences to the provided write stream.
 */
 
export function writeGeofences(writeStream: fs.WriteStream, NUM_GEOFENCES: number) {
    for (let i = 0; i < NUM_GEOFENCES; i++) {
        const geofence = generateGeofence(i);
        writeStream.write(JSON.stringify(geofence));
    }
}



