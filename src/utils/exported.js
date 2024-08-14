import districtData from "../../public/data";

// Reduce the districtData array to an object containing only the URLs, keyed by district ID
const districtUrls = districtData.reduce((accumulator, district) => {
  accumulator[district.id] = district.url;
  return accumulator;
}, {});

// Export the districtUrls object
export { districtUrls };

// Optional: Log the URLs to the console
console.log(Object.values(districtUrls));
