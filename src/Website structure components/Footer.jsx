import { Link } from "react-router-dom";
import "../Style/main.css"
import "../Style/footer.css"

export default function Footer(){

    return(
    
        
        <footer id="footer">
            <div className="footer_nav_container">
                <nav className="footer_navigation">
                    <div className="footer_column">                  
                        <p className="footer_content"> 
                        <h2 className="footer_title">About Us</h2>
                        Our platform connects users with companies across industries,
                        showcasing services, products, and innovations. Whether you&apos;re
                        a startup or an established brand, we provide the perfect space to
                        highlight your uniqueness.
                        <span>&copy;&nbsp;{new Date().getFullYear()}&nbsp;&nbsp;&mdash;&nbsp;&nbsp; CardHub Company. All rights deserved.</span>
                        </p>
                    </div>
                    <div className="footer_column">       
                        <p className="footer_content">
                            <h2 className="footer_title">Quick Links</h2>
                            <ul>
                            <li><Link to="/">Portfolio</Link></li>
                            <li><Link to="/about-us">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>    
                            </ul>
                        </p>
                    </div>
                    <div className="footer_column">                
                        <p className="footer_content">
                            <h2 className="footer_title">Resources</h2>
                            <ul>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">FAQs</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms of Service</Link></li>
                            <li><Link to="/">Support</Link></li>    
                            </ul>
                        </p>
                    </div>
                    <div className="footer_column">                    
                        <p className="footer_content">
                            <h2 className="footer_title">Where are we</h2>
                            <ul className="contact_list">
                                <li className="location">123 Web Street, Tech City, 56789</li>
                                <li className="email">contact@mywebsite.com</li>
                                <li className="phone">+1 (234) 567-8901</li>
                            </ul>
                        </p>
                    </div>
                </nav>
            </div>
        </footer>
    );
}