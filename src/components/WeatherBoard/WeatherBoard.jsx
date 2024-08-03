import { useContext } from 'react';

import { WeatherContext } from '../../context';
import SatelliteImage from './SatelliteImage/SatelliteImage';
import WeatherContent from "./WeatherContent/WeatherContent";
import WeatherHeadline from "./WeatherHeadline/WeatherHeadline";
const WeatherBoard = () => {
    const { loading, weatherData } = useContext(WeatherContext);
    console.log(loading, weatherData);

    return (
        <>
            <div className="dark:bg-darkBg bg-slate-100 px-4 border-b dark:border-gray-800 border-gray-400">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
                    <div className="border-r dark:border-gray-800 border-gray-400 w-full">
                        <WeatherHeadline />
                    </div>
                    <div className="w-full px-2 border-r dark:border-gray-800 border-gray-400">
                        <SatelliteImage />
                    </div>
                    <div className="w-full ">
                        {/* <AddToFavorite /> */}
                        <WeatherContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherBoard;
