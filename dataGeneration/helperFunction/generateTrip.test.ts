import { generateTrip} from "./generateTrip.js";

describe("generateTrip", () => {

    test("Output is a GeoJSON LineString", () => {
        const trip = generateTrip(1);
        expect(trip.type).toBe("Feature");
        expect(trip.geometry.type).toBe("LineString");
        expect(trip.properties?.type).toBe("trip");
        expect(trip.properties?.id).toBe("trip_1");
        expect(trip.properties?.vehicle).toBe("truck");
    })

    test("Generated trip has valid number of points", () => {
        for (let i = 0; i < 50; i++){
            const trip = generateTrip(i);
            const coordinates = trip.geometry.coordinates;
            expect(coordinates?.length).toBeGreaterThanOrEqual(10);
            expect(coordinates?.length).toBeLessThanOrEqual(101);
        }
    })

})    