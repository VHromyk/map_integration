import { Marker } from '@react-google-maps/api';

const CurrentLocationMarker = ({ position }) => {
    return <Marker position={position} icon={{url: '/location.svg'}} />;
};

export default CurrentLocationMarker;
