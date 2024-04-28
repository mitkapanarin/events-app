import { Container } from "semantic-ui-react";
import EventDashboard from "./events/dashboard/EventDashboard";
import { NavBar } from "./nav/NavBar";
import { useState } from "react";
import { AppEvent } from "../types/event";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  const handleSelectEvent = (event: AppEvent | null) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <div>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          selectEvent={handleSelectEvent}
        />
      </Container>
    </div>
  );
};

export default App;
