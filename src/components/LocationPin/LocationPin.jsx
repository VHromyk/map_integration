import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/bxs:map-pin';

const LocationPin = ({ text }) => {
    console.log(text);

    return (
        <div className="pin">
            <Icon
                icon="bi:scissors"
                width="36"
                height="36"
                className="pin-icon"
            />
            <p className="pin-text">{text}</p>
        </div>
    );};

export default LocationPin;
