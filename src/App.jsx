import React, { Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import CounterComponent from "./components/CounterComponent.jsx";
import NamesDisplayComponent from "./components/NamesDisplayComponent.jsx";
import FormComponent from "./components/FormComponent.jsx";
import MultipleFieldsForm from "./components/MultipleFieldsForm.jsx";
import UnderstandingFormSubmit from "./components/UnderstandingFormSubmit.jsx";
import Home from "./components/Home.jsx";
import Counter from "./components/Counter.jsx";
import FetchUsers from "./components/FetchUsers.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";

// const App = () => {
//   let theme = "light";
//   return (
//     <Fragment>
//       {/* <div>
//         App
//         <Navbar themeToBeUsed={theme} />
//       </div>
//       <div></div> */}
//       {/* <Navbar />
//       <CounterComponent /> */}
//       {/* <NamesDisplayComponent /> */}
//       {/* <FormComponent /> */}
//       {/* <MultipleFieldsForm /> */}
//       {/* <UnderstandingFormSubmit /> */}
//       {/* <Home /> */}
//       {/* <Counter /> */}
//       {/* <FetchUsers /> */}
//     </Fragment>
//   );
// };

// export default App;

const App = () => {
  let theme = "dark";
  return (
    <BrowserRouter>
      <Navbar themeToBeUsed={theme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
