import React from 'react';
import RecentWeatherHistory from '../RecentWeatherHistory/RecentWeatherHistory';
import WeatherGoogleMap from '../WeatherGoogleMap/WeatherGoogleMap';



function WeatherDetails() {




    return (
        <div className="bg-black px-4 py-2 border-b border-gray-700">
            <div className="flex justify-between items-start text-white">
                <div className="border-r border-gray-700 w-full px-2">
                    <WeatherGoogleMap />
                </div>
                <RecentWeatherHistory />
                <div className="w-full ">
                    <h3 className="text-white text-xl font-medium py-2">Forecast</h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails