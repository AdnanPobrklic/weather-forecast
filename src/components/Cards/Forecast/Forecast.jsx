import classes from "./Forecast.module.css"
import { parseISO, format } from 'date-fns';

export default function Forecast({ weatherData }){
    return(
        <div className={`card ${classes.forecast}`}>
            <p className="card-heading-text">7 day forecast</p>
            <ul>
            {weatherData.forecast.forecastday.map((day, index) => (
                index !== 0 && index < 8? 
                <li key={day.date}>
                    <span>{format(parseISO(day.date), 'EEEE, d MMM').substring(0, 3) + " " + weatherData.current.last_updated.substring(5,10)}</span>
                    <img src={day.day.condition.icon} alt="daily forecast icon" />
                    <span><b>{day.day.avgtemp_c}<sup>&deg;C</sup></b></span>
                    <span>{day.day.condition.text}</span>
                    <span className={classes["fc-rain-info"]}><i className="fa-solid fa-droplet"></i> {day.day.daily_chance_of_rain}%</span>
                </li> 
                : null
            ))}
            </ul>
        </div>
    )
}