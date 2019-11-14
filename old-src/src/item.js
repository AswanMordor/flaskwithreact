import React from 'react';
import { Card } from 'react-bootstrap';

class Item extends React.Component{
  constructor(props) {
    this.state = {
      name: props.name,
      brand: props.brand,
      price: props.price,
      size: props.size,
      picURL: props.pic
    };
  }
}

var ITEMS = [{
  name: "T-shirt with Printed Design",
  brand:"H&M",
  price:17.99,
  size: "S",
  picURL:"https://lp2.hm.com/hmgoepprod?set=source[/c6/5b/c65b5bc3901ded4d45c5ba20ef54649a7b2bb800.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]"
},
{
  name:"Patterned Muscle Fit T-shirt",
  brand: "H&M",
  price: 14.99,
  size: "M",
  picURL: "https://lp2.hm.com/hmgoepprod?set=source[/cd/60/cd60e92aee6f9c90c4a81c0be2c0ee9117bc0bfc.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]"
},
{
  name: "Oversize washed T-shirt with Gucci logo",
  brand: "GUCCI",
  price: 480,
  size: "L",
  picURL: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1537902006/440103_X3F05_1508_001_100_0000_Light-Oversize-washed-T-shirt-with-Gucci-logo.jpg"
}
];


class ItemCard extends React.Component{
  render(){
    return(
    <Card className="itemCard">
      <figure>
        <img src={this.props.Item.picURL} alt={this.props.Item.name} />
        <article>
          <ul>
            <li>{this.props.Item.name}</li>
            <li>{this.props.Item.brand}</li>
            <li>{this.props.Item.price}</li>
            <li>{this.props.Item.size}</li>
          </ul>
        </article>
      </figure>
    </Card>
    );
  }
}

class Results extends React.Component {
  render(){
    var items = [];
    for( var i = 0; i < ITEMS.length; i++){
      items.push(<ItemCard />);
    }

    return(<div>items</div>);
  }
}

export default Results;