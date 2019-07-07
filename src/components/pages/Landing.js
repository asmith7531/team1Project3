import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { BrowserRouter as Switch, Link } from "react-router-dom";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container
    src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    text
  >
    <Header
      as="h1"
      inverted
      content="Find Your Calling"
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Find what you want to do and how to do it."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Switch>
      <Link to="/login">
        <AwesomeButton primary>
          Get Started
          <Icon name="right arrow" />
        </AwesomeButton>
      </Link>
    </Switch>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Colleges</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
                <Menu.Item as="a">Find Yourself Survey</Menu.Item>
                <Menu.Item as="a">Scholarships</Menu.Item>
                <Menu.Item as="a">About Us</Menu.Item>
                <Menu.Item as="a" />
                <Menu.Item position="right">
                  <AwesomeButton as="a" inverted={!fixed}>
                    Log in
                  </AwesomeButton>
                  <AwesomeButton
                    type="secondary"
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </AwesomeButton>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <AwesomeButton as="a" inverted>
                    Log in
                  </AwesomeButton>
                  <AwesomeButton
                    as="a"
                    inverted
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </AwesomeButton>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help People Find Passion
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We help give people insight into what careers may be suitable for
              them based on their personalities and interests.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              How Do You Get There
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Let us help you find legitimate ways to reach your goals. Whether
              it is through traditional four-year institutions, or trade and
              technical certifications.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="https://images.unsplash.com/photo-1490376840453-5f616fbebe5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <AwesomeButton
              size="huge"
              href="https://thebestschools.org/careers/best-jobs-for-next-decade/"
            >
              Check Out The Top 25 Careers of 2019
            </AwesomeButton>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Find Yourself Survey
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Instead of going away to college and putting yourself into debt
              without being certain about where you want to start, take our
              personality and career interests survey. It just might point you
              in a new direction you had not considered!
            </p>
            <AwesomeButton as="a" type="secondary">
              Start Survey
            </AwesomeButton>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image src="https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Testimonials</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          "I Love My Job!"
        </Header>
        <Container>
          <p style={{ fontSize: "1.33em" }}>
            "Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. I love my job
            thanks to these dope dudes."
          </p>
          <p style={{ fontSize: "1.33em" }}>-Billie Eilish</p>
        </Container>

        <Header as="h3" style={{ fontSize: "2em" }}>
          "I Owe It All To Them"
        </Header>
        <Container>
          <p style={{ fontSize: "1.33em" }}>
            "I love being the president of the United States, and I never would
            have run for office if it was not for these extraordinary gentlemen
            and their app."
          </p>
          <p style={{ fontSize: "1.33em" }}>-Kanye West</p>
        </Container>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h4" inverted>
                Social Media
              </Header>
              <Container>
                <AwesomeButton href="https://www.facebook.com" type="facebook">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    space="preserve"
                    viewBox="0 0 50 50"
                    width="26"
                    height="24"
                  >
                    <path
                      fill="#FFF"
                      d="M31.6,44.5V25.7h8l1.3-8h-9.4v-4c0-2.7,1.3-4,4-4h4V1.5c-1.3,0-4.3,0-6.7,0c-6.7,0-9.4,4-9.4,10.7v5.4h-8v8h8v18.8L31.6,44.5L31.6,44.5z"
                    />
                  </svg>
                  Share
                </AwesomeButton>

                <AwesomeButton
                  href="https://www.instagram.com"
                  type="instagram"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    space="preserve"
                    viewBox="0 0 50 50"
                    width="26"
                    height="24"
                  >
                    <path
                      fill="#FFF"
                      d="M25,13.3c-5.8,0-10.6,4.7-10.6,10.6S19.1,34.6,25,34.6S35.6,29.8,35.6,24S30.8,13.3,25,13.3z M25,30.7c-3.7,0-6.8-3.1-6.8-6.8s3.1-6.8,6.8-6.8s6.8,3.1,6.8,6.8S28.7,30.7,25,30.7z M36.1,10.6c1.3,0,2.4,1.1,2.4,2.4s-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4S34.7,10.6,36.1,10.6z M42.3,6.8c-2.2-2.2-5.2-3.4-8.7-3.4H16.4c-7.2,0-12,4.8-12,12v17c0,3.6,1.2,6.7,3.5,8.9c2.2,2.2,5.2,3.2,8.6,3.2h17c3.6,0,6.6-1.2,8.7-3.2c2.2-2.2,3.4-5.2,3.4-8.8V15.4C45.6,11.9,44.5,8.9,42.3,6.8z M42,32.6c0,2.6-0.9,4.7-2.4,6.1s-3.6,2.2-6.1,2.2h-17c-2.5,0-4.6-0.7-6.1-2.2s-2.2-3.6-2.2-6.2v-17c0-2.5,0.7-4.6,2.2-6.1C11.8,8,14,7.2,16.5,7.2h17.1c2.5,0,4.6,0.7,6.1,2.2c1.4,1.5,2.2,3.6,2.2,6v17.2H42z"
                    />
                  </svg>
                  Follow Us!
                </AwesomeButton>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
