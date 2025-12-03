package com.eroad;
import java.nio.file.Path;

import com.eroad.processors.GeofenceProcessor;
import com.eroad.processors.StopProcessor;
import com.eroad.processors.TripProcessor;
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
                GeofenceProcessor.processPolygonFeature(sourceFeature, features, "geofences", 0, 14);
            }
            else if(myType != null && myType.equals("trip")){
                TripProcessor.processTripFeature(sourceFeature, features, myType, 0, 0);
            }
            else if(myType != null && myType.equals("stop")){
                StopProcessor.processStopFeature(sourceFeature, features, "stops", 0, 14);
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
