import Category from "./Category";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/product");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <div id="container">
        <div id="box1">
          <p id="welcome">Attention all seller!</p>
          <p id="attention">We're excited to announce that we'll be hosting a big event <br></br> in the coming weeks, 
          and we want YOU to be a part of it! <br></br>Whether you're an experienced seller or just getting started,<br></br> this is the perfect opportunity to showcase your goods and<br></br> connect with potential buyers.
             </p>
        </div>
        <div id="image-container">
          <img src="https://53525363.000webhostapp.com/Images/Download_premium_png_of_Sofa_png_mockup_in_green_fabric_on_transparent_background_about_sofa__sofa_png__armchair__couch__and_furniture_3101307-removebg-preview.png" alt="" className="homeimage"/>
          
        </div>
        <div id="box2"></div>
        <p id="join" >Join us for a day of fun, food, and fantastic sales. <br></br>Bring your best products and get ready to make some serious sales! Don't miss out on this amazing opportunity<br></br>to grow your business and reach a wider audience.</p>

        <p id="interest"> Interested in selling at our event? <br></br>Click the button below and secure your spot today. We can't wait to see you there!"</p>
        <button id="btn2">Sign up here!</button>
      </div>
      
      <Category/>
      <div id="api">
        {/* display fetched products data */}
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
  