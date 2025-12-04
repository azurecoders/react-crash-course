import { useState, useEffect } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchAllUsers = async () => {
    try {
      const apiResponse = await fetch("https://dummyjson.com/users");
      console.log(apiResponse);
      const data = await apiResponse.json();
      console.log(data.users);

      setUsers(data.users);
    } catch (error) {
      console.log("Some error occurred ", error);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      <h1>Users List</h1>
      {error && error !== "" && <p>{error}</p>}

      {users.map((user, index) => {
        return (
          <p key={index}>
            {user.firstName} {user.lastName} - {user.email} -{" "}
            {user.gender.toUpperCase()}
          </p>
        );
      })}
    </>
  );
};

export default FetchUsers;
