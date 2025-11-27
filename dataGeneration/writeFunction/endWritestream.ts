import * as fs from "fs";

/**
 * Finalizes the write stream by writing the closing brackets of the GeoJSON FeatureCollection. 
 * 
 * Logs a completion message once done.
 */

export function endWriteStream(writeStream: fs.WriteStream, TOTAL_FEATURES: number, OUTPUT_PATH: string): void {
    writeStream.write('\n]}');
    writeStream.end(() => {
    console.log(`Finished generating ${TOTAL_FEATURES} features to ${OUTPUT_PATH}`);
}); 
}

