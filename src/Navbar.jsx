const Navbar = ({ name }) => {
  return (
    <header>
      <nav>
        <h1>{name}</h1>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
