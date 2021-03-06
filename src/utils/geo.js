const defaultCenter = {
    lat: 45.4410697,
    lng: 12.3210436,
};

export const getBrowserLocation = () => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude: lat, longitude: lng } = pos.coords;
                    resolve({ lat, lng });
                },
                () => {
                    reject(defaultCenter);
                }
            );
        } else {
            reject(defaultCenter);
        }
    });
};
