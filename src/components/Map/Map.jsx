import React, { useCallback } from 'react';
import { GoogleMap } from '@react-google-maps/api';
// import { getCenterCoordinates } from '../../utils/getCenterCoordinates';
import style from './Map.module.css';
import { defaultTheme } from './Theme';
import CurrentLocationMarker from '../CurrentLocationMarker';
import Marker from '../Marker';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultOptions = {
    panControl: true,
    zommControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    keyboardShortcuts: false,
    // https://snazzymaps.com/  customizated theme for maps
    styles: defaultTheme,
};

const MODES = {
    MOVE: 0,
    SET_MARKER: 1,
};

const Map = ({ center, mode, markers, onMarkersAdd }) => {
    const mapRef = React.useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, []);

    const onClick = useCallback(
        (location) => {
            if (mode === MODES.SET_MARKER) {
                const lat = location.latLng.lat();
                const lng = location.latLng.lng();
                onMarkersAdd({ lat, lng });
            } 
        },
        [mode, onMarkersAdd]
    );

    return (
        <div className={style.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
                onClick={onClick}
            >
                <CurrentLocationMarker position={center} />
                {/* Child components, such as markers, info windows, etc. */}
                {markers.map((marker) => (
                    <Marker key={marker.lat} position={marker} />
                ))}
            </GoogleMap>
        </div>
    );
};

export default Map;
