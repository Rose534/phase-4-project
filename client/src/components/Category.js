import React, { useState, useEffect } from 'react';

function Category() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetch(`https://clicky-h5gz.onrender.com/product_categories`)
      .then(response => response.json())
      .then(data => {
        if (category !== 'All') {
          data = data.filter(product => product.category === category);
        }
        setProducts(data);
      })
      .catch(error => console.error(error));
  }, [category]);

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };

  const bestSellers = products.slice(-3);

  return (
    <div id="category">
      <div id="sidebar">
        <h3>Category</h3>
        <div className="category-names">
          <p onClick={() => handleCategoryClick('All')}>All</p>
          <p onClick={() => handleCategoryClick('Kitchen')}>Kitchen</p>
          <p onClick={() => handleCategoryClick('Food')}>Food</p>
          <p onClick={() => handleCategoryClick('Electronics')}>Electronics</p>
          <p onClick={() => handleCategoryClick('Fashion')}>Fashion</p>
        </div>
      </div>
      <div className="product-cards">
        {bestSellers.map(product => (
          <div className="card" key={product.id}>
            <h3>Best sellers</h3>
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
