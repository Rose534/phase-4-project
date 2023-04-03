import React, { useState, useEffect } from 'react';
import NavBar from "./Navbar";

const Account = () => {
  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  useEffect(() => {
    fetch('https://clicky-h5gz.onrender.com/product')
      .then(response => response.json())
      .then(data => setProducts(data.data))
      .catch(error => console.error(error));
  }, []);

  const handleNewProductChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleNewProductSubmit = (event) => {
    event.preventDefault();
    fetch(`https://clicky-h5gz.onrender.com/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(response => response.json())
      .then(data => {
        setProducts([...products, data.data]);
        setNewProduct({
          name: "",
          description: "",
          price: "",
          image: ""
        });
        setShowForm(false);
      })
      .catch(error => console.error(error));
  };

  const handleHover = (productId) => {
    setHoveredProductId(productId);
  };

  const handleUpdate = (productId) => {
    const updatedProduct = prompt('Enter the updated product name:');
    if (updatedProduct) {
      fetch(`https://clicky-h5gz.onrender.com/product/${productId}`, {
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
      fetch(`https://clicky-h5gz.onrender.com/product/${productId}`, {
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
    <div id="account">
      <NavBar/>
      <h1 id="products">Products</h1>
      <button class="add-product-btn" onClick={() => setShowForm(true)}>Add Product</button>
{showForm && (
  <form class="add-product-form" onSubmit={handleNewProductSubmit}>
    <label>
      Name:
      <input type="text" name="name" value={newProduct.name} onChange={handleNewProductChange} />
    </label>
    <label>
      Description:
      <input type="text" name="description" value={newProduct.description} onChange={handleNewProductChange} />
    </label>
    <label>
      Price:
      <input type="text" name="price" value={newProduct.price} onChange={handleNewProductChange} />
    </label>
    <label>
      Image:
      <input type="text" name="image" value={newProduct.image} onChange={handleNewProductChange} />
    </label>
    <button class="add-product-submit-btn" type="submit">Add</button>
  </form>
)}

      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} onMouseEnter={() => handleHover(product.id)} onMouseLeave={() => handleHover(null)}>
            {product.image && <img src={product.image} alt={product.name} />}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {hoveredProductId === product.id && (
              <div>
                <button id="dltbtn" onClick={() => handleUpdate(product.id)}>Update</button>
                <button id="crtbtn" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Account;
