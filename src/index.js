import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <Button text='Click me'/>
  <Button text='Pay'/>
  <Button text='' name='Alex'/>
    {/* <UserCard
      name="Luis Polina"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () { alert('Hello') }}
    />

    <UserCard 
      name="Eduardo Perez"
      amount={1000}
      married={false}
      points={[400, 12]}
      address={{ street: "prados 432", city: "Aguascalientes" }}
    /> */}

  </>
);
