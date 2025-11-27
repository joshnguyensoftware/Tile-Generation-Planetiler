import { generateStop } from "../helperFunction/generateStop.js";
import * as fs from "fs";
import { TOTAL_FEATURES } from "../constants.js";


/**
 * Writes the specified number of stops to the provided write stream.
*/

export function writePoints(writeStream: fs.WriteStream, NUM_STOPS: number, NUM_GEOFENCES: number, NUM_TRIPS: number){
    
    for (let i = 0; i < NUM_STOPS; i++) {
        const stop = generateStop(i);
        writeStream.write(JSON.stringify(stop));

        if (NUM_GEOFENCES + NUM_TRIPS + i < TOTAL_FEATURES - 1) {
            writeStream.write(',\n');
        }
    }
} 