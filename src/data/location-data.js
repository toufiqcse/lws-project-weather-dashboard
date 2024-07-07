import districtData from "../../public/data";

function getLocationByName(location) {
  if (!location) return null;

  const filteredLocation = districtData.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  if (filteredLocation.length > 0) {
    return filteredLocation[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };

    return defaultLocation;
  }
}

export default getLocationByName;
