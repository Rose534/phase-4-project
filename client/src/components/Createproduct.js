// import React, { useState } from 'react';


// const ProductForm = ({ onCreate }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onCreate({ name, description, price });
//     setName('');
//     setDescription('');
//     setPrice('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
//       </label>
//       <label>
//         Description:
//         <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
//       </label>
//       <label>
//         Price:
//         <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
//       </label>
//       <button type="submit">Create</button>
//     </form>
//   );
// };

// export default ProductForm;
