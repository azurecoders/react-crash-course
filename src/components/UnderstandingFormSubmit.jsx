import { useState } from "react";

const UnderstandingFormSubmit = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(formData.username);
  console.log(formData.email);
  console.log(formData.password);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(e);
    // You could access all the properties of the form through "e"
    // When we submit the form the page reloads in order to stop that we use;
    e.preventDefault(); // this line stops the default behavior of form that is reload.
    alert(`Hello ${formData.username}, your email is ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" id="username" onChange={handleChange} />

      <br />
      <br />

      <label>Email</label>
      <input type="email" id="email" onChange={handleChange} />
      <br />
      <br />

      <label>Password</label>
      <input type="password" id="password" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UnderstandingFormSubmit;
