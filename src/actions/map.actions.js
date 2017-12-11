export const ON_REGION_CHANGE = 'ON_REGION_CHANGE';
export const onRegionChange = (region) => {
  return {
    type: ON_REGION_CHANGE,
    payload: region
  }
}