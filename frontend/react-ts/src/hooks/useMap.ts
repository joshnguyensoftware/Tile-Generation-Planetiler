import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import maplibregl from 'maplibre-gl';
import { MAP_CONFIG } from '../config/mapConfig';
import { MAP_SOURCES, MAP_LAYERS } from '../config/mapStyles';

export const useMap = (containerRef: RefObject<HTMLDivElement | null>) => {
    const mapRef = useRef<maplibregl.Map | null>(null);

    useEffect(() => {

        if (mapRef.current || containerRef?.current == null) return;

        mapRef.current = new maplibregl.Map({
            container: containerRef.current,
            style: {
                version: 8,
                sources: MAP_SOURCES,
                layers: MAP_LAYERS
            },
            center: MAP_CONFIG.initialCenter,
            zoom: MAP_CONFIG.initialZoom
        });

        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        }


    }, [containerRef]);

    return mapRef;
}