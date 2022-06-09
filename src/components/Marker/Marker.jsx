import { Marker } from '@react-google-maps/api';

const MarkerClick = ({position}) => {
    return <Marker position={position} icon={{ url: '/location_pin.svg' }} />;
};

export default MarkerClick;
