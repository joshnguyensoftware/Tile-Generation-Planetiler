import { HERE_API_KEY } from "./config.ts";

export const MAP_TILE_SIZE = 256;

export const MAP_CONFIG = {
    initialCenter: [174.7633, -36.8485] as [number, number], // Auckland, NZ
    initialZoom: 10,
    sources: {
        HERE: {
            url: `https://maps.hereapi.com/v3/base/mc/{z}/{x}/{y}/png8?apiKey=${HERE_API_KEY}`,
            attribution: '&copy; HERE 2025'
        },

        CUSTOM_TILES: {
            url: 'http://localhost:8080/{z}/{x}/{y}.pbf',
            minZoom: 0,
            maxZoom: 14
        }
    }

}
export const LAYER_IDS = {
    geofences: "geofences",
    trips: "trips",
    stops: "stops"
}


