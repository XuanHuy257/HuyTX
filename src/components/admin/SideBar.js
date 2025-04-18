
import { Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import {useParams } from "react-router-dom"; 
const SideBar = () => {
  return (
    <Col md={2} className="side-bar">
      <Link to="/">
        <img
          src="../../images/logo.png"
          style={{
            width: "65%",
            marginLeft: "30px",
            marginTop: "20px"
          }}
        />
      </Link>
      <ul className="adminsidebar"
        style={{ marginTop: "80px" }}>
        <li>
          <NavLink to="/categorymanagement/1" >
            <div className="navlink-container">
              <p style={{ marginLeft: "30px" }}>Categories</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/productmanagement/2">
            <div className="navlink-container">
              <p style={{ marginLeft: "30px" }}>Products</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminusers/3">
            <div className="navlink-container">
              <p style={{ marginLeft: "30px" }}>Users</p>
            </div>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/adminorders">
            <div className="navlink-container">
              <p style={{ marginLeft: "30px" }}>Orders</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics">
            <div className="navlink-container">
              <p style={{ marginLeft: "30px" }}>Statistics</p>
            </div>
          </NavLink>
        </li> */}
      </ul >
    </Col >
  );
};
export default SideBar;
