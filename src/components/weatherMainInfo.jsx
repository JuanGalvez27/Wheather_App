import styles from './weatherMainInfo.module.css'

export default function WeatherMainInfo({ weather }){ 
    // el weather es la respuesta de nuesto objeto json de la respuesta HTTP
    return (
        <div className={styles.mainInfo}>
            <div className={styles.city}>{weather?.location.name}</div>
            <div className={styles.county}>{weather?.location.country}</div>
            <div className={styles.row}>
                <img src={`http:${weather?.current.condition.icon}`} width='128' alt={`${weather?.current.condition.text}`} />
                <div className={styles.weatherConditions}>
                    <div className={styles.condition}> {weather?.current.condition.text} </div>
                    <div className={styles.current}> {weather?.current.temp_c}°</div>
                </div>
            </div>
            <div>
                <iframe 
                title='map' 
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d273141.31315412733!2d${weather?.location.lon}612!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1660167796915!5m2!1sen!2sco `}width="100%" height="450" style={{border: 0 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
    )
}

// Éste componente da fomato a nuestra respuesta HTTP, para renderizarla en pantalla