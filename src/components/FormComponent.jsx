import { useState } from "react";

const FormComponent = () => {
  const [fieldData, setFieldData] = useState(""); /* Since it's would be a text
	field we used empty string as default value */
  console.log(fieldData);

  const handleChange = (e) => {
    console.log(e);
    setFieldData(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={(e) => setFieldData(e.target.value)}
      id="text_field"
    />
  );
};

export default FormComponent;
