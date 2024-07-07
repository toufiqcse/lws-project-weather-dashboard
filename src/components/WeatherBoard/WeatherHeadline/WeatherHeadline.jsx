import { useContext } from 'react';
import cloudIcon from '../../../assets/cloud.svg';
import hazeIcon from '../../../assets/haze.svg';
import snowIcon from '../../../assets/icons/snow.svg';
import sunnyIcon from '../../../assets/icons/sunny.svg';
import pinIcon from '../../../assets/pin.svg';
import rainIcon from '../../../assets/rainy.svg';
import thunderIcon from '../../../assets/thunder.svg';

import { WeatherContext } from '../../../context';
import { getFormattedDateTime } from '../../../utils/date-utils';

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
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={getWeatherIcon(climate)} alt="cloud" />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4 text-white">{Math.round(temperature)}° </h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={pinIcon} alt="pin" />
                        <h2 className="text-2xl lg:text-[50px] text-yellow-500">{location}</h2>
                    </div>
                </div>
            </div>
            {/* set date time formatted date */}
            <p className="text-sm lg:text-lg text-white">{getFormattedDateTime(time, 'date', false)} - {getFormattedDateTime(time, 'time', false)}</p>
        </div>
    )
}

export default WeatherHeadline;
