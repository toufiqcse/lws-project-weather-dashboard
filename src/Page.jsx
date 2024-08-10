import { useContext } from 'react';
import Header from "./components/Header/Header";
import { WeatherContext } from "./context";

// import all background image
import Footer from './components/Footer/Footer';
import WeatherBoard from './components/WeatherBoard/WeatherBoard';
import WeatherDetails from './components/WeatherBoard/WeatherDetails/WeatherDetails';
import useOnlineStatus from './Hooks/useOnlineStatus';
import ModalProvider from './provider/ModalProvider';


const Page = () => {
    // get data from weather context
    const { loading } = useContext(WeatherContext);
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
                                    <p className="text-xl text-white dark:text-black  font-semibold">
                                        {loading?.message}
                                    </p>
                                </>
                                :
                                <p className="dark:text-red-500 text-black items-center font-semibold text-xl text-center ">Please check your network status</p>
                        }

                    </div>
                ) :
                    (<div
                        // style={{ backgroundImage: `url('${climateImage}')` }}
                        className={`grid place-items-center  bg-cover bg-no-repeat
                        `}>
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
