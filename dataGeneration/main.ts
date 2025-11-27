import { TOTAL_FEATURES, OUTPUT_PATH, NUM_GEOFENCES, NUM_STOPS, NUM_TRIPS } from './constants.js';
import { writeGeofences } from './writeFunction/writeGeofences.js';
import { writeTrips } from './writeFunction/writeTrips.js';
import { writePoints } from './writeFunction/writePoints.js';
import { startWriteStream } from './writeFunction/startWritestream.js';
import { endWriteStream } from './writeFunction/endWritestream.js';


function init(){

    console.log(`Start generating ${TOTAL_FEATURES} features...`);

    const writeStream = startWriteStream(OUTPUT_PATH);

    writeGeofences(writeStream, NUM_GEOFENCES);
    writeTrips(writeStream, NUM_TRIPS, NUM_GEOFENCES);
    writePoints(writeStream, NUM_STOPS, NUM_GEOFENCES, NUM_TRIPS);

    endWriteStream(writeStream, TOTAL_FEATURES, OUTPUT_PATH);

}

init();




