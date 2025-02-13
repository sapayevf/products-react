import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Products.scss";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [sortRating, setSortRating] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortPrice === "asc") return a.price - b.price;
      if (sortPrice === "desc") return b.price - a.price;
      return 0;
    })
    .sort((a, b) => {
      if (sortRating === "asc") return a.rating - b.rating;
      if (sortRating === "desc") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setSortPrice(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <select onChange={(e) => setSortRating(e.target.value)}>
          <option value="">Sort by Rating</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="product-cards">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
