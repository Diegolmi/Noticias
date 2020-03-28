import React, { Component } from 'react';
import { categorias, getApiUrl } from './config';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './style.css';
class Noticias extends Component {
    constructor() {
        super();
        this.state = {
            categoria: '',
            listaNoticias: []
        }

    }

    componentDidMount() {
        this.fetchNoticia();
    }

    seleccionarCategoria = evt => {
        this.setState({ categoria: evt.target.value }, this.fetchNoticia);
    }

    fetchNoticia = () => {
        fetch(getApiUrl(this.state.categoria))
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.setState({ listaNoticias: myJson.articles })

            });
    }

    render() {
        return (
            <div >
                <div className="titulo">
                <h1><strong>Alertas Corona Virus</strong></h1></div>
                <div className="input-sec">
                    <h2> Seccion de noticias</h2>
                <form onSubmit={evt => evt.preventDefault()}>
                    <select name="categoria" onChange={this.seleccionarCategoria}>
                        <option value="">Seccion</option>
                        {

                            categorias.map(option => (
                                <option value={option}>{option} </option>

                            ))
                        }
                    </select>


                </form>
                </div>
                <div className="listaNoticias">
                    {

                        this.state.listaNoticias.map(noticia => (
                            
                                    <Card clasName="card">
                                        <Card.Img variant="top" src={noticia.urlToImage} alt={noticia.title} />
                                        <Card.Body>
                                            <Card.Title><h2>{noticia.title}</h2></Card.Title>
                                            <Card.Text>
                                                <h4>{noticia.descripcion}</h4>

                                                <div>{noticia.content}</div>

                                            </Card.Text>
                                            <Button variant="primary"><a href={noticia.url} target="_blank" rel="noopener noreferrer">Ver mas... </a></Button>
                                        </Card.Body>
                                    </Card>
                                
                        ))
                    }
                </div>
            </div >


        );
    }

}

export default Noticias;