import { useRef } from 'react';
import { useMap } from '../hooks/useMap';

export default function Map() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    useMap(mapContainerRef);

    return <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />;
}