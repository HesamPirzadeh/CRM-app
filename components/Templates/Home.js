import React from "react";
import Card from "../Modules/Card";

function Home({ customers }) {
  return (
    <div>
      {customers.map((item) => {
        return <Card key={item._id} customers={item} />;
      })}
    </div>
  );
}

export default Home;
