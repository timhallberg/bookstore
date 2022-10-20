import React from "react";
//this component contains the footer and we have used bootstrap classes to create the footer.
export const Footer = () => {
  return (
    <div className="text-center text-lg-start bg-light text-muted border-top border-dark" style={{ position: "fixed", bottom: "0", width: "100%" }}>
      <section className="">
        <div className="container text-center text-md-start mt-2">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto ">
              <h6 className="text-uppercase fw-bold">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h6 className="text-uppercase fw-bold mb-2">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Policies
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Coockie Setting
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
              <h6 className="text-uppercase fw-bold mb-2">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Customer Service
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
              <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
