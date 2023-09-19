import React from 'react'
import { Link } from 'react-router-dom'

export const MobileAppDevelopment = () => {
    return (
        <div className="page-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 py-3">
                        <h2 className="title-section">
                            <span className="fg-primary">Mobile App Development</span> Addressing Diverse Businesses
                        </h2>
                        <p>
                            Inventcolabs is committed to offer inventive value through resourceful technology alliances to transform your business. We are actively delivering advanced mobile app solutions across different industry verticals offering heavy-duty, collaborative, and performance-centric mobile applications to diverse businesses. Our user-sensitive solutions aim at solving business-specific problems, reduce costs, and maximize profitability. We are a leading mobile app development company catering to different industry verticals
                            including automobile, e-commerce, finance, technology, education, fashion, IT, and healthcare, across different formats and arrangements of operations and services.
                        </p>
                    </div>
                    <div className="col-lg-6 py-3">
                        <div className="about-img">
                            <img src="../assets/img/img7.webp" alt />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
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
