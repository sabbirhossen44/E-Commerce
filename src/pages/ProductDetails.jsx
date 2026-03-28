import React from "react";
import Layout from "../components/common/Layout";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductDetails = () => {
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <>
      <Layout>
        <div className="container">
          <div className="py-4">
            <Breadcrumb>
              <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
              <Breadcrumb.Item onClick={() => navigate("/shop")}>Shop</Breadcrumb.Item>
              <Breadcrumb.Item active>Product 1</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <div className="col-2">
                  
                </div>
                <div className="col-10">

                </div>
              </div>
            </div>

            <div className="col-md-7">

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;
