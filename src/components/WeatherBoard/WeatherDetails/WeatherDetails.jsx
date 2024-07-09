import React from 'react';
import { FaCloud } from "react-icons/fa";
import WeatherGoogleMap from '../WeatherGoogleMap/WeatherGoogleMap';



function WeatherDetails() {
    return (
        <div className="bg-black px-4 py-2 border-b border-gray-700">
            <div className="flex justify-between items-start text-white">
                <div className="border-r border-gray-700 w-full px-2">
                    <WeatherGoogleMap />
                </div>
                <div className="w-full px-2 border-r border-gray-700">
                    <div className="flex justify-between items-center bg-amber-500 bg-transparent px-3 rounded text-white text-xl font-semibold py-2 mb-4">
                        <h3 className="">Recent Search Location </h3>
                        <FaCloud />
                    </div>

                    <div className="flex flex-col px-0 space-y-4">
                        <ul className="flex justify-between items-center bg-gray-400 hover:bg-slate-500 px-2 py-3 rounded text-xl transition-all" >
                            <li>Dhaka</li>
                            <li>35 C</li>
                        </ul>
                        <ul className="flex justify-between items-center bg-gray-400 hover:bg-slate-500 px-2 py-3 rounded text-xl transition-all" >
                            <li>Dhaka</li>
                            <li>35 C</li>
                        </ul>
                        <ul className="flex justify-between items-center bg-gray-400 hover:bg-slate-500 px-2 py-3 rounded text-xl transition-all" >
                            <li>Dhaka</li>
                            <li>35 C</li>
                        </ul>


                    </div>

                </div>
                <div className="w-full ">
                    <h3 className="text-white text-xl font-medium py-2">Forecast</h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails