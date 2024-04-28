import { Container } from "semantic-ui-react";
import EventDashboard from "./events/dashboard/EventDashboard";
import { NavBar } from "./nav/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>
  );
};

export default App;
