import React from "react";
import { Card, InputGroup, FormControl } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import "./css/sidenav.css";
import Typography from "@material-ui/core/Typography";
import "./RangeSlider";
import RangeSlider from "./RangeSlider";
import SizeSlider from "./SizeSlider";

class SideNav extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.reverseList = this.reveresList.bind(this)
  //   this.state = {
  //     itemList: [],
  //   }
  // }

  // sortList (event){
  //   const {itemList} = this.state;
  //   let newItemList = itemList.sort();
  //   this.setState({
  //     itemList: newItemList
  //   })
  // }

  // reverseList (event) {
  //   const {itemList} = this.state
  //   let newItemList = itemList.reverse()
  //   this.setState({
  //     itemList: newItemList
  //   })
  // }
  // submitHandler = (e) => {
  //   // console.log(document.getElementById("search"));
  //   alert("submitted");
  //   e.preventDefault();
  //   const searched = this.refs.search.value;
  //   console.log(searched);
  // }

  // componentDidMount () {
  //   // const itemtList = ITEM_ARRY
  //   this.setState({
  //     itemList: itemList
  //   })
  // }
  state = {
    items: []
  }
  
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
{/* style={{color:"black", backgroundColor:"lightgray", border:"none", textAlign:"left"}} */}
          <li>Sort By</li>
          <li>
            <Button class="propButton" href="#">Brand A-Z</Button>
          </li>
          <li>
            <Button class="propButton" href="#">Brand Z-A</Button>
          </li>
          <li>
            <Button class="propButton" href="#">Size S-XXL</Button>
          </li>
          <li>
            <Button class="propButton" href="#">Size XXL-S</Button>
          </li>
          <li>
            <Button class="propButton" href="#">Price Low to High</Button>
          </li>
          <li>
            <Button class="propButton" href="#">Price High to Low</Button>
          </li>
          <hr/>

          <li>Filter By</li>
          <li>
            <Typography>Price $0 - $10,000</Typography>
            {/* <Slider 
              value={value}
              onChange={this.handlePriceChange}
              valueLabelDisplay="auto"
              aira-labelledby="range-slider"
              getAriaValueText={valueText}
            /> */}
            <RangeSlider />
          </li>
          <li>
            <Typography>Size S-XXL</Typography>
            {/* <Slider 
              value={value}
              onChange={this.handleChange}
              valueLabelDisplay="auto"
              aira-labelledby="range-slider"
              getAriaValueText={valueText}
            /> */}
            <SizeSlider />
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
