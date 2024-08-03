import { useContext, useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import { ThemeContext, WeatherContext } from "./context";

// import all background image
import cloudyMoreBg from './assets/backgrounds/cloudy more.jpg';
import hazeBg from './assets/backgrounds/haze.jpg';
import mistBg from './assets/backgrounds/mist.jpeg';
import showerRainBg from './assets/backgrounds/shower-rain.jpg';
import snowBg from './assets/backgrounds/snow.jpg';
import sunnyBg from './assets/backgrounds/sunny.jpg';
import thunderstormBg from './assets/backgrounds/thunderstorm.jpg';
import winterBg from './assets/backgrounds/winter.jpg';
import Footer from './components/Footer/Footer';
import WeatherBoard from './components/WeatherBoard/WeatherBoard';
import WeatherDetails from './components/WeatherBoard/WeatherDetails/WeatherDetails';
import useOnlineStatus from './Hooks/useOnlineStatus';
import ModalProvider from './provider/ModalProvider';


const Page = () => {
    // get data from weather context
    const { loading, weatherData } = useContext(WeatherContext);
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

    const { darkMode } = useContext(ThemeContext);
    // check is online or offline
    const isOnline = useOnlineStatus();
    console.log(isOnline);



    return (
        <div>
            {
                loading.state ? (
                    <div className=" flex justify-center items-center flex-col">
                        {
                            isOnline ?
                                <>
                                    <p className="loader"></p>
                                    <p className="text-xl dark:text-white text-black font-semibold">
                                        {loading?.message}
                                    </p>
                                </>
                                :
                                <p className="text-red-500 items-center font-semibold text-xl text-center ">Please check your network status</p>
                        }

                    </div>
                ) :
                    (<div
                        // style={{ backgroundImage: `url('${climateImage}')` }}
                        className={`grid place-items-center  bg-cover bg-no-repeat
                         ${darkMode ? 'dark' : ''}`}>
                        <ModalProvider>
                            <Header />
                        </ModalProvider>
                        <main className="w-full ">
                            <WeatherBoard />
                            <WeatherDetails />
                        </main>
                        <Footer />
                    </div>)
            }
        </div >
    )
}

export default Page
