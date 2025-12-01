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

        FeatureCollector.Feature feature = features.polygon(myType).setBufferPixels(4)
            .setMinZoom(0)
            .setMaxZoom(14);      

    }

    
    
}
