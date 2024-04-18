import React from 'react';

export const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="container">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6 footer-column">
              <p className="small">Copyright © 2020 Nexcent ltd.<br />
                All rights reserved</p>
            </div>
            <div className="col-lg-2 col-md-6 footer-column">
              <h5 className="mb-3">Company</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">About us</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Contact us</a></li>
                <li><a href="#" className="footer-link">Pricing</a></li>
                <li><a href="#" className="footer-link">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-column">
              <h5 className="mb-3">Support</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Help center</a></li>
                <li><a href="#" className="footer-link">Terms and Services</a></li>
                <li><a href="#" className="footer-link">Legal</a></li>
                <li><a href="#" className="footer-link">Privacy policy</a></li>
                <li><a href="#" className="footer-link">Status</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-column">
              <h5 className="mb-3">Stay up to date</h5>
              <form>
                <div className="d-flex div-margin p-2">
                  <div>
                    {/* <input type="text" value="Your email address" className="input-write" /> */}
                  </div>
                  <div>
                    <button type="button" className="footer-button">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
