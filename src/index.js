import React from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const user = [
  {
    id: 1,
    name: "Ryan ray",
    img: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Luis Polina",
    img: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Eduardo Romo",
    img: "https://robohash.org/user3",
  },
];

root.render(
  <>
    {user.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.img} />
        </div>
      );
    })}
  </>
);
