import { useContext } from 'react'
import cloudIcon from "../../../assets/icons/cloud.svg"
import humidityIcon from "../../../assets/icons/humidity.svg"
import maxTempIcon from "../../../assets/icons/temp-max.svg"
import minTempIcon from "../../../assets/icons/temp-min.svg"
import windIcon from "../../../assets/icons/wind.svg"
import { WeatherContext } from '../../../context'
import { getFormattedDateTime } from '../../../utils/date-utils'

const WeatherContent = () => {
    const { weatherData } = useContext(WeatherContext);
    const { maxTemperature, minTemperature, humidity, cloudPercentage, windSpeed, climate, time, sunrise, sunset, windGust } = weatherData;

    return (
        <div className="px-4 pb-2 ">
            {/* date time and sun rise sun Set */}
            <div className="py-2  border-b dark:border-gray-800 border-gray-400 flex justify-between items-start
            ">

                <p className="text-sm lg:text-lg font-bold text-blue-400">
                    {getFormattedDateTime(time, 'date', false)}-

                    {getFormattedDateTime(time, 'time', false)}
                </p>

                <div className="flex flex-col text-amber-400">
                    <p>Sun Rise </p>
                    <p className="font-bold">{getFormattedDateTime(sunrise, "time", false)}</p>
                </div>
                <div className="flex flex-col text-red-400">
                    <p>Sun Set </p>
                    <p className="font-bold">{getFormattedDateTime(sunset, "time", false)}</p>
                </div>
            </div>

            <h3 className="dark:text-white text-black text-xl py-2">ToDays Forecast</h3>
            <>
                <div className=" text-white grid grid-cols-2 md:grid-cols-3 gap-4   ">

                    <div className="bg-darkBg dark:bg-slate-600 px-3 py-2 rounded-md text-sm lg:text-lg flex items-center flex-col space-y-2 cursor-pointer">
                        <p className="text-xl font-medium">Max Temp</p>
                        <img src={maxTempIcon} alt="temp-max" className="w-[30px]" />
                        <p className="text-xl text-yellow-400 font-medium">{Math.round(maxTemperature)}°C</p>
                    </div>


                    <div className="bg-darkBg dark:bg-slate-600 px-3 py-2 rounded-md text-sm lg:text-lg flex items-center flex-col space-y-2 cursor-pointer">
                        <p className="text-xl font-medium">Min Temp</p>
                        <img src={minTempIcon} alt="temp-max" className="w-[30px]" />
                        <p className="text-xl text-yellow-400 font-medium">{Math.round(minTemperature)}°C</p>
                    </div>

                    <div className="bg-darkBg dark:bg-slate-600 px-3 py-2 rounded-md text-sm lg:text-lg flex items-center flex-col space-y-2 cursor-pointer">
                        <p className="text-xl font-medium">Humidity</p>
                        <img src={humidityIcon} alt="temp-max" className="w-[30px]" />
                        <p className="text-xl text-yellow-400 font-medium">{Math.round(humidity)}</p>
                    </div>

                    <div className="bg-darkBg dark:bg-slate-600 px-3 py-2 rounded-md text-sm lg:text-lg flex items-center flex-col space-y-2 cursor-pointer">
                        <p className="text-xl font-medium">Clouds</p>
                        <img src={cloudIcon} alt="temp-max" className="w-[30px]" />
                        <p className="text-xl text-yellow-400 font-medium">{Math.round(cloudPercentage)}%</p>
                    </div>

                    <div className="bg-darkBg dark:bg-slate-600 px-3 py-2 rounded-md text-sm lg:text-lg flex items-center flex-col space-y-2 cursor-pointer">
                        <p className="text-xl font-medium">Wind Speed</p>
                        <img src={windIcon} alt="temp-max" className="w-[30px]" />
                        <p className="text-xl text-yellow-400 font-medium">{Math.round(windSpeed)} Km/h</p>
                    </div>

                    {/* <div className="bg-gray-700 px-3 py-2 rounded-md text-sm lg:text-lg flex items-center flex-col space-y-2">
                        <p className="text-xl font-medium">Wind Gust</p>
                        <img src={windIcon} alt="temp-max" className="w-[30px]" />
                        <p className="text-xl text-yellow-400 font-medium">{windGust} Km/h</p>
                    </div> */}


                </div>
            </>
        </div >
    )
}

export default WeatherContent
