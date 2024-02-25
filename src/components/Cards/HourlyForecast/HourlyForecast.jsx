import classes from "./HourlyForecast.module.css"

export default function HourlyForecast({ weatherData }){

    let fullHourly = [...weatherData.forecast.forecastday[0].hour, ...weatherData.forecast.forecastday[1].hour];
    const startIndex = parseInt(weatherData.current.last_updated.substring(11, 13));
    const endIndex = parseInt(weatherData.current.last_updated.substring(11, 13)) + 24;
    fullHourly = fullHourly.slice(startIndex, endIndex)

    return(
        <div className={`card ${classes["hourly-container"]}`}>
            <p className="card-heading-text">Todays hourly forecast</p>
            <ul>
                {fullHourly.map((hour, index) => (
                    <li key={hour.time}>
                        <span>
                            {hour.time.substring(11, 13) + "h"}
                        </span>
                        <img src={hour.condition.icon} alt="hourly icon" />
                        <span><b>{hour.temp_c}<sup>&deg;C</sup></b></span>
                        <span>{hour.condition.text}</span>
                        <span className={classes["hourly-rain-fc"]}>
                            <i className="fa-solid fa-droplet"></i>
                            <span>{hour.will_it_rain}%</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}