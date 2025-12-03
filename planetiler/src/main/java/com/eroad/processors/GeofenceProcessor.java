package com.eroad.processors;

import com.onthegomap.planetiler.FeatureCollector;
import com.onthegomap.planetiler.reader.SourceFeature;

public class GeofenceProcessor {
    public static void processPolygonFeature(SourceFeature sourceFeature, FeatureCollector features, String layerName, int minZoom, int maxZoom){
        features.polygon(layerName)
        .setBufferPixels(4)
        .setMinZoom(minZoom)
        .setMaxZoom(maxZoom)
        .setAttr("id", sourceFeature.getString("id"));
    }
}