package com.eroad.processors;
import com.onthegomap.planetiler.FeatureCollector;
import com.onthegomap.planetiler.reader.SourceFeature;

public class StopProcessor {
    public static void processStopFeature(SourceFeature sourceFeature, FeatureCollector features, String layerName, int minZoom, int maxZoom){
        features.point(layerName)
        .setBufferPixels(4)
        .setMinZoom(minZoom)
        .setMaxZoom(maxZoom)
        .setAttr("id", sourceFeature.getString("id"))
        .setAttr("duration_mins", sourceFeature.getLong("duration_mins"));
    }
    
}
