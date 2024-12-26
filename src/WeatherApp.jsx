import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
import "./WeatherApp.css"

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 12.87,
        humidity : 94,
        temp : 13.05,
        tempMax : 13.05,
        tempMin : 13.05,
        weather : "mist",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="App">
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}