import React, { useState } from "react";

function Form(props) {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function addUser(user) {
    setUsers((users) => [...users, user]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      id: crypto.randomUUID(),
    };
    addUser(newUser);
    console.log(newUser);

    setFirstName("");
    setLastName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <button type="submit">Submit</button>
      </form>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Form;
