import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/common/Header";
import NewArrivals from "../components/NewArrivals";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <header className="shadow">
        <div className="bg-dark text-center py-3">
          <span className="text-white ">Your Fashion Partner</span>
        </div>

        <div className="">
          <Header />
        </div>
      </header>

      <div className="">
        <Banner />
      </div>

      <div className="newArrivals py-5">
        <div className="container">
          <h2>New Arrivals</h2>
          <NewArrivals />
        </div>
      </div>

      <div className="featuredProducts py-5">
        <div className="container">
          <h2>Featured Products</h2>
          <FeaturedProducts />
        </div>
      </div>

      <Footer>
        <Footer/>
      </Footer>
    </>
  );
};

export default Home;
