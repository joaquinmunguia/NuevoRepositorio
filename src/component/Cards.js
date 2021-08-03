import React from 'react'
import Card from './Card'
import ventiladorLasko from "../fotos/ventiladorLasko.jpg"
import heladera from "../fotos/heladera.jpg"
import card from './Card'
const cards = [
    {
        id: 1,
        titulo: 'ventilador',
        image: ventiladorLasko,
        Text: ventilador
    },
    {
        id:2,
        titulo:'heladera',
        image: heladera,
        Text: heladera
    }





]

function cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            
            <div class="row">
            {
                cards.map(card => (
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" key={card.id}>
                    <Card title={card.title} imageSource={card.image} text={card.text}/>
                    </div>
                ))



            }
          
            
            
            </div>
        </div>
    )
}

export default cards
