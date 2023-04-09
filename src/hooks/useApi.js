import { useMutation, useQuery } from "react-query";
import useRefreshToken from "../hooks/useRefresh";

const baseUrl = "http://localhost:3500";
const endpointPath = "posts";

const useApi = () => {
  const refreshAccessToken = useRefreshToken();

  const postData = useMutation(
    async (data) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${baseUrl}/${endpointPath}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      return response.json();
    },
    {
      onSuccess: () => {
        console.log("User data fetched");
      },
      onError: (err) => {
        console.log("Error fetching user data");
      },
    }
  );
  const getPost = useQuery(
    "postData", // a unique query key to identify the query
    async () => {
      const accessToken = await refreshAccessToken();
      const postResponse = await fetch(`${baseUrl}/${endpointPath}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const postData = await postResponse.json();

      const userIds = postData.map((post) => post.userId);

      const userResponse = await fetch(
        `${baseUrl}/user?id=${userIds.join(",")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const userData = await userResponse.json();

      const data = postData.map((post) => {
        const user = userData.find((user) => user._id === post.userId);
        return {
          ...post,
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
          },
        };
      });
      return data;
    },
    {
      onSuccess: (data) => {
        console.log("Data fetched:");
      },
      onError: (err) => {
        console.log("Error fetching data:", err);
      },
    }
  );

  const update = useMutation(
    async (data) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${baseUrl}/${endpointPath}/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    {
      onSuccess: () => {
        console.log("User data fetched");
      },
    }
  );

  const updateLikes = useMutation(
    async ({ postId, likes }) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${baseUrl}/${endpointPath}/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ likes }),
      });
      return response.json();
    },
    {
      onSuccess: () => {
        console.log("Likes updated");
        // Refetch the data to update the UI with the new likes count
        getPost.refetch();
      },
      onError: (err) => {
        console.log("Error updating likes:", err);
      },
    }
  );

  const remove = useMutation(
    async (id) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${baseUrl}/${endpointPath}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.json();
    },
    {
      onSuccess: () => {
        console.log("User data fetched");
      },
    }
  );

  const isLoading = postData.isLoading || update.isLoading || remove.isLoading;
  const isError = postData.isError || update.isError || remove.isError;

  return {
    getPost,
    postData,
    update,
    remove,
    isLoading,
    isError,
    updateLikes,
  };
};

export default useApi;
