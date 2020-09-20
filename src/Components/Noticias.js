import React, { useState, useEffect } from 'react';
import { categorias, getApiUrl, paises } from './config';
import ListaNoticias from './ListaNoticias';


import './style.css';
const alEspaniol = {
    'business': 'Negocios',
    'entertainment': 'Entretenimiento',
    'general': 'General',
    'health': 'Salud',
    'science': 'Ciencia',
    'sports': 'Deportes',
    'technology': 'Tecno',
}
const paisesLarge = {
    
    'ar': 'Argentina',
  
    'br': 'Brasil',
    'ca': 'Canada',
    'fr': 'Francia',
    'gb': 'Inglaterra',
    'it': 'Italia',
    'jp': 'Japon',
    'ru': 'Rusia',
    'us': 'Estados Unidos',
    've': 'Venezuela',
    


}


const Noticias = () => {
    const [categoria, setCategoria] = useState('general');
    const [pais, setPais] = useState('ar');
    const [listaNoticias, setListaNoticias] = useState([]);




    useEffect(() => {
        fetchNoticia();
    }, [categoria])



    const fetchNoticia = () => {
        fetch(getApiUrl(categoria, pais))
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                setListaNoticias(myJson.articles);
            });
    };

    console.log(listaNoticias);
    return (
        <div >
            <div className="titulo">
                <h1><strong>Alertas Corona Virus</strong></h1>
            </div>
            <div className="input-sec">
                <h2> Seccion de noticias</h2>
                <form onSubmit={evt => evt.preventDefault()}>
                    <label id="label">Seleccione el pais</label>
                    <select name="pais" onChange={evt => setPais(evt.target.value)} custom>
                        <option value=""></option>{
                            paises.map(option => (
                                <option value={option} selected={pais === option}>{paisesLarge[option]}</option>
                            ))
                        }
                    </select>
                    <label id="label">Seleccione la seccion</label>

                    <select name="categoria" onChange={evt => setCategoria(evt.target.value)} custom>

                        {

                            categorias.map(option => (
                                <option value={option} selected={categoria === option}>{alEspaniol[option]} </option>

                            ))
                        }
                    </select>


                </form>
            </div>

            <ListaNoticias noticias={listaNoticias} />


        </div >



    );


}

export default Noticias;