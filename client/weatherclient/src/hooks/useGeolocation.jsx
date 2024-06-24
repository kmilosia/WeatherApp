import useLocationStore from '../store/locationStore';

const useGeolocation = () => {
    const { clearCurrentLocation, setCurrentLocation } = useLocationStore()
    const requestLocation = () => {
        if (!navigator.geolocation) {
            console.log("Geolocation not supported")
            return;
        }
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            if (result.state === 'denied') {
                clearCurrentLocation();
            } else {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setCurrentLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        })
                    },                  
                )
            }
        })
    }

    return { requestLocation }
}

export default useGeolocation;
