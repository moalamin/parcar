export const ON_REGION_CHANGE = 'ON_REGION_CHANGE';
export const onRegionChange = (region) => {
  return {
    type: ON_REGION_CHANGE,
    payload: region
  }
}

export const SET_REGION = 'SET_REGION';
export const setRegion = (region) => {
  return {
    type: SET_REGION,
    payload: region
  }
}