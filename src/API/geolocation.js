import { fetchLocation } from './fetch';

const defaultLocation = {
    id: "215854",
    name: "Tel Aviv"
};

const getLocationObj = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    let coordinates = position.coords;
                    const locationResponse = fetchLocation(coordinates)
                    resolve(locationResponse);
                },
                error => {
                    resolve(defaultLocation)},
                { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
            )
        });
};

export const getCoordinates = async () => {
    let locationObj = defaultLocation
        try {
            const locationData = await getLocationObj();
            const { Key, EnglishName } = locationData.ParentCity;
            locationObj = {
                id: Key,
                name: EnglishName
            }
            return locationObj;
        } catch {
            return defaultLocation;
        };
};