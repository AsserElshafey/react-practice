import React, { useState } from "react";

function Mycomponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [number, setNumber] = useState(1);
  const [comment, setComment] = useState("");
  const [shipping, setShipment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);

  }

  function handleNumberChange(event) {
    setNumber(event.target.value);
  }

  function commentHandler(event) {
    setComment(event.target.value);
  }

  function shipmentHnadler(event) {
    setShipment(event.target.value);
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Maustang"
  });

  function handleYearchange(event) {
    setCar(c => ({ ...c, year: event.target.value }))
  }

  function handleMakechange(event) {
    setCar(c => ({ ...c, make: event.target.value }))
  }

  function handleModelchange(event) {
    setCar(c => ({ ...c, model: event.target.value }))
  }

  const [foods, setfoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = "";
    setfoods(f => [...f, newFood])
  }

  function handleRemoveFood(index) {
    setfoods(foods.filter((_, i) => i !== index))
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input type="number" value={number} onChange={handleNumberChange} />
      <p>Name: {number}</p>
      <textarea name="" id="" cols="30" rows="10" value={comment} onChange={commentHandler} placeholder="entre dlivary instructions"></textarea>
      <p>Comment: {comment}</p>

      <label htmlFor="">
        PickUp
        <input type="radio" value="PickUp" checked={shipping === "PickUp"} onChange={shipmentHnadler} />
      </label><br />
      <label htmlFor="">
        Delivery
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={shipmentHnadler} />
      </label>
      <p>shippment: {shipping}</p>
      {/* <button onClick={updateName}>Set Name</button> */}
      {/* <p>Age: {age}</p>
      <button onClick={incrementAge}>incrementAge</button> */}
      <p>I like this car: {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearchange} />
      <input type="text" value={car.make} onChange={handleMakechange} />
      <input type="text" value={car.model} onChange={handleModelchange} />
      <br />
      <h2>
        Food lists
      </h2>
      <ul>
        {foods.map((food, index) =>
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>)}
      </ul>
      <input type="text" id="foodinput" placeholder="insert the food u like" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default Mycomponent