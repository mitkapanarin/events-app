import { Grid } from "semantic-ui-react";
import { EventList } from "./EventList";
import { sampleData } from "../../../api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../types/event";

const EventDashboard = () => {
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
        <h3>Filters</h3>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
