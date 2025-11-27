import * as turf from '@turf/turf';
import * as fs from 'fs';
import { generateGeofence } from './helperFunction/generateGeofence.js';
import { generateTrip } from './helperFunction/generateTrip.js';
import { generateStop } from './helperFunction/generateStop.js';

const TOTAL_FEATURES: number = 250000;
const OUTPUT_PATH = 'data/sampleData.geojson';

const RATIOS = {
    GEOFENCE: 0.4,
    TRIP: 0.4,
    STOP: 0.2
}

console.log(`Start generating ${TOTAL_FEATURES} features...`);

const writeStream = fs.createWriteStream(OUTPUT_PATH);
writeStream.write('{"type":"FeatureCollection","features":[\n');

const NUM_GEOFENCES = Math.floor(TOTAL_FEATURES * RATIOS.GEOFENCE);
const NUM_TRIPS = Math.floor(TOTAL_FEATURES * RATIOS.TRIP);
const NUM_STOPS = TOTAL_FEATURES - NUM_GEOFENCES - NUM_TRIPS; 

for (let i = 0; i < NUM_GEOFENCES; i++) {
    const geofence = generateGeofence(i);
    writeStream.write(JSON.stringify(geofence));
    if (i < TOTAL_FEATURES - 1) {
        writeStream.write(',\n');
    }
}

for (let i = 0; i < NUM_TRIPS; i++) {
    const trip = generateTrip(i);
    writeStream.write(JSON.stringify(trip));
    if (NUM_GEOFENCES + i < TOTAL_FEATURES - 1) {
        writeStream.write(',\n');
    }
}

for (let i = 0; i < NUM_STOPS; i++) {
    const stop = generateStop(i);
    writeStream.write(JSON.stringify(stop));
    if (NUM_GEOFENCES + NUM_TRIPS + i < TOTAL_FEATURES - 1) {
        writeStream.write(',\n');
    }
}

writeStream.write('\n]}');
writeStream.end(() => {
    console.log(`Finished generating ${TOTAL_FEATURES} features to ${OUTPUT_PATH}`);
}); 




