import { parseISO, format } from 'date-fns';
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import classes from "../styles/Weather-Data.module.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';
import SkeletonCard from '../components/SkeletonCard';
import CurrentWeather from '../components/Cards/CurrentWeather/CurrentWeather';
import HourlyForecast from '../components/Cards/HourlyForecast/HourlyForecast';
import Forecast from '../components/Cards/Forecast/Forecast';

export default function WeatherData(){

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const cityName = queryParams.get("city");

    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchingError, setFetchingError] = useState(null);

    useEffect( () => {

        const fetchData = async () => {
            try{
                const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${cityName}&days=14`
                const res = await fetch(url)
                const data = await res.json();
                if(res.status === 400){
                    setFetchingError(true)
                }else{
                    setWeatherData(data);
                }
                setIsLoading(false);
            }catch(err){
                console.log(err)
            }
        }

        setTimeout( () => fetchData(), 1000)
    }, [cityName])


    return (
        <>
        <Header showInput={true}/>
            <main>

                {isLoading && <SkeletonCard />}
                
                {isLoading && <SkeletonCard />}
                
                {isLoading && <SkeletonCard />}
                
                {isLoading && <SkeletonCard />}

                {weatherData && <div className={`card ${classes["location-info"]}`}>
                    <span>{weatherData.location.name}</span>/
                    <span>{weatherData.location.country}</span>
                </div>}

                {weatherData && < CurrentWeather weatherData={weatherData}/>}

                {weatherData && < HourlyForecast weatherData={weatherData}/>}


                    {weatherData && < Forecast weatherData={weatherData}/>}

                    {fetchingError && <div className={classes["error-div"]}>
                        Sorry the location was not found, feel free to try another
                        <i className="fa-solid fa-ban"></i>   
                    </div>}
            </main>
            <Footer />
        </>
    )
}   




