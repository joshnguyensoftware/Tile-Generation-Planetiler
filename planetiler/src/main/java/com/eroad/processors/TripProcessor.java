package com.eroad.processors;
import com.onthegomap.planetiler.FeatureCollector;
import com.onthegomap.planetiler.reader.SourceFeature;

public class TripProcessor {
    public static void processTripFeature(SourceFeature sourceFeature, FeatureCollector features, String layerName, int minZoom, int maxZoom){
        features.line(layerName)
        .setBufferPixels(4)
        .setMinZoom(minZoom)
        .setMaxZoom(maxZoom)
        .setAttr("id", sourceFeature.getString("id"))
        .setAttr("vehicle", sourceFeature.getString("vehicle"));
    }
    
}
