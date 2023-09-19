import React from 'react'
import { Link } from 'react-router-dom'

export const WebAppDevelopment = () => {
    return (
        <div className="page-section">
            <div className="container">
                <div className="text-center">
                    <div className="subhead">Web Application Development</div>
                    <h2 className="title-section">Technology Stack We Follow</h2>
                </div>
                <div className="row my-5 card-blog-row">
                    <div className="col-lg-3 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <img src="../assets/img/java-logo-transparent-free-png.webp" width={50} alt='Java' />
                            </div>
                            <div className="body">
                                <div className="post-title"><a href="blog-single.html">Java Stack</a></div>
                                <div className="post-excerpt">
                                It is a fast, secure, reliable programming language for building everything from mobile 
                                apps and enterprise software to big data applications and server-side technologies.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <img src="../assets/img/mern.png" width={200} alt='Java' />
                            </div>
                            <div className="body">
                                <div className="post-title"><a href="blog-single.html">MERN Stack</a></div>
                                <div className="post-excerpt">MERN is a famous JavaScript stack that is used for faster and easier deployment of full-stack Website.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <img src="../assets/img/NET_Core_Logo.svg.png" width={45} alt='Java' />
                            </div>
                            <div className="body">
                                <div className="post-title"><a href="blog-single.html">Dot Net Stack</a></div>
                                <div className="post-excerpt">With this framework, we build websites and apps capable of running on Windows, macOS, and Linux with the help of specialized tools & libraries.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 py-3">
                        <div className="card-blog">
                            <div className="header">
                               
                            </div>
                            <div className="body">
                                <div className="post-title"><a href="blog-single.html">Let’s Discuss Your Idea!</a></div>
                            </div>
                            <div className="header">
                                <img src="../assets/img/icons/customer_services.svg" width={150} alt='Java' />
                            </div>
                            <div className="footer">
                                <Link to="/contactus">Contact Us<span className="mai-chevron-forward text-sm" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="text-center">
                    <a href="blog.html" className="btn btn-primary">View More</a>
                </div> */}
            </div>
        </div>
    )
}
