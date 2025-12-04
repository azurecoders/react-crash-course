const Navbar = ({ themeToBeUsed }) => {
  const name = "Muzammil";

  const age = 20;

  console.log("This is me Navbar");

  // if (age > 18) {
  //   console.log("You can drive");
  // } else {
  //   console.log("You can't drive");
  // }

  return (
    <>
      <h1>Multi Colored Theme Navbar</h1>
      // Ternary Operator // Condition ? If condition's true : If it's false
      {themeToBeUsed == "dark" ? (
        <div className="bg-black text-white p-2 rounded-md w-fit">
          <h2>Dark Theme</h2>
        </div>
      ) : (
        <div className="bg-white border border-black text-black w-fit p-2 rounded-md">
          <h2>Light Theme</h2>
        </div>
      )}
    </>
  );
};

export default Navbar;
