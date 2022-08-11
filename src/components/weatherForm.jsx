import { useState } from "react";
import styles from './weatherForm.module.css'

export default function WeatherForm({ onChangeCity }){
    const [city, setCity] = useState('');
    
    function onChange(e){
        const value = e.target.value;
        if(value !== ''){
            setCity(value); // Actualizamos es estado del componente
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city); // cuando damos Enter, llamamos un prop como si fuera una función
    }
    return(
        <form onSubmit = {handleSubmit} className= {styles.container}>
            <input className={styles.input} type='text' onChange={onChange} /> {/* cada que haya un cambio, vamos actualizar nuestro estado de sitio  */}
        </form>
    )
}