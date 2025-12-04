import React, { Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import CounterComponent from "./components/CounterComponent.jsx";
import NamesDisplayComponent from "./components/NamesDisplayComponent.jsx";
import FormComponent from "./components/FormComponent.jsx";
import MultipleFieldsForm from "./components/MultipleFieldsForm.jsx";
import UnderstandingFormSubmit from "./components/UnderstandingFormSubmit.jsx";
import Home from "./components/Home.jsx";
import Counter from "./components/Counter.jsx";

const App = () => {
  let theme = "light";
  return (
    <Fragment>
      {/* <div>
        App
        <Navbar themeToBeUsed={theme} />
      </div>
      <div></div> */}
      {/* <Navbar />
      <CounterComponent /> */}
      {/* <NamesDisplayComponent /> */}
      {/* <FormComponent /> */}
      {/* <MultipleFieldsForm /> */}
      {/* <UnderstandingFormSubmit /> */}
      {/* <Home /> */}
      <Counter />
    </Fragment>
  );
};

export default App;
