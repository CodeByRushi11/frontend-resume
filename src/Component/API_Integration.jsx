import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";

const API_Integration = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  useEffect(() => {
    FetchUsers();
  }, []);

  const api_url = "http://localhost:5000/users";
  const FetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const json = await response.json();
      console.log("Fetch all User data", json);
      setUsers(json);
      setLoading(false);
    } catch (error) {
      console.error("Error User data", error);
      setUsers([]);
      setLoading(false);
    }
  };

  if (loading) return <p> Loading Users ..</p>;
  const handleResetFeild = () => {
    setUsers({
      email: "",
    });
  };
  const HandleAddUser = async () => {
    handleResetFeild();
    try {
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      });
      if (response.ok) {
        const savedResume = await response.json();
        setUsers([...users, savedResume]);
      } else {
        console.error("Failed to save Users");
      }
    } catch (error) {
      console.error("Erroron saving Users", error);
    }
  };
  return (
    <div>
      <h2>Api Integration</h2>
      <h3>User List</h3>
      <div style={{ border: "0.5px solid black", padding: "10px" }}>
        <FormGroup>
          <Label>
            Email
            <span style={{ color: "red" }}>*</span>
          </Label>
          <Input
            placeholder="Email"
            onChange={(e) => {
              setEmail({
                email: e.target.value,
              });
            }}
          />
          <Label>
            Password<span style={{ color: "red" }}>*</span>
          </Label>
          <Input placeholder="password" />
        </FormGroup>
        <Button onClick={HandleAddUser} color="primary">
          {" "}
          Add
        </Button>
      </div>
      <ul type="1">
        {users.map((user) => (
          <li key={user.id}>
            {user.email} and {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default API_Integration;
