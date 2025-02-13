import { FaStar } from "react-icons/fa";
import "./Card.scss";

function Card({ product }) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.thumbnail} alt="" />
      <div className="card-content">
        <h3>{product.title}</h3>
        <p>
          <b>Price:</b> {product.price}$
        </p>
        <p>
          <b>Rating:</b> {product.rating}
          <FaStar size={15} color="orange" />
        </p>
      </div>
      <button className="buy-btn">Buy</button>
    </div>
  );
}

export default Card;
