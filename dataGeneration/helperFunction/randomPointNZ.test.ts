import { randomPointNZ } from "./randomPointNZ.js"; // Interesting have to add .js here even in a .ts file

describe("randomPointNZ", () => {

    test ("Generated point is an array of two numbers", () => {
        const point = randomPointNZ();
        expect(Array.isArray(point)).toBe(true);
        expect(point.length).toBe(2);
        expect(typeof point[0]).toBe("number");
        expect(typeof point[1]).toBe("number");
    });

    // NZ box is [166.0, -47.3, 178.6, -34.4]
    test ("Generated points are within New Zealand bounding box", () => {
        for (let i = 0; i < 100; i++){
            const point = randomPointNZ();
            const [lon, lat] = point;
            expect(lon).toBeGreaterThanOrEqual(166.0);
            expect(lon).toBeLessThanOrEqual(178.6);
            expect(lat).toBeGreaterThanOrEqual(-47.3);
            expect(lat).toBeLessThanOrEqual(-34.4);
        }
    });
    

   

});
