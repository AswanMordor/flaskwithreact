import React, { Component } from "react";
// import "./about-page.css";
import {
  Card,
  CardImg,
  CardText,
  Container,
  CardDeck,
  CardHeader,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

import Anna from "./images/anna.png";
import Andy from "./images/andy.png";
import Eric from "./images/eric.png";
import Neel from "./images/neel.png";
import Sam from "./images/sam.png";
import Usman from "./images/usman.png";

const contributorInfo = {
  ahs996: {
    name: "Anna Sim",
    image: Anna,
    username: "ahs996",
    major: "Electrical & Computer Eng.",
    bio: "Anna is a third year Electrical & Computer Engineering student. She plans to be a front-end developer or UI/UX Designer after graduating college.",
    responsibilities: "Front-End"
  },
  andyprevalsky: {
    name: "Andy Prevalsky",
    image: Andy,
    username: "andyprevalsky",
    major: "Electrical & Computer Eng.",
    bio: "Andy is a third year Electrical & Computer Engineering student. Andy enjoys working on personal projects especially at hackathons.",
    responsibilities: "Backend: Google Vision and Scraper"
  },
  EricLuoF: {
    name: "Eric Luo",
    image: Eric,
    username: "EricLuoF",
    major: "Electrical & Computer Eng.",
    bio: "Eric is a fourth year Electrical & Computer Engineering student.",
    responsibilities: "Tests"
  },
  AswanMordor: {
    name: "Neel Drain",
    image: Neel,
    username: "AswanMordor",
    major: "Electrical & Computer Eng.",
    bio: "Neel is a fourth year Electrical & Computer Engineering student.",
    responsibilities: "Deployment and Tests"
  },
  "sam-jwang": {
    name: "Sam Wang",
    image: Sam,
    username: "sam-jwang",
    major: "Electrical & Computer Eng.",
    bio:
      "Sam is a 3rd year computer engineering student at UT. Sam has plans to become a software engineer after graduating. Sam enjoys music and playing ultimate frisbee.",
    responsibilities: "Full-Stack"
  },
  usmanhf: {
    name: "Usman Farooqi",
    username: "usmanhf",
    image: Usman,
    major: "Electrical & Computer Eng.",
    bio: "Usman is a 3rd year computer engineering student at UT. Usman plans to become a software engineer after graduating. Usman enjoys working on creative projects, and his hobbies include drawing, painting, and playing video games with his freinds.",
    responsibilities: "Full-Stack"
  }
};

const defContributorStats = {
  andyprevalsky: {
    commits: 0,
    issues: 0,
    unitTests: 2
  },
  "sam-jwang": {
    commits: 0,
    issues: 0,
    unitTests: 2
  },
  usmanhf: {
    commits: 0,
    issues: 0,
    unitTests: 2
  },
  ahs996: {
    commits: 0,
    issues: 0,
    unitTests: 2
  },
  EricLuoF: {
    commits: 0,
    issues: 0,
    unitTests: 2
  },
  AswanMordor: {
    commits: 0,
    issues: 0,
    unitTests: 2
  }
};

class About extends Component {
  state = {
    contributorStats: defContributorStats,
    issuesTotal: 0,
    commitsTotal: 0,
    unitTestsTotal: 0
  };

  contributorKeys = [
    "andyprevalsky",
    "sam-jwang",
    "usmanhf",
    "ahs996",
    "EricLuoF",
    "AswanMordor"
  ];

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchGithubStats();
  }

  attemptFetch = async (url, n) => {
    let error;
    try {
      // fetch() and json() are asynchronous
      // we use await to make the main thread wait until the asynchronous thread terminates and returns a value
      const response = await fetch(url); // make get request to url and wait until response is returned
      console.log("fetch response", response);
      // if (response.status === 200) {
      const data = await response.json(); // convert response to a json object and wait until the data is returned
      console.log("data", data);
      return data;
      // }
    } catch (err) {
      error = err;
    }
    throw error;
  };

  async fetchCommits() {
    let commitsTotal = 0;
    const url =
      "https://api.github.com/repos/AswanMordor/flaskwithreact/stats/contributors";

    try {
      const data = await this.attemptFetch(url, 3);
      // loop through array
      console.log("fetchCommits", data);
      data.forEach(contributor => {
        // for each element in array (contributor is the variable for the element)
        // do something
        const username = contributor.author.login;
        defContributorStats[username].commits = contributor.total;
        commitsTotal += contributor.total;
        console.log("Contributor", defContributorStats[username]);
      });

      this.setState({ commitsTotal });
    } catch (err) {
      console.log("error fetching stats check connection");
    }
  }

  // async fetchIssues() {
  //   let issuesTotal = 0;
  //   const url = "https://api.github.com/repos/usmanhf/FitFinder/issues";

  //   try {
  //     const data = await this.attemptFetch(url, 3);
  //     console.log("fetchIssues", data);
  //     data.forEach(issue => {
  //       const username = issue.user.login;
  //       defContributorStats[username].issues++;
  //       issuesTotal++;
  //     });

  //     this.setState({ issuesTotal });
  //   } catch (err) {
  //     console.log("error fetching stats check connection");
  //   }
  // }

  fetchGithubStats() {
    // this.fetchIssues();
    this.fetchCommits();
    // this.calculateUnitTests();
    this.setState({ contributorStats: defContributorStats });
  }

  calculateUnitTests() {
    let unitTestsTotal = 0;
    this.contributorKeys.forEach(username => {
      unitTestsTotal += defContributorStats[username].unitTests;
    });
    this.setState({ unitTestsTotal });
  }

  renderProfile(id) {
    const username = this.contributorKeys[id];
    const { contributorStats } = this.state;
    console.log("renderProfile", id, username, contributorStats[username]);

    return (
      <Card
        key={id}
        body
        style={{ borderColor: "##a6a6a6", cursor: "pointer", marginTop: "10px"}}
        className="text-left"
        tag="a"
        onClick={() => window.open(`https://github.com/${username}`)}
      >
        <CardHeader className="text-center" tag="b">
          {contributorInfo[username].name} ({contributorInfo[username].username}
          )
        </CardHeader>
        <CardImg
          top
          width="100%"
          src={contributorInfo[username].image}
          alt="Error"
        />
        <CardText>
          <CardText tag="b">Major: </CardText>
          {contributorInfo[username].major}
        </CardText>
        <CardText>
          <CardText tag="b">Bio: </CardText>
          {contributorInfo[username].bio}
        </CardText>
        <CardText>
          <CardText tag="b">Responsibilities: </CardText>
          {contributorInfo[username].responsibilities}
        </CardText>
        <CardText>
          <CardText tag="b">Commits:</CardText>{" "}
          {contributorStats[username].commits}
        </CardText>
        <CardText>
          <CardText tag="b">Issues:</CardText>{" "}
          {contributorStats[username].issues}
        </CardText>
        <CardText>
          <CardText tag="b">Unit Tests:</CardText>{" "}
          {contributorStats[username].unitTests}
        </CardText>
      </Card>
    );
  }

  renderProfiles() {
    const profiles = [];
    for (let id = 0; id < this.contributorKeys.length; id += 3) {
      // render each row
      profiles.push(
        <Container key={id}>
          <CardDeck>
            {this.renderProfile(id)}
            {this.renderProfile(id + 1)}
            {this.renderProfile(id + 2)}
          </CardDeck>
        </Container>
      );
    }
    return profiles;
  }

  render() {
    const { commitsTotal, issuesTotal, unitTestsTotal } = this.state;
    return (
      <Container id="about" style={{ borderColor: "##a6a6a6", marginTop: "20px"}}>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">About FitFinder</h1>
            <p className="lead">
              FitFinder is an application that allows users to search for
              clothes of certain styles, fits, colors, etc. FitFinder also
              provides users with a social networking feature, which users can
              create accounts to upload personal fits and styles that other
              users can view.
            </p>
            <p>
              The following is a link to our Github:
              <a href="https://github.com/AswanMordor/flaskwithreact">
                Github Repo
              </a>
            </p>
          </Container>
        </Jumbotron>
        <h1 id="name">Team Cerulean</h1>

        <Container style={{ borderColor: "##a6a6a6", marginTop: "10px"}}>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>Team Statistics:</ListGroupItemHeading>
              <ListGroupItemText tag="li">
                Total Commits: {commitsTotal}
              </ListGroupItemText>
              <ListGroupItemText tag="li">
                Issues: {issuesTotal}
              </ListGroupItemText>
              <ListGroupItemText tag="li">
                Unit Tests: {unitTestsTotal}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Data Sources:</ListGroupItemHeading>
              <ListGroupItemText>
                Data was scraped using our own scraper written in Python that
                crawled through our datasources and parsed the data we needed
                into TSV files.
              </ListGroupItemText>
              <ListGroupItemText tag="li">
                <a href="https://www2.hm.com/en_us/index.html">H&M</a>
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Tools:</ListGroupItemHeading>
              <ListGroupItemText tag="li">
                Google App Engine (GCP): Used to host our site
              </ListGroupItemText>
              <ListGroupItemText tag="li">
                Flask: Used to quickly deploy and serve our site
              </ListGroupItemText>
              <ListGroupItemText tag="li">
                Postman: Used to design our RESTful API and to test HTTP GET
                requests from GitHub API
              </ListGroupItemText>
              <ListGroupItemText tag="li">
                Firebase: Used to host the data we scraped and serve it to our
                Flask Backend
              </ListGroupItemText>
              <ListGroupItemText tag="li">
                React: Used to write create our dynamic pages for viewing our
                clothing data
              </ListGroupItemText>
              <ListGroupItemText tag="li">
                Google Vision: Used to analyze the uploaded images and find the
                closest match in our database
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </Container>
        <div>{this.renderProfiles()}</div>
      </Container>
    );
  }
}
export default About;
