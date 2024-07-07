import { useContext } from 'react'
import cloudIcon from "../../../assets/icons/cloud.svg"
import humidityIcon from "../../../assets/icons/humidity.svg"
import maxTempIcon from "../../../assets/icons/temp-max.svg"
import minTempIcon from "../../../assets/icons/temp-min.svg"
import windIcon from "../../../assets/icons/wind.svg"
import { WeatherContext } from '../../../context'


const WeatherContent = () => {
    const { weatherData } = useContext(WeatherContext);
    const { maxTemperature, minTemperature, humidity, cloudPercentage, windSpeed, climate } = weatherData;

    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8 text-white">The Climate is <b> {climate}</b></p>
            <ul className="space-y-6 lg:space-y-6 text-white">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{maxTemperature}°</p>
                        <img src={maxTempIcon} alt="temp-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{minTemperature}°</p>
                        <img src={minTempIcon} alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>{humidity}%</p>
                        <img src={humidityIcon} alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{cloudPercentage}%</p>
                        <img src={cloudIcon} alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{windSpeed}km/h</p>
                        <img src={windIcon} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default WeatherContent
