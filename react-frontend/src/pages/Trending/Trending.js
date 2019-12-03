import React, { Component } from "react";
import { DropdownButton, DropdownItem, Card, Container, Row, Col, Button, InputGroup, Jumbotron } from 'react-bootstrap';
// import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolBar from "react-bootstrap/ButtonToolbar";
import Items from "./Items";

import "./trending.css";

const backendUrl = "https://fitfinderstatic.appspot.com/"

let items;


class Trending extends Component {

    constructor(props){
        super(props);
        console.log("top of constructor");
        items = new Array();
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



    render(){

        if(items == undefined || items.length == 0 ){

            fetch(backendUrl+"trendingUpdate")
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                console.log('dataRecieved')
                items = jsonData.products;
                this.setState({name : "Updated"});
            })
            .catch((error) => {
                console.log("api request error")
                // handle your errors here
                console.error(error)
            });
            return (<div id="trending">Loading...</div>);
        }
        else{
            const rows = this.array_chunk(items, 4);

            console.log("rendering");

            return (
                <div class='trending'>
                    <Jumbotron style={{backgroundColor: 'transparent'}}>
                        <Container>
                            <h1 className="display-3" style={{fontWeight: 'bolder', color: '#bd955b'}}>TRENDING</h1>
                        </Container>
                    </Jumbotron>
                    {/* style={{ justifyContent: 'center', fontStyle: 'italic', margin: '10px', color: '#bd955b', fontWeight:'bold' }} */}
                    <Container>
                    {
                        rows.map((row) => (
                            <Row>
                            {
                                row.map((col) => (
                                    <Col>
                                    <Card style={{ width: '15rem', height: '35rem', margin: '5px', flexDirection: 'row', flexWrap: 'wrap' }}>
                                      <Card.Img variant="top" src={"//"+items[col].img} />
                                      <Card.Body>
                                        <Card.Title>{items[col].name}</Card.Title>
                                        <Card.Text>
                                            Likes {items[col].likes}
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
                </div>
            );
        }

    }




}

export default Trending;
