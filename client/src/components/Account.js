import React, { useState, useEffect } from 'react';
import NavBar from "./Navbar";


const Account = () => {
  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  

  useEffect(() => {
    fetch('http://localhost:3000/product')
      .then(response => response.json())
      .then(data => setProducts(data.data))
      .catch(error => console.error(error));
  }, []);

  const handleHover = (productId) => {
    setHoveredProductId(productId);
  };

  const handleUpdate = (productId) => {
    const updatedProduct = prompt('Enter the updated product name:');
    if (updatedProduct) {
      fetch(`http://localhost:3000/product/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: updatedProduct })
      })
      .then(response => response.json())
      .then(data => {
       
        const updatedProducts = products.map(product => {
          if (product.id === productId) {
            return data.data;
          }
          return product;
        });
        setProducts(updatedProducts);
      })
      .catch(error => console.error(error));
    }
  };
  

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`http://localhost:3000/product/${productId}`, {
        method: 'DELETE'
      })
      .then(() => {
        
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
      })
      .catch(error => console.error(error));
    }
  };

  
  return (
    <div>
      <NavBar/>
      <h1>Products</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} onMouseEnter={() => handleHover(product.id)} onMouseLeave={() => handleHover(null)}>
            {product.image && <img src={product.image} alt={product.name} />}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {hoveredProductId === product.id && (
              <div>
                <button onClick={() => handleUpdate(product.id)}>Update</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Account;
