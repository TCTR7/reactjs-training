import { useParams } from "react-router-dom";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUserDetail } from "../services/api"; // Adjust the import path as necessary

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id); // Log the user ID to the console

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserDetail(Number(id)), // Convert id to a number
    enabled: !!id, // Only run the query if id is available
  }
  );
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error instanceof Error ? error.message : "An unknown error occurred"}</div>;

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default UserDetail;
