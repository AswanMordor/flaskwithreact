import React, { Component } from "react";
import { DropdownButton, DropdownItem, Card, CardImg, Container, Row, Col, Button, InputGroup } from 'react-bootstrap';
// import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolBar from "react-bootstrap/ButtonToolbar";
import Items from "./Items";
import { CARDS } from "./cards";

import image1 from "../../products/dress.jpeg";
import image2 from "../../products/white blouse.jpeg";
import image3 from "../../products/sweatpants.jpeg";
import image4 from "../../products/knit_dress.jpeg";

const backendUrl = "https://fitfinderstatic.appspot.com/"
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: CARDS,
      selectedCard: null,
    };

    // this.imageClicked = this.imageClicked.bind(this);
  }

  cardSelect(cardId){
    this.setState({ selectedCard: cardId });
  }

  uploadClick() {
    document.getElementById("uploadImg").click()
  }

  tempGet() {
    fetch(backendUrl+"temp", {
      method: 'GET'
    }).then(response => response.json().then(jresponse => {
      console.log(jresponse)
      this.setState({requestText: jresponse.res})
    })).catch(() => {
      console.log("ERROR")
    })
}

  tempPost() {
    fetch(backendUrl+"temp", {
      method: 'POST'
    }).then(response => response.json().then(jresponse => {
      console.log(jresponse)
      this.setState({requestText: jresponse.res})
    })).catch(() => {
      console.log("ERROR")
    })
  }


  state = {
    selectedFile: null
  }

  fileUploadHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
      const data = new FormData();
    data.append('file', event.target.files[0]);
    //data.append('filename', this.fileName.value);
    //console.log(event.target.files[0])
    fetch(backendUrl+"productSearch", {
      method: 'POST',
      body: data
    }).then(response => response.json().then(jresponse => {
      this.setState({requestText: jresponse.results.toString()})
    })).catch(() => {
      console.log("ERROR")
    })
  };

  render() {
    return (
      <div id="home">
        <ButtonToolBar class="btn_bar">
          <DropdownButton class="dropdown" title="Sort by" variant="secondary">
            <DropdownItem as="button">Price: Low to High</DropdownItem>
            <DropdownItem as="button">Price: High to Low</DropdownItem>
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
                  <input type="checkbox" class="form-check-input ml-0" id="checkbox" />
                  <label class="form-check-label ml-5" for="checkbox">HM</label>
              </div>
              <div class="input-group-text">
                  <input type="checkbox" class="form-check-input ml-0" id="checkbox" />
                  <label class="form-check-label ml-5" for="checkbox">Calvin Klein</label>
              </div>
            </div>
          </DropdownButton>
        </ButtonToolBar>
        <hr />
          {/* <Items card={this.state.cards} /> */}
        
        <div class="inputGroup">
          <input type="file"/>
          <Button variant="secondary">
            Submit
          </Button>
        </div>

        <br />
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Black Dress</Card.Title>
                  <Card.Text>
                    Long, black dress
                  </Card.Text>
                  <p>$15.99</p>
                </Card.Body>
              </Card>
          </Col>
          
          <Col>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title>White Blouse</Card.Title>
                  <Card.Text>
                    Silky, white blouse
                  </Card.Text>
                  <p>$15.99</p>
                </Card.Body>
              </Card>
          </Col>
          <Col>
          <Card style={{ width: '13rem' }}>
              <Card.Img variant="top" src={image3} />
                <Card.Body>
                  <Card.Title>Sweatpants</Card.Title>
                  <Card.Text>
                    Gray, elastic sweatpants
                  </Card.Text>
                  <p>$17.99</p>
                </Card.Body>
              </Card>
          </Col>
          <Col>
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src={image4} />
              <Card.Body>
                <Card.Title>Brown knit dress</Card.Title>
                <Card.Text>
                  Knee-cap length dress 
                </Card.Text>
                <p>$15.99</p>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
          <div className="upload">
              <input id="uploadImg" type="file" onChange={this.fileUploadHandler} hidden/>
              <button type="button" className="btn btn-outline-dark" onClick={this.uploadClick.bind(this)}>Uploadd
              </button>
              <button type="button" className="btn btn-outline-dark" onClick={this.tempGet.bind(this)}>SEND GETt
                  REQUEST
              </button>
              <button type="button" className="btn btn-outline-dark" onClick={this.tempPost.bind(this)}>SEND POST
                  REQUEST
              </button>
              <button type="button" className="btn btn-outline-dark">{this.state.requestText}</button>
              {/* <img src={require(this.state.selectedFile)} /> */}
          </div>
      </div>

    );
  }
}

export default Home;
