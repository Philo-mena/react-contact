import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    // prevent default
    event.preventDefault();

    // log form data
    console.log({
      name,
      phoneNumber,
      location,
    });
    props.handleAddContact({
      name,
      phoneNumber,
      location,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="Form">
        <div>
          <label name="">Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label name="">phone number</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <label name="">location</label>
          <input type="text" value={location} onChange={handleLocationChange} />
        </div>
        <button type="submit" className="Button">Submit</button>
      </form>
    </div>
  );
}

export default Form;
