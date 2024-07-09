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
            <div className=" bg-black px-4 border-b border-gray-700">

                <div className="flex justify-between items-start">
                    <div className="border-r border-gray-800 w-full">
                        <WeatherHeadline />
                    </div>
                    <div className="w-full px-2 border-r border-gray-700">
                        <SatelliteImage />
                    </div>
                    <div className="w-full ">
                        {/* <AddToFavorite /> */}
                        <WeatherContent />
                    </div>
                </div>



                <div className="">
                    d
                </div>
            </div>
        </>
    )
}

export default WeatherBoard;
