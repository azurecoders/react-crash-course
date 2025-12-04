// import { useState } from "react";

// const MultipleFieldsForm = () => {
//   // We have declared multiple states to manage each of the field

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   console.log(username);
//   console.log(email);
//   console.log(password);

//   // So instead of writting handChangeUsername etc for each of them we do this

//   return (
//     <>
//       <label>Username</label>
//       <input
//         type="text"
//         id="username"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <br />

//       <label>Email</label>
//       <input
//         type="email"
//         id="email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <br />

//       <label>Password</label>
//       <input
//         type="password"
//         id="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </>
//   );
// };

// export default MultipleFieldsForm;

import { useState } from "react";

const MultipleFieldsForm = () => {
  // const car = {
  //   name: "BMW",
  //   model: "X5",
  //   color: "black",
  //   // key -> value
  // };

  // console.log("Car ", car["name"]);
  // console.log(car);
  // car.brand = "BMW";
  // console.log(car);

  /* Instead of declaring multiple states we declared a single state to hold
	all the information */

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(formData);

  // console.log(formData.name);
  // console.log(formData.email);
  // console.log(formData.password);

  const handleChange = (e) => {
    console.log(e);
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <label>Username</label>
      <input type="text" id="username" onChange={handleChange} />
      <br />
      <br />

      <label>Email</label>
      <input type="email" id="email" onChange={handleChange} />
      <br />
      <br />

      <label>Username</label>
      <input type="password" id="password" onChange={handleChange} />
    </>
  );
};

export default MultipleFieldsForm;
