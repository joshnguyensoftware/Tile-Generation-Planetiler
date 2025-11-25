// Importing libraries, we use turf to make sure the geofences/trips/points are within New Zealand

const fs = require('fs');
const turf = require('@turf/turf');

// Configuration
// 250000 features will be generated in total
// Output will be saved to Data/generated-data.geojson

const TOTAL_FEATURES = 250000;
const OUTPUT_FILE = "Data/generated-data.geojson";

// New Zealand bounding box (approximate)
const NZ_BBBOX = [166.0, -47.5, 179.0, -34.0];

// Distribution configurations (Must add to 1)
const DISTRIBUTION = {
    geofences: 0.5,
    trips: 0.4,
    points: 0.1,
};

// --- Helper Functions ---

// Generate a single random point within New Zealand and returns its x,y coordinates
function generateRandomPointNZ(){
    const pt = turf.randomPoint(1, {bbox: NZ_BBBOX});
    return pt.features[0].geometry.coordinates;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random geofence (polygon) within New Zealand
function generateRandomGeofence(){
    const center = generateRandomPointNZ();
    const numVertices = 
}
