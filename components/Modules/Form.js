import React from "react";
import Itemlist from "./Itemlist";
import Forminput from "./Forminput";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <Forminput
        name="name"
        label="Name"
        type="text"
        onChange={changeHandler}
        value={form.name}
      />
      <Forminput
        name="lastName"
        label="Last Name"
        type="text"
        onChange={changeHandler}
        value={form.lastName}
      />
      <Forminput
        name="email"
        label="Email"
        type="text"
        onChange={changeHandler}
        value={form.email}
      />
      <Forminput
        name="phone"
        label="Phone"
        type="number"
        onChange={changeHandler}
        value={form.phone}
      />
      <Forminput
        name="address"
        label="Address"
        type="text"
        onChange={changeHandler}
        value={form.address}
      />
      <Forminput
        name="postalCode"
        label="Postal Code"
        type="text"
        onChange={changeHandler}
        value={form.postalCode}
      />
      <Forminput
        name="date"
        label="Date"
        type="date"
        onChange={changeHandler}
        value={form.date}
      />
      <Itemlist form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
