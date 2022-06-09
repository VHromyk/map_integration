import { useCallback, useEffect, useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import Autocomplete from './components/Autocomplete';
import style from './App.module.css';
import { getBrowserLocation } from './utils/geo';

import Map from './components/Map';

const libraries = ['places'];

const MODES = {
    MOVE: 0,
    SET_MARKER: 1,
};


function App() {
    const [center, setCenter] = useState(null);
    const [mode, setMode] = useState(MODES.MOVE);
    const [markers, setMarkers] = useState([]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries,
    });

    useEffect(() => {
        getBrowserLocation()
            .then((currentLocation) => {
                setCenter(currentLocation);
            })
            .catch((defaultLOcation) => {
                setCenter(defaultLOcation);
            });
    }, []);

    const onSelectCenter = useCallback((coordinates) => {
        setCenter(coordinates);
    }, []);

    const toggleMode = useCallback(() => {
        switch (mode) {
            case MODES.MOVE:
                setMode(MODES.SET_MARKER);
                break;
            case MODES.SET_MARKER:
                setMode(MODES.MOVE);
                break;
            default:
                setMode(MODES.MOVE);
        }
        console.log(mode);
    }, [mode]);

    const onMarkersAdd = useCallback(
        (coordinates) => {
            setMarkers([...markers, coordinates]);
        },
        [markers]
    );

    const onClearMarkers = useCallback(() => {
        setMarkers([]);
    }, []);

    return (
        <div className={style.search_container}>
            <div className={style.adress_search_container}>
                <Autocomplete isLoaded={isLoaded} onSelect={onSelectCenter} />
                <button
                    type="button"
                    className={style.modeToggle}
                    onClick={toggleMode}
                >
                    {mode === MODES.MOVE ? 'Set Markers' : 'Unset markers'}
                </button>
                <button
                    type="button"
                    className={style.modeToggle}
                    onClick={onClearMarkers}
                >
                    Clear markers
                </button>
            </div>
            {isLoaded ? (
                <Map
                    center={center}
                    mode={mode}
                    markers={markers}
                    onMarkersAdd={onMarkersAdd}
                />
            ) : (
                <h2>Sorry...</h2>
            )}
        </div>
    );
}

export default App;
