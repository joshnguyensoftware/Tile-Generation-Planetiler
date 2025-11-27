import { generateStop } from "./generateStop.js";
import * as turf from "@turf/turf";

describe("generateStop", () => {

    test("Output is a GeoJSON Point", () => {
        const stop = generateStop(1);
        expect(stop.type).toBe("Feature");
        expect(stop.geometry.type).toBe("Point");
        expect(stop.properties?.type).toBe("stop");
        expect(stop.properties?.id).toBe("stop_1");
        expect(typeof stop.properties?.duration_mins).toBe("number");
    })

})    