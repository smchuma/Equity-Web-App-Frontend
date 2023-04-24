import { useContext } from "react";
import EventsContext from "../Context/EventsContext/EventsContext";

const useEvents = () => {
  const { events, isLoading, postEvent, deleteEvent, joinEvent, leaveEvent } =
    useContext(EventsContext);

  return { events, isLoading, postEvent, deleteEvent, joinEvent, leaveEvent };
};

export default useEvents;
