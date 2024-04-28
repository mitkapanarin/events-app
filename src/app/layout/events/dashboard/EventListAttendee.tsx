import { Image, List } from "semantic-ui-react";
import { Attendee } from "../../../types/event";

type Props = {
  attendee: Attendee;
};

export const EventListAttendee = ({ attendee }: Props) => {
  return (
    <List.Item>
      <Image size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
};
