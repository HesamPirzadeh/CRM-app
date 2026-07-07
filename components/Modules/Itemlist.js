import React from "react";
import Forminput from "./Forminput";

function Itemlist({ form, setForm }) {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", qty: "", price: "" }],
    });
    console.log(products);
  };
  const deleteHandler = (index) => {
    const newProduct = [...products];
    newProduct.splice(index, 1);
    setForm({ ...form, products: newProduct });
  };
  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProduct = [...products];
    newProduct[index][name] = value;
    setForm({ ...form, products: newProduct });
  };
  return (
    <div className="item-list">
      <p>Purchased product</p>
      {products.map((product, index) => {
        return (
          <Productitem
            key={index}
            product={product}
            changeHandler={(e) => changeHandler(e, index)}
            deleteHandler={(e) => deleteHandler(index)}
          />
        );
      })}
      <button onClick={addHandler}>Add</button>
    </div>
  );
}

export default Itemlist;

function Productitem({ index, product, changeHandler, deleteHandler }) {
  return (
    <div className="form-input__list" key={index}>
      <Forminput
        label="product name"
        name="name"
        type="text"
        value={product.name}
        onChange={changeHandler}
      />
      <div>
        <Forminput
          label="Qty"
          name="qty"
          type="text"
          value={product.qty}
          onChange={changeHandler}
        />
        <Forminput
          label="Price"
          name="price"
          type="text"
          value={product.price}
          onChange={changeHandler}
        />
      </div>
      <button onClick={deleteHandler}>Remove</button>
    </div>
  );
}
