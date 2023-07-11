import React, {useState} from 'react';
import SearchForm from "../composants/Meteo/SearchForm";
import WeatherDisplay from "../composants/Meteo/WeatherDisplay";
import fetchAPI from "../utils/fetchAPI";

const Meteo = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const getDataByCity = async (city) => {
        setError(null)
        try {
            const cityData = await fetchAPI.getInfoCity(city);
            if(cityData.message){
                throw new Error(cityData.message)
            }
            setData(cityData)
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <div className={"d-flex flex-col align-center pt-2"} style={{backgroundColor: "white", height: "100vh"}}>
            <SearchForm submitForm={getDataByCity}/>
            {!error ? <WeatherDisplay info={data}/> : <span style={{color: "red"}}>{error}</span>}

        </div>
    );
}

export default Meteo