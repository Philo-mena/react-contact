const Contacts = (props) => {
  console.log(props.users);

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.phoneNumber} className="box">
          <p>{user.name}</p>
          <p>{user.phoneNumber}</p>
          <p>{user.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
