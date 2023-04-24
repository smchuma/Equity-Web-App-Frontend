import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import useRefreshToken from "../../hooks/useRefresh";
import PropTypes from "prop-types";
import { BASEURL } from "../../API_URL/api";
import HorizontalLoader from "../../Components/HorizontalLoader/HorizontalLoader";
import { useState } from "react";

const baseUrl = BASEURL;
const endpointPath = "events";

const EventsContext = createContext();

export const EventsReducer = (state, action) => {
  switch (action.type) {
    case "GET_EVENTS":
      return {
        ...state,
        events: action.payload,
      };
    case "CREATE_EVENTS":
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    case "DELETE_EVENTS":
      return {
        events: state.events.filter((event) => event._id !== action.payload),
      };

    case "JOIN_EVENT":
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload.eventId
            ? {
                ...event,
                participants: [...event.participants, action.payload.userId],
              }
            : event
        ),
      };
    case "LEAVE_EVENT":
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload.eventId
            ? {
                ...event,
                participants: event.participants.filter(
                  (participant) => participant !== action.payload.userId
                ),
              }
            : event
        ),
      };

    default:
      return state;
  }
};

export const EventsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EventsReducer, {
    events: null,
  });

  const refreshAccessToken = useRefreshToken();
  const [loading, setLoading] = useState(false);

  const { data: events, refetch } = useQuery(
    "events",
    async () => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${baseUrl}/${endpointPath}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.json();
    },
    {
      onSuccess: (data) => {
        dispatch({
          type: "GET_EVENTS",
          payload: data,
        });
      },
      onError: (err) => {
        console.log(err);
      },
      staleTime: 60000,
    }
  );

  const postEvent = useMutation(
    async (event) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${baseUrl}/${endpointPath}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(event),
      });
      return response.json();
    },
    {
      onSuccess: async (data) => {
        dispatch({
          type: "CREATE_EVENTS",
          payload: data,
        });
        await refetch();
        setLoading(false);
      },
      onError: (err) => {
        console.log(err);
        setLoading(false);
      },
      staleTime: 60000,
      onMutate: () => {
        setLoading(true);
      },
    }
  );

  const deleteEvent = useMutation(
    async (eventId) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${baseUrl}/${endpointPath}/${eventId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.json();
    },
    {
      onSuccess: async () => {
        await refetch();
        setLoading(false);
      },
      onError: (err) => {
        console.log(err);
        setLoading(false);
      },
      staleTime: 60000,
      onMutate: () => {
        setLoading(true);
      },
    }
  );

  const joinEvent = useMutation(
    async (eventId) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(
        `${baseUrl}/${endpointPath}/${eventId}/join`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.json();
    },
    {
      onSuccess: async (data) => {
        dispatch({
          type: "JOIN_EVENT",
          payload: data,
        });
        await refetch();
        setLoading(false);
      },
      onError: (err) => {
        console.log(err);
        setLoading(false);
      },
      staleTime: 60000,
      onMutate: () => {
        setLoading(true);
      },
    }
  );

  const leaveEvent = useMutation(
    async (eventId) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(
        `${baseUrl}/${endpointPath}/${eventId}/leave`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.json();
    },
    {
      onSuccess: async (data) => {
        dispatch({
          type: "LEAVE_EVENT",
          payload: data,
        });
        await refetch();
        setLoading(false);
      },
      onError: (err) => {
        console.log(err);
        setLoading(false);
      },
      staleTime: 60000,
      onMutate: () => {
        setLoading(true);
      },
    }
  );
  useEffect(() => {
    if (events) {
      dispatch({
        type: "GET_EVENTS",
        payload: events,
      });
    }
  }, [events]);

  return (
    <EventsContext.Provider
      value={{
        events: state.events,
        postEvent,
        deleteEvent,
        joinEvent,
        leaveEvent,
      }}
    >
      {loading && <HorizontalLoader />}
      {children}
    </EventsContext.Provider>
  );
};

EventsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EventsContext;
