import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, brand: "Samsung", price: 500 },
    { id: 2, brand: "IPhone", price: 700 },
    { id: 3, brand: "Tecno", price: 300 },
    { id: 4, brand: "Redmi", price: 450 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAsc = () => {
    const sorted = [...products].sort((a, b) =>
      a.brand.localeCompare(b.brand)
    );
    setProducts(sorted);
  };

  const handleDesc = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  const handleSearch = () => {
    const result = products.filter((p) =>
      p.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(result);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Enter the Brand"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <table border="1" width="60%">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              Brand <button onClick={handleAsc}>Asc</button>
            </th>
            <th>
              Price <button onClick={handleDesc}>Desc</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.brand}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;