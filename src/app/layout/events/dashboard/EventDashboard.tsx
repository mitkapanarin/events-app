import { Grid } from "semantic-ui-react";
import { EventList } from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../types/event";

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
  selectEvent: (event: AppEvent) => void;
  selectedEvent: AppEvent | null;
};

const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}: Props) => {
  const [events, SetEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    SetEvents(sampleData);
  }, []);

  const addEvent = (event: AppEvent) => {
    SetEvents((prevState) => {
      return [...prevState, event];
    });
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : "create"}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
