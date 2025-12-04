import { useEffect } from "react";

const Home = () => {
  // const [products, setProducts] = useState([])
  //   10 Products -> Stored in State
  // Created new Product -> [...products, newProduct]

  // useEffect(() => {
  //  fetching data from backend
  // }, [products])

  useEffect(() => {
    console.log("This message will be displayed as the page reloads");
    // when the page reloads I will fetch all the products from the backend
  }, []);

  // useEffect(() => {}, []);

  return <h1>Home Page</h1>;
};

export default Home;
