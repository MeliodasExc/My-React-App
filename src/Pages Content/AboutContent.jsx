import "../Style/main.css"
import "../Style/about.css"

export default function AboutContent(){
    return(
        
     /*   <div className="content">
            <div className="about_container">
                <span className="about_column">
                    <p className="about_column_content"> 
                        <h1>What about us?</h1>
                        At CardHub, we are committed to connecting businesses with the right audience. 
                        Our platform showcases a diverse range of companies, making it easy for users to 
                        discover services, products, and innovations from various industries. Whether you&apos;re 
                        a startup looking for exposure or an established brand wanting to reach new customers, 
                        we provide the perfect space to highlight what makes your company unique.
                        Our mission is to simplify business discovery by presenting company information in an engaging, 
                        accessible format. With our carefully curated cards, users can quickly explore key details, services, 
                        and contact information—all in one place.
                        Join us in building a network where businesses thrive, and opportunities grow. Explore. Connect. Succeed.
                    </p>
                </span>
                <span className="about_column">
                    <p className="about_column_content"> 
                        <h1>Why choose us?</h1>
                        Trusted by Businesses
                        We connect thousands of companies with their target audience, providing visibility and engagement across industries.
                        Diverse & Inclusive Platform
                        From startups to established enterprises, we showcase a variety of businesses, ensuring a space for everyone.
                        Boost Your Reach
                        Gain exposure and attract new customers with a professional and engaging presence on our platform.
                        Data-Driven Insights
                        We provide analytics to help businesses understand their audience and refine their strategies.
                        User-Friendly Experience
                        Designed for simplicity and efficiency, our platform ensures easy navigation for both businesses and customers.
                        Secure & Reliable
                        Your data and business profile are protected with industry-standard security measures.
                    </p>
                </span>
            </div>
        </div>
*/
<>
    <section className="head_section">
    <div className="head_section_content">
        <div className="head_section_content_text">
            <p className="about_column_content"> 
                        <h1>What about us?</h1>
                        <div className="about_column_content_text">
                        At CardHub, we are committed to connecting businesses with the right audience. 
                        Our platform showcases a diverse range of companies, making it easy for users to 
                        discover services, products, and innovations from various industries. Whether you&apos;re 
                        a startup looking for exposure or an established brand wanting to reach new customers, 
                        we provide the perfect space to highlight what makes your company unique.
                        Our mission is to simplify business discovery by presenting company information in an engaging, 
                        accessible format. With our carefully curated cards, users can quickly explore key details, services, 
                        and contact information—all in one place.
                        Join us in building a network where businesses thrive, and opportunities grow. Explore. Connect. Succeed.
                        </div>
            </p>
        </div>
        <div className="head_section_content_image">
            <img src="/public/Aboutus-pholder.png" alt="About Us"/>
        </div>
    </div>
    </section>
    <section className="logo_section">
        <div className="logo_section_content">
            <div className="image_break">
                <img src="/public/office-pholder.png" alt="Our Office"/>
            </div>
            <div className="logo_section_text-logo">
                <div className="logo_section_content_logo">
                    <img src="/src/assets/logoipsum-300.svg" alt="CardHub Logo"/>
                </div>
                <div className="logo_section_content_text">
                    <p> 
                        <h1>Why choose us?</h1>
                        Trusted by Businesses
                        We connect thousands of companies with their target audience, providing visibility and engagement across industries.
                        Diverse & Inclusive Platform
                        From startups to established enterprises, we showcase a variety of businesses, ensuring a space for everyone.
                        Boost Your Reach
                        Gain exposure and attract new customers with a professional and engaging presence on our platform.
                        Data-Driven Insights
                        We provide analytics to help businesses understand their audience and refine their strategies.
                        User-Friendly Experience
                        Designed for simplicity and efficiency, our platform ensures easy navigation for both businesses and customers.
                        Secure & Reliable
                        Your data and business profile are protected with industry-standard security measures.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
    );

}