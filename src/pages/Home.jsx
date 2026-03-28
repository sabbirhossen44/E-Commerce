import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import Layout from "../components/common/Layout";

const Home = () => {
  return (
    <>
      <Layout>

        <div className="">
          <Banner />
        </div>

        <div className="">
          <NewArrivals />
        </div>

        <div className="">
            <FeaturedProducts />
        </div>
        
      </Layout>
    </>
  );
};

export default Home;
