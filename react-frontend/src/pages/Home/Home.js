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

const backendUrl = "http://127.0.0.1:5000/"

let items;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: CARDS,
      selectedCard: null,
        results: [],
        item_cards: [],
    };
    items = new Array();
    this.search = this.search.bind(this);
    // this.imageClicked = this.imageClicked.bind(this);
  }

  array_chunk(arr, size) {

    var result = [];
    var slice = Array(size);
    var count =1;

    for (let elem in arr) {
        slice.push(elem);

        count++;
        if(count%(size+1) == 0){

           result.push(slice);
           slice = Array(size);
        }
    }
    result.push(slice);
    return result;
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
        items = jresponse.products
      this.setState({requestText: jresponse.products.toString()})
        this.setState({results: jresponse.products})
        this.createCards()
    })).catch((error) => {
      console.log("ERROR")
      console.error(error)
    })
  };

  createCards() {
      let results = this.state.requestText.split(",")

    for (let result in results){
        console.log("results are: " + result)
    }

  }

  search() {
      fetch(backendUrl+"filter?sort=0&brands=0&page=0")
      .then((response) => response.json())
      .then((jsonData) => {
          // jsonData is parsed json object received from url
          console.log('data parsed')
          console.log(jsonData)
          items = jsonData.products;
          this.setState({name : "Updated"});
      })
      .catch((error) => {
          console.log("api request error")
          // handle your errors here
          console.error(error)
          return;
      });
  }

  render() {
    const rows = this.array_chunk(items,5);
    return (
      <div id="home">
        <ButtonToolBar class="btn_bar">
          <DropdownButton class="dropdown" title="Sort by" variant="secondary">
            <DropdownItem as="button">Price: Low to High</DropdownItem>
            <DropdownItem as="button">Price: High to Low</DropdownItem>
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
          <Button onClick={this.search}>Search</Button>
        </ButtonToolBar>
        <hr />
          {/* <Items card={this.state.cards} /> */}

        <div class="inputGroup">
          <input id="uploadImg" type="file" onChange={this.fileUploadHandler} hidden/>
              <Button type="button" variant="secondary" onClick={this.uploadClick.bind(this)}>Upload
              </Button>
        </div>

        <br />
        <Container>
            {
                !(items == undefined || items.length == 0 ) &&
                    rows.map((row) => (
                        <Row>
                        {
                            row.map((col) => (
                                <Col>
                                <Card style={{ width: '13rem' }}>
                                  <Card.Img variant="top" src={"//"+items[col].img} />
                                  <Card.Body>
                                    <Card.Title>{items[col].name}</Card.Title>
                                    <Card.Text>
                                    <p>{items[col].description}</p>
                                    </Card.Text>
                                    <p>{items[col].price}</p>
                                  </Card.Body>
                                </Card>
                                </Col>
                            ))
                        }
                        </Row>
                    ))

            }
        </Container>
          <div className="upload">
              <input id="uploadImg" type="file" onChange={this.fileUploadHandler} hidden/>
              <button type="button" className="btn btn-outline-dark" onClick={this.uploadClick.bind(this)} hidden>Upload
              </button>
              <button type="button" className="btn btn-outline-dark" onClick={this.tempGet.bind(this)} hidden>SEND GET
                  REQUEST
              </button>
              <button type="button" className="btn btn-outline-dark" onClick={this.tempPost.bind(this)} hidden>SEND POST
                  REQUEST
              </button>
              <button type="button" className="btn btn-outline-dark"  hidden>{this.state.requestText}</button>
              {/* <img src={require(this.state.selectedFile)} /> */}
          </div>
      </div>

    );
  }
}

export default Home;
