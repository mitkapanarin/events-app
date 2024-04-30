import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDashboard from "../layout/events/dashboard/EventDashboard";
import EventDetailsPage from "../layout/events/details/EventDetailedPage";
import EventForm from "../layout/events/form/EventForm";
import Scratch from "../features/scratch/Scratch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/events",
        element: <EventDashboard />,
      },
      {
        path: "/events/:id",
        element: <EventDetailsPage />,
      },
      {
        path: "/manage/:id",
        element: <EventForm />,
      },
      {
        path: "/createEvent",
        element: <EventForm />,
      },
      {
        path: "/scratch",
        element: <Scratch />,
      },
    ],
  },
]);
