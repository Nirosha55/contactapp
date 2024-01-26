import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Profile from "./Profile";

function createCard(contacts) {
  return <Card
key = {contacts.id}
name= {contacts.name}
img = {contacts.imgURL}
phone={contacts.phone}
email={contacts.email}
/>
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* <Profile img="https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk.jpg" /> */}
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
