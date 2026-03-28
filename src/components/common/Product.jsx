import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <div className="product card border-0">
        <div className="card-img">
          <Link to={`/product/${product.id}`} style={{cursor: 'pointer'}}>
            <img src={product.thumbnail} alt="" className="img-fluid w-100" />
          </Link>
        </div>
        <div className="card-body mt-3">
          <Link to={`/product/${product.id}`} style={{cursor: 'pointer'}}>{product.name}</Link>
          <div className="price d-flex align-items-center gap-2">
            {product.discountPrice && product.discountPrice > 0 ? (
              <>
                <span>${product.discountPrice}</span>
                <del style={{ color: "#06112380" }}>${product.price}</del>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
