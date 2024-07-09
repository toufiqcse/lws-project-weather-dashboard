import districtData from "../../public/data";

const districtUrl = districtData.reduce((acc, district) => {
  acc[district.id] = district.url;
  return acc;
}, {});
export { districtUrl };
console.log(districtUrl);
