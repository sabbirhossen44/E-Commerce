import React from "react";
import Layout from "../components/common/Layout";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import { Rating } from "react-simple-star-rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductImg from "../assets/images/Mens/two.jpg";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [rating, setRating] = useState(4);

  return (
    <>
      <Layout>
        <div className="container product-detail">
          <div className="py-4">
            <Breadcrumb>
              <Breadcrumb.Item onClick={() => navigate("/")}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/shop")}>
                Shop
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Product 1</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="row mb-5">
            <div className="col-md-5">
              <div className="row">
                <div className="col-2">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#000",
                      "--swiper-pagination-color": "#000",
                    }}
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    direction={`vertical`}
                    spaceBetween={10}
                    slidesPerView={6}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper mt-2"
                  >
                    <SwiperSlide>
                      <div className="content">
                        <img
                          src={ProductImg}
                          alt=""
                          height={100}
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img
                          src={ProductImg}
                          alt=""
                          height={100}
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img
                          src={ProductImg}
                          alt=""
                          height={100}
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="col-10">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#000",
                      "--swiper-pagination-color": "#000",
                    }}
                    loop={true}
                    spaceBetween={0}
                    navigation={true}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <div className="content">
                        <img src={ProductImg} alt="" className="w-100" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img src={ProductImg} alt="" className="w-100" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img src={ProductImg} alt="" className="w-100" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <h2>Dummy Product Title</h2>
              <div className="d-flex align-items-center">
                <Rating size={20} readonly={true} initialValue={rating} />
                <span className="ms-2">10 Reviews</span>
              </div>

              <div className="price d-flex align-items-center gap-2 fs-3 mt-3 fw-bold">
                <span>$100</span>
                <del style={{ color: "#06112380" }}>$200</del>
              </div>

              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam <br />
                quae quidem, quod quia quisquam quos quas quibusdam quidem quia{" "}
                <br />
                quod quae quia quisquam quos quas quibusdam quidem quia quod
              </p>

              <div className="mt-3">
                <strong>Select Size</strong>
                <div className="size mt-2">
                  <button className="btn btn-size">S</button>
                  <button className="btn btn-size ms-1">M</button>
                  <button className="btn btn-size ms-1">L</button>
                  <button className="btn btn-size ms-1">XL</button>
                </div>
              </div>

              <div className="add-to-cart my-4">
                <button className="btn btn-primary text-uppercase">
                  Add to Cart
                </button>
              </div>

              <hr />

              <div className="">
                <strong>SKU: </strong>
                DDXX2234
              </div>
            </div>
          </div>

          <div className="mb-5">
            <Tabs defaultActiveKey="description"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="description" title="Description">
                Tab content for Description
              </Tab>
              <Tab eventKey="reviews" title="Reviews (10)">
                Tab content for Reviews
              </Tab>
            </Tabs>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;
