import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { createEvent, updateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
// import DatePicker

function EventForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onTouched" });
  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((e) => e.id === id)
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    id = id ?? createId();
    event
      ? dispatch(updateEvent({ ...event, ...data, date: data.date.toString() }))
      : dispatch(
          createEvent({
            ...data,
            id,
            hostedBy: "MMM",
            hostPhotoURL: "",
            attendees: [],
            date: data.date.toString(),
          })
        );
    navigate(`/events/${id}`);
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
        <Controller
          name="category"
          control={control}
          rules={{ required: "category is required" }}
          defaultValue={event?.category}
          render={({ field }) => (
            <Form.Select
              options={categoryOptions}
              placeholder="Category"
              clearable
              {...field}
              onChange={(_e, d) => setValue("category", d.value)}
              error={errors.category && "category is required"}
            />
          )}
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
        <Form.Field>
          <Controller
            name="date"
            control={control}
            rules={{ required: "Date is required" }}
            defaultValue={(event && new Date(event.date)) || null}
            render={({ field }) => (
              <ReactDatePicker
                selected={field.value}
                onChange={(value) =>
                  setValue("date", value, { shouldValidate: true })
                }
                showTimeSelect
                timeCaption="time"
                dateFormat="MMM d, yyyy h:mm aa"
                placeholderText="Event Date and Time"
              />
            )}
          />
        </Form.Field>
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
