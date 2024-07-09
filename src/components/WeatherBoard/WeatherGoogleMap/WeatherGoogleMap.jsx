import { useContext, useEffect, useState } from 'react';



import cloudyMoreBg from '../../../assets/backgrounds/cloudy more.jpg';
import hazeBg from '../../../assets/backgrounds/haze.jpg';
import mistBg from '../../../assets/backgrounds/mist.jpeg';
import { default as showerRainBg, default as snowBg } from '../../../assets/backgrounds/shower-rain.jpg';
import sunnyBg from '../../../assets/backgrounds/sunny.jpg';
import thunderstormBg from '../../../assets/backgrounds/thunderstorm.jpg';
import winterBg from '../../../assets/backgrounds/winter.jpg';
import { WeatherContext } from '../../../context/index';
import { districtUrl } from '../../../utils/exported';
import getFilteredUrl from '../../../utils/filteredUrl';
function WeatherGoogleMap() {

    const { weatherData } = useContext(WeatherContext);
    const { location } = weatherData;
    // declare state for handling climateImage
    const [climateImage, setClimateImage] = useState("");

    // handle climate change image using switch case
    function getClimateImage(climate) {
        switch (climate) {
            case 'Rain':
                return showerRainBg;
            case 'Clouds':
                return cloudyMoreBg;
            case 'Clear':
                return sunnyBg;
            case 'Snow':
                return snowBg;
            case 'Thunder':
                return thunderstormBg;
            case 'Fog':
                return mistBg;
            case 'Haze':
                return hazeBg;
            case 'Mist':
                return mistBg;
            case 'Winter':
                return winterBg;
            default:
                return sunnyBg;
        }
    }
    // when change the climate image that time re render this effect and 
    useEffect(() => {
        const climateBg = getClimateImage(weatherData.climate)
        setClimateImage(climateBg)
    }, [weatherData.climate]);



    const handleGoogleMap = (url) => {
        const filteredUrl = getFilteredUrl(url)
        console.log(filteredUrl);
    }



    return (
        <div style={{ backgroundImage: `url('${climateImage}')` }}
            className="bg-cover bg-no-repeat w-full h-[300px]">
            <div className="bg-black/50  w-full h-full flex items-center justify-center">

                <button onClick={() => handleGoogleMap(districtUrl)} className="text-xl py-10 text-center text-white"> Location</button>


            </div>

        </div>


    )
}

export default WeatherGoogleMap