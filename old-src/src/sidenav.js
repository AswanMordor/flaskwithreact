import React from "react";
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import "./css/sidenav.css";
import {Item, ItemCard } from './item';

class SideNav extends React.Component {

  state = {
    items: []
  }

  // sortItemsBy(prop){
  //   switch(prop){
  //     case 'a_z':
  //       return items.sort();
  //   }
  // }
  
  submitHandler = (e) => {
    // console.log(document.getElementById("search"));
    alert("submitted");
    e.preventDefault();
    const searched = this.refs.search.value;
    console.log(searched);
  }

  sortItemsBy = (items) => {
    var sortedItems = items.sort( (a,b) => {
      if(a.name > b.name) {
        return 1;
      }
      if(a.name < b.name){
        return -1;
      }
      return 0;
    });

    this.setState("items", sortedItems);
  }

  render() {
    return (
      <div class="sidenav">
        <ul>
          <li>Find My Fit</li>
          <hr/>

          <li>Search</li>
          <form onSubmit={this.submitHandler}>
            <InputGroup size="sm">
              <FormControl ref="search" placeholder="Search..." onSubmit={this.submitHandler} />
            </InputGroup>
          </form>
          <hr/>

          <li>Sort By</li>
          <li>
            <Button id="a_z" style={{color:"black", backgroundColor:"lightgray", border:"none", textAlign:"left"}} href="/sort/a-z" onClick={this.sortItemsBy}>Brand A-Z</Button>
          </li>
          <li>
            <Button id="z_a" style={{color:"black", backgroundColor:"lightgray", border:"none", textAlign:"left"}} class="propButton" href="/sort/z-a">Brand Z-A</Button>
          </li>
          <li>
            <Button id="s_xxl" style={{color:"black", backgroundColor:"lightgray", border:"none", textAlign:"left"}} class="propButton" href="#">Size S-XXL</Button>
          </li>
          <li>
            <Button id="xxl_s" style={{color:"black", backgroundColor:"lightgray", border:"none", textAlign:"left"}} class="propButton" href="#">Size XXL-S</Button>
          </li>
          <li>
            <Button id="lo_hi" style={{color:"black", backgroundColor:"lightgray", border:"none", textAlign:"left"}} class="propButton" href="#">Price Low to High</Button>
          </li>
          <li>
            <Button id="hi_lo" style={{color:"black", backgroundColor:"lightgray", border:"none", textAlign:"left"}} class="propButton" href="#">Price High to Low</Button>
          </li>
          <hr/>

          <li>Filter By</li>
          <li>
            <label>
              Price $0-$10,000
              <input
                id="price-range"
                type="range"
                value="2"
                min="0"
                max="10000"
                step="20"
              />
            </label>
          </li>
          <li>
            <label>
              Size S-XXL
              <input
                id="size-range"
                type="range"
                value="2"
                min="0"
                max="4"
                step="1"
              />
            </label>
          </li>
          <hr/>

          <li>Brand</li>
          <li>
            <a href="#">Aeropostale</a>
          </li>
          <li>
            <a href="#">Calvin Klein</a>
          </li>
          <li>
            <a href="#">Gucci</a>
          </li>
          <li>
            <a href="#">Versace</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideNav;
