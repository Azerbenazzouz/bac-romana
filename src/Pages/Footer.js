import React from 'react'
import { Link } from "react-router-dom";

import "./Footer.css"
function Footer() {
    return (
        <footer className="footer-16371">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 text-center">
                        <div className="footer-site-logo mb-4">
                            <Link to="/">ROMANA BAC</Link>
                        </div>
                        <div className="social mb-4">
                            <h3>Restez en contact</h3>
                            <ul className="list-unstyled">
                                <li className="fb"><a href="https://www.facebook.com/leilabarrani" target="_blank"><span class="bi bi-facebook"></span></a></li>
                            </ul>
                        </div>
                        <div className="copyright">
                        <p className="mb-0"><small>©AZER. All Rights Reserved.</small><a href="https://azerbenazzouz.com" target="_blank">azer ben azzouz</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
