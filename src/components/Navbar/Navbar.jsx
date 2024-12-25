import "./Navbar.scss";
function Navbar() {
    return (
        <div className="nav">
            <div className="container">
                <div className="left">
                    <img src="/logo.png" alt="" />
                    <ul className="links">
                        <li>Home</li>
                        <li>Find Doctor</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="right">
                    <button className="login">Login</button>
                    <button className="signup">Sign-up</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar