import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import anna from './img/anna-bio.png';
import andy from './img/andy-bio.png';
import neel from './img/neel-bio.png';
import eric from './img/eric-bio.png';
import sam from './img/sam-bio.png';
import usman from './img/usman-bio.png';
import "./css/about.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class About extends React.Component{

  render(){
    return(
      <div>
        <h1>About FitFinder</h1>
        <br />
        <Container >
          <p style={{textAlign:"center"}}>
          Our vision for Fit Finder is that it will be able to make the process of finding new clothing fits easier and intuitive. Because fashion is a constantly evolving industry, it can be challenging to keep up and finding personal style can be even more difficult because there are so many different styles. Whether an individual is someone who wants to get into fashion, or someone who wants to try new things, everyone can use a little help with the process. Our application will scrape various clothing websites for products of various styles and store it in a database that users can reference when they execute a search. Our product will incorporate a social feature in addition to our database. Users can post their current fits or ideas to get feedback from others, and similarly can view other posts to get inspiration and give feedback. Currently, existing alternatives are going to social media sites like Reddit, Pinterest, or Instagram to get/give critique/inspiration, or some websites that help you find products such as Google. There doesn’t exist an application that combines both of these features. Google’s product search is not specific enough to clothing to be useful. This product is worth developing because nowadays, fashion is becoming more and more popular but can be difficult to get into or evolve in. As an art form, it is extremely diverse and almost limitless. We want to provide a platform where individuals have the resources and support to really find their version of self-expression.
          </p>
        </Container>
        <br />
        <hr />
        <br />
        {/* <Carousel>
          <Carousel.Item id="carItem">
            <img width="auto" height={500}
              src={neel}
                alt="neel"
                // class="img-fluid"
              />
            <Carousel.Caption>
              <h3>Neel</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item id="carItem">
            <img
              src={anna}
                alt="anna"
                width="auto" height={500}
                // class="img-fluid"
              />
            <Carousel.Caption>
              <h3>second slide</h3>
              <p>Hello</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item id="carItem">
            <img
              src={eric}
                alt="eric"
                width="auto" height={500}
                // class="img-fluid"
              />
            <Carousel.Caption>
              <h3>second slide</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item id="carItem">
            <img
              src={andy}
                alt="andy"
                width="auto" height={500}
                // class="img-fluid"
              />
            <Carousel.Caption>
              <h3>second slide</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item id="carItem">
            <img
              src={sam}
                alt="sam"
                width="auto" height={500}
                // class="img-fluid"
              />
            <Carousel.Caption>
              <h3>second slide</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item id="carItem">
            <img
              src={usman}
                alt="usman"
                width="auto" height={500}
                // class="img-fluid"
              />
            <Carousel.Caption>
              <h3>second slide</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        <Container>
        <div>
          <Container>
          <img width="auto" height={500}
              src={neel}
                alt="neel"
                // class="img-fluid"
              />
              <h1>Neel Drain</h1>
            <p>Front-End</p>
            <p>Commits: 13, Issues: 0, Unit Tests: 0</p>
          </Container>
          <Container>
            <img
              src={anna}
                alt="anna"
                width="auto" height={500}
                // class="img-fluid"
            />
            <h1>Anna Sim</h1>
            <p>Front End</p>
            <p>Commits: 12, Issues: 0, Unit Tests: 0</p>
          </Container>
          </div>

          <div>
          <Container>
            <img
              src={eric}
                alt="eric"
                width="auto" height={500}
                // class="img-fluid"
            />
            <h1>Eric Luo</h1>
            <p>Back End</p>
            <p>Commits: 1, Issues: 0, Unit Tests: 0</p>
          </Container>
          </div>

          <Container>
            <img
              src={andy}
                alt="andy"
                width="auto" height={500}
                // class="img-fluid"
            />
            <h1>Andy Prevalksy</h1>
            <p>Back End</p>
            <p>Commits: 0, Issues: 0, Unit Tests: 0</p>
          </Container>


          <Container>
            <img
              src={sam}
                alt="anna"
                width="auto" height={500}
                // class="img-fluid"
            />
            <h1>Sam Wang</h1>
            <p>Back End</p>
            <p>Commits: 0, Issues: 0, Unit Tests: 0</p>
          </Container>

          <Container>
            <img
              src={usman}
                alt="anna"
                width="auto" height={500}
                // class="img-fluid"
            />
            <h1>Usman Farooqi</h1>
            <p>Back End</p>
            <p>Commits: 2, Issues: 0, Unit Tests: 0</p>
          </Container>

        </Container>

        <hr />
        <br />
        <div>
        <h1>Tools Used</h1>
          <p>SASS as a CSS pre-processor tomake styling easier, UIKit as a web framework to make layout and syling easier</p>
          <p>Front-end created in VSCode editor with liveCode and watch sass plugins</p>
          <p>The scraper works by sending a GET request to H&M's view all clothing page, which gives us the links for each individual item. In this GET request we pass headers taken from Chrome's network tab to simulate an actual user accessing the website and to bypass a security check. We then scrape the html of the view all page, checking for all links with the string "productpage" in the url, these are the links to actual products. From there we concatenate the url with the H&M base domain url to access the individual pages themselves, and rip the image links for the image that is just a picture of the clothing. Finally we scrape the product name and price and store all the data for batch-writing to the Firebase database.</p>
          <p>
            <a href="https://www2.hm.com/en_us/men/products/view-all.html">
            Our data source</a>
          </p>
          <p>Python requests (used to make api requests) and Python beautifulsoup (used to parse html of request response)</p>
          <h1>Github Repo</h1>
          <p> <a href="https://github.com/usmanhf/FitFinder">Our FitFinder Github</a> </p>
        </div>
      </div>
    );
  }
}

export default About;