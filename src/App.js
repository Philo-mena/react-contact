import React, { useState } from "react";
import Form from "./components/Form";
import Contacts from "./components/Contacts";

function App() {
  const [users, setUsers] = useState([
    { name: "Philo", phoneNumber: 3455643, location: "Adenta" },
    { name: "Habib", phoneNumber: 2244445, location: "Codetrain" },
    { name: "kingsley", phoneNumber: 5544445, location: "Adenta" },
  ]);
  // creating a function named handleAddContact
  function handleAddContact(user) {
    console.log("logging from app");
    console.log(user);
    setUsers((prev) => [...prev, user]);
  }
  return (
    <div className="container">
      <Form handleAddContact={handleAddContact} />
      <Contacts users={users} />
    </div>
  );
}

export default App;
