import React, {Component} from 'react';
import { Card } from 'reactstrap';
import {CARDS} from './cards';
import "../../styles/item.css";

const styles = {height: "auto", width:"13rem"};

const ItemList = ({ item }) => (
    <div class="item">
        {/* <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <p>{item.price}</p>
            </Card.Body>
        </Card> */}
        <img src={item.image} alt={item.name} />
        <h4>{item.name}</h4>
        <h5>${item.price}</h5>
    </div>
);

export default ItemList;