import { Outlet, Link } from "react-router-dom";
import '../App.css';
import logo from '../images/logo.png'

const Layout = () => {
  return (
    <>
      <nav>
        <div className="nav-bar text shadow">
          <ul>
            <li>
              <img className="small image"src={logo} alt = "Sales DashBoard Logo"/>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Login">Login</Link>
            </li>
            <li>
              <Link to="Profile">Profile</Link>
            </li>
          </ul>
        </div>
        </nav>

      <Outlet />
    </>
  )
};

export default Layout;