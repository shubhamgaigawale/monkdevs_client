import React from 'react'
import { Link } from 'react-router-dom'

export const Services = () => {
  return (
    <div className="page-section">
  <div className="container">
    <div className="text-center">
      <div className="subhead">Our Services</div>
      <h2 className="title-section">See what can we do for your Projects</h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
        <div className="text-center">
          <div className="img-fluid mb-4">
            <img src="../assets/img/icons/web_development.svg" alt />
          </div>
          <h5>Web App Development</h5>
          <Link to="/web-app-development">Read more<span class="mai-chevron-forward text-sm"></span></Link>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
        <div className="text-center">
          <div className="img-fluid mb-4">
            <img src="../assets/img/icons/app_development.svg" alt />
          </div>
          <h5>Mobile App Development</h5>
          <Link to="/mobile-app-development">Read more<span class="mai-chevron-forward text-sm"></span></Link>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
        <div className="text-center">
          <div className="img-fluid mb-4">
            <img src="../assets/img/icons/app_development.svg" alt />
          </div>
          <h5>Zoho Development</h5>
          <Link to="/zoho-development">Read more<span class="mai-chevron-forward text-sm"></span></Link>
        </div>
      </div>
      {/* <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
        <div className="text-center">
          <div className="img-fluid mb-4">
            <img src="../assets/img/icons/ui_ux_design.svg" alt />
          </div>
          <h5>UI/UX Design</h5>
        </div>
      </div> */}
    </div>
  </div>
</div>
  )
}
