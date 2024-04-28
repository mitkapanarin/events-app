import { EventListItem } from "./EventListItem";

export const EventList = (props: any) => {
  return (
    <>
      {props.events.map((event: any) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
};
