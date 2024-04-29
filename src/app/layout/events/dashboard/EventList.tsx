import { AppEvent } from "../../../types/event";
import { EventListItem } from "./EventListItem";

type Props = {
  events: AppEvent[];
};

export const EventList = ({ events }: Props) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
};
