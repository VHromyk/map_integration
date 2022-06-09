import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
// import { getCenterCoordinates } from '../../utils/getCenterCoordinates';
import style from './Map.module.css'
import { defaultTheme } from './Theme';

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

const Map = ({ center }) => {
    const mapRef = React.useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, []);


    return (
        <div className={style.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </div>
    );
};


export default Map;