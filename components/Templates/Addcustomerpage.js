import React, { useState } from "react";
import Form from "../Modules/Form";
import { useRouter } from "next/router";

function Addcustomerpage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    products: [],
    date: "",
    phone: "",
    address: "",
    postalCode: "",
  });

  const cancelHandler = () => {
    router.push("/");
  };
  const saveHandler = () => {
    console.log("log");
  };
  return (
    <div className="customer-page">
      <h4>Add new customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Addcustomerpage;
