import { Image, List } from "semantic-ui-react";

export const EventListAttendee = ({ attendee }: any) => {
  return (
    <List.Item>
      <Image size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
};
