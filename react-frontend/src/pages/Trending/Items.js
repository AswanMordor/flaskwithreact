import React from 'react';
import { Card, CardImg } from 'reactstrap';

class Items extends React.Component {
    renderCard(card) {
        return(
            <Card>
                <CardImg src={card.image} alt={card.name} />
            </Card>
        )
    }

    renderInfo(card) {
        return (
            <ul>
                <li>
                    <h3>Name: </h3>
                    <div>{card.name}</div>
                </li>
            </ul>
        )
    }

    render() {
        const card = this.props.card;
        return (
            <div className="cardInfo p-4">
                <div className="row">
                    <div className="col-12 col-md-5">
                        {this.renderCard(card)}
                    </div>
                    <div className="col-12 col-md-5">
                        <h4>Item Information</h4>
                        {this.renderInfo(card)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Items;