import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";
import { fetchUsers } from "../services/api";


const User = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading users</div>;
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {data?.map((user: { id: number; name: string }) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
};

export default User;