import { ChangeEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { createEvent, updateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";
import { FieldValues, useForm } from "react-hook-form";

function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onTouched" });
  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((e) => e.id === id)
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // id = id ?? createId();
    // event
    //   ? dispatch(updateEvent({ ...event, ...values }))
    //   : dispatch(
    //       createEvent({
    //         ...values,
    //         id,
    //         hostedBy: "MMM",
    //         hostPhotoURL: "",
    //         attendees: [],
    //       })
    //     );
    // navigate(`/events/${id}`);
  };

  return (
    <Segment clearing>
      <Header content="Event details" sub color="teal" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          placeholder="Event title"
          defaultValue={event?.title || ""}
          {...register("title", { required: true })}
          error={errors.title && "Title is required"}
        />

        <Form.Input
          placeholder="Category"
          defaultValue={event?.category || ""}
          {...register("category", { required: true })}
          error={errors.category && "category is required"}
        />

        <Form.TextArea
          placeholder="Description"
          defaultValue={event?.description || ""}
          {...register("description", { required: true })}
          error={errors.description && "description is required"}
        />
        <Header sub content="Location details" color="teal" />
        <Form.Input
          placeholder="City"
          defaultValue={event?.city || ""}
          {...register("city", { required: true })}
          error={errors.city && "city is required"}
        />

        <Form.Input
          placeholder="Venue"
          defaultValue={event?.venue || ""}
          {...register("venue", { required: true })}
          error={errors.venue && "venue is required"}
        />

        <Form.Input
          type="date"
          placeholder="Date"
          defaultValue={event?.date || ""}
          {...register("date", { required: true })}
          error={errors.date && "date is required"}
        />

        <Button
          disabled={!isValid}
          loading={isSubmitting}
          type="submit"
          floated="right"
          positive
          content="Submit"
        />
        <Button
          disabled={isSubmitting}
          as={Link}
          to="/events"
          type="button"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}

export default EventForm;
