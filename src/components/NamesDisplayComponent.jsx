import React, { useState } from "react";

const NamesDisplayComponent = () => {
  console.log("This is the names component");
  let [names, setNames] = useState(["Muzammil", "Ibrahim", "Ayan", "Shafaey"]);
  // console.log(names);
  // names.push("Rahul");
  // console.log(names);

  // const fruits = ["apple", "banana", "orange"];
  // const new_fruits = [...fruits, "mango"];
  // console.log(fruits);
  // console.log(new_fruits);

  // for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]);
  // }

  // for (let i = 0; i < names.length; i++) {
  //   console.log(i)
  //   console.log(names[i]);
  // }

  // names.forEach((name) => {
  //   console.log(name);
  // });

  const handleClick = () => {
    setNames((prev) => [...prev, "Rahul"]);
    console.log(names);
  };

  return (
    <div>
      {names.map((name, index) => {
        // console.log(index, name);
        return <p key={index}>{name}</p>;
      })}

      <button onClick={handleClick}>Click me to add Rahul</button>
    </div>
  );
};

export default NamesDisplayComponent;
