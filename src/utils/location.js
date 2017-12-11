//gets user location then fires callback
export const getUserLocation = (cb) => navigator.geolocation.getCurrentPosition(cb);

export const checkDistanceFromUser = (coords) => {
  
}
