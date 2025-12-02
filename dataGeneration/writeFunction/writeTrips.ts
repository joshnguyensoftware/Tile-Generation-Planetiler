import { generateTrip } from "../helperFunction/generateTrip.js";
import * as fs from "fs";
import { TOTAL_FEATURES } from "../constants.js";

/**
 * Writes the specified number of trips to the provided write stream.
 */

export function writeTrips(writeStream: fs.WriteStream, NUM_TRIPS: number, NUM_GEOFENCES: number) {
    
    for (let i = 0; i < NUM_TRIPS; i++) {
        const trip = generateTrip(i);
        writeStream.write(JSON.stringify(trip));
        writeStream.write(",\n");
    }
}





