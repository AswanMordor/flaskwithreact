import React from "react";
import SideNav from "./sidenav";
import "./css/findmyfit.css";
import ImageUpload from "./ImageUpload";
import Item from "./item";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { sizing } from '@material-ui/system';
import ItemCard from './item';

import firebase from 'firebase'

class FindMyFit extends React.Component {

  // constructor() {
  //   super()

  //   this.app = firebase.initializeApp(firebaseConfig);
  //   this.storage = this.app.storage().ref();

  // }



  render() {
    return (
      <div class="content">
      <div>
        <SideNav />
        </div>
        {/* <Box width={1/2} height={1/2} style={{justifyContent: "center", alignItems: "center"}}>
          <ImageUpload />
        </Box> */}

        <Grid container justify="center" alignItems="baseline" >
          <ImageUpload />
        </Grid>

        <Grid container item xs={12} justify="center" direction="row" alignItems="center" spacing={3} style={{zIndex: 70}}>
          <Grid item md={3}>
            <ItemCard />
          </Grid>
          <Grid item md={3}>
            <ItemCard />
          </Grid>
          <Grid item md={3}>
            <ItemCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FindMyFit;
