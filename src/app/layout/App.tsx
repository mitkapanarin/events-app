import { Container } from "semantic-ui-react";
import EventDashboard from "./events/dashboard/EventDashboard";
import { NavBar } from "./nav/NavBar";
import { useState } from "react";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </div>
  );
};

export default App;
