import React from "react";
import Logo from "../../assets/images/logo-white.png";

const Footer = () => {
  return (
    <>
      <div className="pt-5 footer">
        <div className="container text-white">
          <div className="row">
            <div className="col-md-3">
              <img src={Logo} alt="logo" width={150} />
              <p className="pt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="col-md-3">
                <h3>Categories</h3>
                <ul>
                    <li>
                        <a href="">Kids</a>
                    </li>
                    <li>
                        <a href="">Women</a>
                    </li>
                    <li>
                        <a href="">Mens</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3>Quick Links</h3>
                <ul>
                    <li>
                        <a href="">Login</a>
                    </li>
                    <li>
                        <a href="">Register</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3>Get in Touch</h3>
                <ul>
                    <li>
                        <a href="">+880148411241</a>
                    </li>
                    <li>
                        <a href="">sh3235662@gmail.com</a>
                    </li>
                </ul>
            </div>
          </div>

          <div className="text-center border-top mt-3 py-3">
            <p className="mb-0"> &copy; {new Date().getFullYear()} All rights reserved</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
