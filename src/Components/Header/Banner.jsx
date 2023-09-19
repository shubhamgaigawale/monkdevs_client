import React from 'react'

export const Banner = () => {
    return (
        <div className="page-banner home-banner mb-5">
            <div className="slider-wrapper">
                <div className="owl-carousel hero-carousel">
                    <div className="hero-carousel-item">
                        <img src="../assets/img/bg_image_1.jpg" alt />
                        <div className="img-caption">
                            <div className="subhead">We're design studio believe in ideas</div>
                            <h1 className="mb-4">Creative Design</h1>
                            <a href="#services" className="btn btn-outline-light">Get Started</a>
                        </div>
                    </div>
                    <div className="hero-carousel-item">
                        <img src="../assets/img/bg_image_2.jpg" alt />
                        <div className="img-caption">
                            <h1 className="mb-4">We combine Design, Thinking, and Technical</h1>
                            <a href="#services" className="btn btn-outline-light">Get Started</a>
                            <a href="#services" className="btn btn-primary">See Pricing</a>
                        </div>
                    </div>
                    <div className="hero-carousel-item">
                        <img src="../assets/img/bg_image_3.jpg" alt />
                        <div className="img-caption">
                            <div className="subhead">Easy way to build perfect website</div>
                            <h1 className="mb-4">Beautify handcrafted templates for your website</h1>
                            <a href="#services" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
