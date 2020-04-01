import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ListaNoticias = ({ noticias }) => (

   

    <div className="listaNoticias">
        {noticias.map(
            
                ({ title, descripcion, content, urlToImage, url }) => (
                    

                    <Card clasName="card">
                        <Card.Img variant="top" src={urlToImage} alt={title} />
                        <Card.Body>
                            <Card.Title><h2>{title}</h2></Card.Title>
                            <Card.Text>
                                <h4>{descripcion}</h4>

                                <div>{content}</div>

                            </Card.Text>
                            <div className="vinculo">
                                <Button variant="danger"><a href={url} target="_blank" rel="noopener noreferrer"><p>Ver mas...</p> </a></Button>
                            </div>
                        </Card.Body>
                    </Card>

                )
                )}

    </div>

)

export default ListaNoticias; 