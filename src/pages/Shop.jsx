import React from "react";
import Layout from "../components/common/Layout";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ProductImage from "../assets/images/Mens/two.jpg";
import Product from "../components/common/Product";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Product 1",
      thumbnail: ProductImage,
      price: 100,
      discountPrice: 10,
    },
    {
      id: 2,
      name: "Product 2",
      thumbnail: ProductImage,
      price: 100,
      discountPrice: 10,
    },
    {
      id: 3,
      name: "Product 3",
      thumbnail: ProductImage,
      price: 100,
      discountPrice: 10,
    },
    {
      id: 4,
      name: "Product 4",
      thumbnail: ProductImage,
      price: 100,
      discountPrice: 10,
    },
  ];

  return (
    <>
      <Layout>
        <div className="container">
          <div className="py-4">
            <Breadcrumb>
              <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Shop</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="card shadow border-0 mb-3">
                <div className="card-body p-4">
                  <h3 className="mb-3">Categories</h3>
                  <ul>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Kids
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Mens
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Women
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card shadow border-0 mb-3">
                <div className="card-body p-4">
                  <h3 className="mb-3">Brands</h3>
                  <ul>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Puma
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Killer
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Levies
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="ps-2">
                        Flying Machine
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row mb-5">
                {products.map((product) => (
                  <div className="col-md-3" key={product.id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shop;
