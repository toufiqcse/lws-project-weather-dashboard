import React from 'react';
import RecentWeatherHistory from '../RecentWeatherHistory/RecentWeatherHistory';
import WeatherGoogleMap from '../WeatherGoogleMap/WeatherGoogleMap';



function WeatherDetails() {




    return (
        <div className="dark:bg-darkBg bg-slate-100 px-4 py-2 border-b border-gray-400 dark:border-gray-700">
            <div className="flex flex-wrap md:flex-nowrap justify-between items-start text-white">
                <div className="border-r dark:border-gray-700 border-gray-400 w-full px-2">
                    <WeatherGoogleMap />
                </div>
                <RecentWeatherHistory />
                <div className="w-full ">
                    <h3 className="text-xl font-medium py-2 px-4 text-black dark:text-white">Forecast</h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails