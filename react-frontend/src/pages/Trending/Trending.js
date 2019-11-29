import React, { Component } from "react";
import { DropdownButton, DropdownItem, Card, Container, Row, Col, Button, InputGroup } from 'react-bootstrap';
// import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolBar from "react-bootstrap/ButtonToolbar";
import Items from "./Items";




const backendUrl = "http://127.0.0.1:5000/"

let items;


class Trending extends Component {

    constructor(props){
        super(props);
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
            return (<div id="trending"></div>);
        }
        else{
            const rows = this.array_chunk(items,5);

            console.log("rendering");

            return (
                <div id="trending">
                    <Container>
                    {
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
