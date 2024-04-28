import { Grid } from "semantic-ui-react";
import { EventList } from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../types/event";

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
};

const EventDashboard = ({ formOpen, setFormOpen }: Props) => {
  const [events, SetEvents] = useState<AppEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  useEffect(() => {
    SetEvents(sampleData);
  }, []);

  const addEvent = (event: AppEvent) => {
    SetEvents((prevState) => {
      return [...prevState, event];
    });
  };

  const handleSelectEvent = (event: AppEvent) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={handleSelectEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
