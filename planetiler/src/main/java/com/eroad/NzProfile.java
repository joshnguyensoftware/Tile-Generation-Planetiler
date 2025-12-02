package com.eroad;
import java.nio.file.Path;

import com.onthegomap.planetiler.FeatureCollector;
import com.onthegomap.planetiler.Planetiler;
import com.onthegomap.planetiler.Profile;
import com.onthegomap.planetiler.config.Arguments;
import com.onthegomap.planetiler.reader.SourceFeature; 

public class NzProfile implements Profile{

    @Override
    public String name(){
        return "nz_profile";
    }


    @Override
    public void processFeature(SourceFeature sourceFeature, FeatureCollector features){

        String myType = sourceFeature.getString("type");

        try{
            if(myType != null && myType.equals("geofence")){
                features.polygon("geofences")
                .setBufferPixels(4)
                .setMinZoom(0)
                .setMaxZoom(14)
                .setAttr("id", sourceFeature.getString("id"));

            }
            else if(myType != null && myType.equals("trip")){
                features.line("trips")
                .setBufferPixels(4)
                .setMinZoom(0)
                .setMaxZoom(14)
                .setAttr("id", sourceFeature.getString("id"))
                .setAttr("vehicle", sourceFeature.getString("vehicle"));
            }
            else if(myType != null && myType.equals("stop")){
                features.point("stops")
                .setBufferPixels(4)
                .setMinZoom(0)
                .setMaxZoom(14)
                .setAttr("id", sourceFeature.getString("id"))
                .setAttr("duration_mins", sourceFeature.getLong("duration_mins"));
            }
            else{
                System.out.println("Unknown feature type:" + myType);
            }
        }
        catch(Exception e){
            System.out.println("Error processing feature: " + e.getMessage());
        }

    }

    public static void main(String[] args) throws Exception {
        Planetiler.create(Arguments.fromArgs(args))
            .setProfile(new NzProfile())
            .addGeoJsonSource("nz_source", Path.of("../dataGeneration/data/sampleData.geojson"))
            .overwriteOutput("outputTiles")
            .run();
            
    }

    
    
}
