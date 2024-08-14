import { useContext } from 'react';
import cloudIcon from '../../../assets/cloud.svg';
import hazeIcon from '../../../assets/haze.svg';
import snowIcon from '../../../assets/icons/snow.svg';
import sunnyIcon from '../../../assets/icons/sunny.svg';
import rainIcon from '../../../assets/rainy.svg';
import thunderIcon from '../../../assets/thunder.svg';

import { WeatherContext } from '../../../context';

const WeatherHeadline = () => {
    // IMPORT context as a provider
    const { weatherData } = useContext(WeatherContext);
    const { location, time, temperature, climate } = weatherData;

    // weather icon handle
    function getWeatherIcon(climate) {
        switch (climate) {
            case 'Rain':
                return rainIcon;
            case 'Clouds':
                return cloudIcon;
            case 'Clear':
                return sunnyIcon;
            case 'Snow':
                return snowIcon;
            case 'Thunder':
                return thunderIcon;
            case 'Fog':
                return hazeIcon;
            case 'Haze':
                return hazeIcon;
            case 'Mist':
                return hazeIcon;

            default:
                return sunnyIcon;
        }
    }

    return (
        <>
            <div className="px-6 py-2 bg-slate-400 dark:bg-darkBg">
                <h2 className="bg-sky-500 bg-transparent px-3 rounded text-black dark:text-white text-xl font-semibold py-2 mb-4">Bangladesh Weather Report</h2>

                <div className="flex flex-col justify-start items-center space-y-8">
                    <h1 className="text-2xl lg:text-[50px] text-yellow-500 uppercase font-semibold ">{location}</h1>
                    <h1 className="text-[50px] lg:text-[60px] xl:text-[90px] leading-none md:mb-4 dark:text-white text-black">{Math.round(temperature)}°<span className="dark:text-blue-400">C</span> </h1>
                    <img className="w-[10%]" src={getWeatherIcon(climate)} alt="cloud" />
                    <p className="text-3xl lg:text-lg font-bold uppercase mb-8 dark:text-white text-gray-600">{climate}</p>
                </div>
            </div>

        </>
    )
}

export default WeatherHeadline;
