import React from 'react'

export const Footer = () => {
    return (
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 py-3">
                        <h3>Monk<span class="fg-warning">Devs</span></h3>
                    </div>
                    <div class="col-lg-3 py-3">
                        <h5>Contact Information</h5>
                        <p>Mumbai, Maharashtra, India</p>
                        <p>Email: monkdevs@gmail.com</p>
                        <p>Phone: +91 9326514213</p>
                    </div>
                    <div class="col-lg-3 py-3">
                        <h5>Company</h5>
                        <ul class="footer-menu">
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">News & Feed</a></li>
                        </ul>
                    </div>

                </div>

                <hr />

                <div class="row mt-4">
                    <div class="col-md-6">
                        <p>© Monkdevs</p>
                    </div>
                    <div class="col-md-6 text-right">
                        <div class="sosmed-button">
                            <a href="#"><span class="mai-logo-facebook-f"></span></a>
                            <a href="#"><span class="mai-logo-twitter"></span></a>
                            <a href="#"><span class="mai-logo-youtube"></span></a>
                            <a href="#"><span class="mai-logo-linkedin"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
