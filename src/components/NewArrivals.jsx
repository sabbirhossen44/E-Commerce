import React from "react";
import Product from "./common/Product";
import ProductImage from "../assets/images/Mens/two.jpg"

const NewArrivals = () => {

    const products = [
        {
            id: 1,
            name: "Product 1",
            thumbnail: ProductImage,
            price: 100,
            discountPrice: 10
        },
        {
            id: 2,
            name: "Product 2",
            thumbnail: ProductImage,
            price: 100,
            discountPrice: 10
        },
        {
            id: 3,
            name: "Product 3",
            thumbnail: ProductImage,
            price: 100,
            discountPrice: 10
        },
        {
            id: 4,
            name: "Product 4",
            thumbnail: ProductImage,
            price: 100,
            discountPrice: 10
        }
    ];

  return (
    <>
      <div className="">
        <div className="row mt-4">
          {
            products.map(product => (
              <div className="col-md-3" key={product.id}>
                <Product product={product} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default NewArrivals;