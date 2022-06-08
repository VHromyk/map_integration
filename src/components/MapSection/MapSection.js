import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from '../LocationPin/LocationPin';
import './map.css';

const MapSection = ({ locations, zoomLevel }) => {
    const getCenter = (location) => {
        const resultObj = {
            lat: null,
            lng: null,
        };

        const obj = {
            lt: [],
            ln: [],
        };

        for (let i = 0; i < location.length; i += 1) {
            obj.lt.push(location[i].lat);
            obj.ln.push(location[i].lng);

            resultObj.lat = obj.lt.reduce((a, b) => a + b) / obj.lt.length;
            resultObj.lng = obj.ln.reduce((a, b) => a + b) / obj.ln.length;
        }

        return resultObj;
    };

    console.log(getCenter(locations));

    return (
        <div className="map">
            <h2 className="map-h2">Come Visit Us At Our Campus</h2>

            <div className="google_map">
                <GoogleMapReact
                    onClick={({ lat, lng }) => console.log({ lat, lng })}
                    bootstrapURLKeys={{
                        key: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
                    }}
                    defaultCenter={getCenter(locations)}
                    defaultZoom={zoomLevel}
                >
                    {locations.map((location) => (
                        <LocationPin
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default MapSection;
