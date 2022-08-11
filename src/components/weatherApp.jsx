import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from './weatherApp.module.css'
import Loading from "./loading";

function WeatherApp() {
    const [weather, setWeather] = useState(null); // Es nulo ya que weather cva aser el objeto respueta al hacer la solucitud HTTP, o sea, no habrá nada para importar a nuestro estado

    useEffect(() => {
        loadInfo();
    }, []) //Efectos laterales o colaterales. En tres casos: Carga código cuando uniciamos la aplicación, en cada renderizado del estado de nuestra app, cuando el componente se destruye, siempre espera un callback y un arreglo de dependecias. Si lo dejo vacío quieres decir que se ejecuta una sola vez cuando se crea el componente

    // se puede especificar más en un useEfect
    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''} `;
    }, [weather]) // si le pongo el arreglo de dependencias, UseEfect se ejecuta cada que se renderize ese elemento. se usa ? para que primero se verifieque si hay una respuesta, ya que por defecto es null


    async function loadInfo(city = 'london'){
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`); // Se crea una variable que va a ser nuestra solicitud
            const json = await request.json();

            setTimeout(() => {
                setWeather(json);
            }, 2000)

            console.log(json);
        } catch (error){
        }
    }

    function handleChangeCity(city){
        setWeather(null);// Regreso a nulo para renovar la información
        loadInfo(city);
    }

    return (
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
        </div>
        
    );
};

export default WeatherApp;