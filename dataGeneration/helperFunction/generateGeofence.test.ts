import { generateGeofence } from "./generateGeofence.js";

describe("generateGeofence", () =>{
    test("Output is a GeoJSON polygon", () => {
        const geofence = generateGeofence(1);
        expect(geofence.type).toBe("Feature");
        expect(geofence.geometry.type).toBe("Polygon");
        expect(geofence.properties?.type).toBe("geofence"); // question: is the ? necessary here
        expect(geofence.properties?.id).toBe("geofence_1");
    })

    test("Generated geofence has valid number of vertices", () => {
        for (let i = 0; i < 50; i++){
            const geofence = generateGeofence(i);
            const coordinates = geofence.geometry.coordinates[0];
            // A circle with n steps has n+1 coordinates (last is same as first)
            expect(coordinates?.length).toBeGreaterThanOrEqual(4); // 3 vertices + closing point
            expect(coordinates?.length).toBeLessThanOrEqual(101); // 100 vertices + closing point
        }
    })

    
})