import * as fs from "fs";

/**
 * Initializes and returns a write stream for the specified output path. 
 * 
 * The write stream is set up to write a GeoJSON FeatureCollection. 
 * 
 * First line will be {"type":"FeatureCollection","features":[\n
 */


export function startWriteStream(OUTPUT_PATH: string): fs.WriteStream {
    const writeStream = fs.createWriteStream(OUTPUT_PATH);
    writeStream.write('{"type":"FeatureCollection","features":[\n');
    return writeStream;
}