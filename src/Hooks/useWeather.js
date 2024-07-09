import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    windSpeed: "",
    time: "",
    longitude: "",
    latitude: "",
    sunrise: "",
    sunset: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  // loading ke customize korar jnne object akare neya hoice instead of boolean data
  const [error, setError] = useState(null);

  // get selected location from locationProvide by LocationContext
  const { selectedLocation } = useContext(LocationContext);

  //   fetch api function
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data....",
      });
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }&units=metric`;
      const response = await fetch(url);
      //   error handling
      if (!response.ok) {
        const errorMessage = `Fetching weather Data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      //   not error
      const data = await response.json(); //get all data
      //   map the data for get require data
      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        windSpeed: data?.wind?.speed,
        time: data?.dt,
        sunrise: data?.sys.sunrise,
        sunset: data?.sys.sunset,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updatedWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location....",
    });

    // checking when selected location available that time execute this code
    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      // otherwise that code for globally
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    loading,
    error,
  };
};

export default useWeather;
