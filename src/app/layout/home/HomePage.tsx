import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Events
        </Header>
        <Button size="huge" inverted as={Link} to="/events">
          Get started
        </Button>
        <Icon name="caret right" inverted />
      </Container>
    </Segment>
  );
};

export default HomePage;
