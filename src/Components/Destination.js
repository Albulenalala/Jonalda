import React from 'react'
import d1 from "../Assets/d1.jpg"
import d2 from "../Assets/d2.jpg"
import d3 from "../Assets/d3.jpg"
import d4 from "../Assets/d4.jpg"


function Destination() {
  return (
    <div>
      {/* Destination Photos Section */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div
                  className="col-lg-12 col-md-12 wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src={d1}
                      alt=""
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Per te gjitha moshat
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src={d2}
                      alt=""
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Per Femije
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.5s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src={d3}
                      alt=""
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Shkollore
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350 }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href=""
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={d4}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Librari Jonalda
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End of Destination Photos Section */}
    </div>
  )
}

export default Destination
