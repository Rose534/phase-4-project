import React, { useState, useEffect } from 'react';

function Category() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetch('http://localhost:3000/product_categories')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };

  let filteredProducts = products;
  if (category !== 'All') {
    filteredProducts = products.filter(product => product.category === category);
  }

  const bestSellers = filteredProducts.slice(-2);

  return (
    <div>
      <div id="sidebar">
        <h3>Category</h3>
        <div className="category-names">
          <p onClick={() => handleCategoryClick('All')}>All</p>
          <p onClick={() => handleCategoryClick('kitchen')}>kitchen</p>
          <p onClick={() => handleCategoryClick('food')}>food</p>
          <p onClick={() => handleCategoryClick('Electronics')}>Electronics</p>
          <p onClick={() => handleCategoryClick('fashion')}>fashion</p>
        </div>
      </div>
      <div id="sidebar2">
  <h3>Best sellers</h3>
  {bestSellers.map(product => (
    <div className="card2" key={product.id}>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  ))}
</div>

      <div className="product-cards">
        {filteredProducts.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
