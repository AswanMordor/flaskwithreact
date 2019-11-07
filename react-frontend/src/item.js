import React, { Component } from 'react';
import firebase from "./firebase";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// export default class Item extends Component {
//   constructor() {
//     this.state = {
//       url:'',
//       name: '',
//       brand: '',
//       price: '',
//       size: '',
//       picURL: ''
//     }
//   }
//   state={
//     photos:[]
//   }
//   componentDidMount(){
//     let images=[]
//     firebase.firestore().collection('Brands').get().then(function(querySnapshot) {
//       querySnapshot.forEach(function(element) {
//           // doc.data() is never undefined for query doc snapshots
//           let imageData={
//             url:element.data().url,
//             name: element.val().name,
//             brand: element.val().brand,
//             price: element.val().price,
//             size: element.val().size,
//             picURL: element.val().pic
//           }
//           images.push(imageData)

//       });
//   });
//   this.setState({ photos: images });
//   }

//   searchHandler(event) {
//     let eventVal = event.target.value;
//     console.log(eventVal);
    
//     const firestore = firebase.firestore();
//     const settings = {timestampsInSnapshots: true};
//     firestore.settings(settings);
    
//     const dbTemp = firebase.firestore()
//     const itemCards = dbTemp.collection('Brands')
    
//     const searches = creatureCards.where('${search}1', '==', eventValue).get()
//       .then(snapshot => {
//         this.setState({itemCards: snapshot.val()})
//       })
    
    
//         this.setState({photos: event.target.value})
//     }

//   render() {
//     const items=this.state.photos;

//     return (
//       <div className="container-fluid pt-3">
//       <div className="card-columns">
//       {items.map(i=>(
//       <Card>
//         <CardContent>
//           <img src={i.url} alt=""/>
//           <Typography component="p">{i.title}</Typography>
//           <Typography component="p">{i.price}</Typography>
//         </CardContent>
//       </Card>
//       ))}
//       </div>
//       </div>
//     )
//   }
// }

const styles = {
  card: {
    minWidth: 100,
    },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

/*

class Item
  constructor(props) {
    this.state = {
      name: props.name,
      brand: props.brand,
      price: props.price,
      size: props.size,
      src: props.pic
    };
  }
*/

function ItemCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
        <img
            src="https://lp2.hm.com/hmgoepprod?set=source[/69/0f/690fd09d690a8825af3a2bf429accac09669b3f8.jpg],origin[dam],category[men_shirts_dressed],type[DESCRIPTIVESTILLLIFE],res[z],hmver[4]&call=url[file:/product/main]" 
            />
          <Typography variant="headline" component="h2">
            Name of Item
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Brand
          </Typography>
          <Typography component="p">
            $5.00
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Link</Button>
        </CardActions>
      </Card>

      {/* 
      {itemList.map((item, index) => {
          return <Item
            didHandleRemove={this.handlePostRemove}
            dataCallback={this.handleDataCallback} />
        })} */}
    </div>
  );
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCard);