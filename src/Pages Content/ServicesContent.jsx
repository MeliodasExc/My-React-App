import "../Style/main.css"
import "../Style/services.css"
export default function ServicesContent(){
    return(
        
        <div className="content">

            <div className="services_login">
            <div className="login_header_content">
                <h1>Sign in/Sign Up</h1>
                <span>Sign in to your account for continuing using our services</span>
            </div>
            <form>
                <div className="input">
                    <label>Username</label>
                    <input type="text" placeholder="" required/>
                    <label>Password</label>
                    <input type="password" placeholder="" required/>
                </div>
            </form>
                <span>
                    <button className="login_button">Login</button>
                </span>
            </div>


        </div>

    );

}