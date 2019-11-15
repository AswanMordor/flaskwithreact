import React, { Component } from "react";
import { DropdownButton, DropdownItem, Card, CardImg, Container, Row, Col, Button, InputGroup } from 'react-bootstrap';
// import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolBar from "react-bootstrap/ButtonToolbar";
import ItemList from "./Item";
import { CARDS } from "./cards";

import Immutable from 'immutable';

class Home extends Component {
  // state = {
  //   cards: CARDS
  // };
  constructor(props){
    super(props)
    this.state = {
      cards: CARDS,
    }
    this.sortByAsc = this.sortByAsc.bind(this);
    this.sortByDesc = this.sortByDesc.bind(this);
  }

  // sortByAsc = () => {
  //   this.setState(prevState => {
  //     this.state.cards.sort((a,b) => (a.price - b.price))
  //   });

  //   console.log("sorted")
  // }

  sortByAsc = () => {
    this.setState(prevState => ({
      cards: prevState.cards.sort((a,b) => a.price - b.price)
    }));

    console.log("sorted")
  }

  sortByDesc = () => {
    this.setState(prevState => ({
      cards: prevState.cards.sort((a,b) => b.price - a.price)
    }));

    console.log("sorted")
  }

  handleCheckClick = (clicked_id) => {
    const temp = this.state.cards
    var newArray = []
    switch(clicked_id){
      case "hm":
        // this.setState(prevState => ({
        //   cards: prevState.cards.filter((a) => a.brand == clicked_id)
        // }));
        // Immutable.map(this.state.cards).filter(this.state.cards.brand == clicked_id)
        newArray = temp.filter(a => a.brand != clicked_id)
        console.log("hm")

      case "gucci":
        // this.setState(prevState => ({
        //   cards: prevState.cards.filter((a) => a.brand != clicked_id)
        // }));
        newArray = temp.filter(a => a.brand != clicked_id)
      default:
        // this.setState({
        //   cards: CARDS
        // });
        newArray = CARDS
    }

    this.setState({
      cards: newArray
    })
  }

  componentDidMount() {
    this.setState(this.state.cards)
  }

  render() {
    return (
      <div>
        <ButtonToolBar class="btn_bar">
          <DropdownButton class="dropdown" title="Sort by" variant="secondary">
            <DropdownItem as="button" onClick={this.sortByAsc}>Price: Low to High</DropdownItem>
            <DropdownItem as="button" onClick={this.sortByDesc}>Price: High to Low</DropdownItem>
          </DropdownButton>
          <DropdownButton class="dropdown" title="Sizes" variant="secondary">
            {/* <DropdownItem>XS</DropdownItem> */}
            <div class="input-group-append">
              <div class="input-group-text">
                  <input type="checkbox" class="form-check-input ml-0" id="checkbox" />
                  <label class="form-check-label ml-5" for="exampleCheck1">XS</label>
              </div>
              <div class="input-group-text">
                  <input type="checkbox" class="form-check-input ml-0" id="checkbox" />
                  <label class="form-check-label ml-5" for="exampleCheck1">S</label>
              </div>
              <div class="input-group-text">
                  <input type="checkbox" class="form-check-input ml-0" id="checkbox" />
                  <label class="form-check-label ml-5" for="exampleCheck1">M</label>
              </div>
              <div class="input-group-text">
                  <input type="checkbox" class="form-check-input ml-0" id="checkbox" />
                  <label class="form-check-label ml-5" for="exampleCheck1">L</label>
              </div>
              <div class="input-group-text">
                  <input type="checkbox" class="form-check-input ml-0" id="checkbox" />
                  <label class="form-check-label ml-5" for="exampleCheck1">XL, XXL</label>
              </div>
            </div>
          </DropdownButton>
          <DropdownButton class="dropdown" title="Brands" variant="secondary">
          <div class="input-group-append">
              <div class="input-group-text">
                  <input type="checkbox" class="form-check-input ml-0" id="hm" onClick={ e => this.handleCheckClick(e.target.id)} />
                  <label class="form-check-label ml-5" for="checkbox">HM</label>
              </div>
              <div class="input-group-text">
                  <input type="checkbox" class="form-check-input ml-0" id="gucci" onClick={ e => this.handleCheckClick(e.target.id)}/>
                  <label class="form-check-label ml-5" for="checkbox">Gucci</label>
              </div>
            </div>
          </DropdownButton>
        </ButtonToolBar>
        <hr />
          {/* <Items card={this.state.cards} /> */}
        
        {/* upload file */}
        <div class="inputGroup">
          <input type="file"/>
          <Button variant="secondary">
            Submit
          </Button>
        </div>

        <br />
        <div class="home">
          <Row>
            {this.state.cards.map(item => (
              <Col>
                {
                  <ItemList key={item.id} item={item} price={item.price}/>
                }
                </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
