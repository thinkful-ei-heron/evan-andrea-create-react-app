import React from 'react';
import './list.css'
import Card from './Card'

list.defaultProps = {
    card: []
}

function list(props) {
    return (
        <section className="List"> 
            <header className="List-header"> 
                <h2>{props.header}</h2> 
            </header> 
        <div className="List-cards"> 
        {props.card.map ((card) =>
            <Card
            key={card.id}
            title={card.title}
            content={card.content}/>)}
            <button type="button" className="List-add-button">
              + Add Random Card
            </button>
        </div>
        </section>
    )
}

export default list;