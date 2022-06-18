/**
 * @param {object} userLocation
 * @param {number} userLocation.lat
 * @param {number} userLocation.lng
 * @param {number} [userLocation.elevation]
 */
 const getLatLngElevation = userLocation => {
	const {lat, lng, elevation=0} = userLocation;
  return `The latitude is ${lat}, the longitude is ${lng} and the elevation is ${elevation} meters`;
}

// Sample usage - do not modify
const userLocation = {
  lat: 24.235235,
  lng: 2.5734,
};

console.log(getLatLngElevation(userLocation)); 
// The latitude is 24.235235, the longitude is 2.5734 and the elevation is 0 meters