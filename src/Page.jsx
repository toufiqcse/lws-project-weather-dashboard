import { useContext, useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import WeatherBoard from "./components/WeatherBoard/WeatherBoard";
import { WeatherContext } from "./context";

// import all background image
import cloudyMoreBg from './assets/backgrounds/cloudy more.jpg';
import hazeBg from './assets/backgrounds/haze.jpg';
import mistBg from './assets/backgrounds/mist.jpeg';
import showerRainBg from './assets/backgrounds/shower-rain.jpg';
import snowBg from './assets/backgrounds/snow.jpg';
import sunnyBg from './assets/backgrounds/sunny.jpg';
import thunderstormBg from './assets/backgrounds/thunderstorm.jpg';
import winterBg from './assets/backgrounds/winter.jpg';
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





    return (
        <>
            {
                loading.state ? (
                    <div className="h-screen flex justify-center items-center flex-col">
                        <p className="loader"></p>
                        <p className="text-xl text-black font-semibold">{loading?.message}</p>
                    </div>
                ) :
                    (<div
                        style={{ backgroundImage: `url('${climateImage}')` }}
                        className="grid place-items-center md:h-screen bg-cover bg-no-repeat">
                        <ModalProvider>
                            <Header />
                        </ModalProvider>


                        <main>
                            <section>
                                <WeatherBoard />
                            </section>
                        </main>
                    </div>)
            }

        </>
    )
}

export default Page
