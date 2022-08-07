import { useState } from "react";
import WeatherForm from "./weatherForm";

function WeatherApp() {
    const [weather, serWeather] = useState(null);

    async function loadInfo(city = 'london'){
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const json = request.json();
            console.log(json)
        } catch (error){
        }
    }

    function handleChangeCity(city){
        serWeather(null);
        loadInfo(city);
    }

    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            <div>Info</div>
        </div>
        
    );
};

export default WeatherApp;