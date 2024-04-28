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

  useEffect(() => {
    SetEvents(sampleData);
  }, []);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && <EventForm setFormOpen={setFormOpen} />}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
