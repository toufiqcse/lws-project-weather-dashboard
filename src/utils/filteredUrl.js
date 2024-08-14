import districtData from "../../public/data";

function getFilteredUrl(url) {
  if (!url) return null;

  const filteredUrl = districtData.filter((item) => item.url === url);
  console.log(filteredUrl);

  if (filteredUrl.length > 0) {
    return filteredUrl[0];
  } else {
    const defaultUrl = {
      url: "",
    };

    return defaultUrl, filteredUrl;
  }
}

export default getFilteredUrl;
