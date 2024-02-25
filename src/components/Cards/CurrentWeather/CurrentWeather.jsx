import classes from "./CurrentWeather.module.css"

export default function CurrentWeather({ weatherData }){
    return(
        <div className={`card ${classes["current-weather-card"]}`}>
            <div className={classes.heading}>
                <p>Current weather</p>
                <p><span className='mobile-hide'>LAST UPDATE:</span> {weatherData.current.last_updated.substring(11) + "h"} <span className='mobile-hide'>(local time)</span></p>
            </div>
            <div className={classes["main-info-container"]}>
                <div className={classes["main-info"]}>
                    <div className={classes["icon-deg"]}>
                        <img src={weatherData.current.condition.icon.replace("64x64", "128x128")} alt="current weather icon" />
                        <div className={classes["deg-condition"]}>
                            <p>{weatherData.current.temp_c}<sup>&deg;C</sup></p>
                        </div>
                    </div>
                    <p>{weatherData.current.condition.text}</p>
                </div>
                <ul className="additional-info">
                    <li className="additional-info-item">
                        <p>Feels like</p>
                        <p>{weatherData.current.feelslike_c}<sup>&deg;C</sup></p>
                    </li>
                    <li className="additional-info-item">
                        <p>Humidity</p>
                        <p>{weatherData.current.humidity}%</p>
                    </li>
                    <li className="additional-info-item">
                        <p>Pressure</p>
                        <p>{weatherData.current.pressure_mb}mb</p>
                    </li>
                    <li className="additional-info-item">
                        <p>Wind</p>
                        <p>{weatherData.current.wind_dir} {weatherData.current.wind_kph} km/h</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}