import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import { error } from "jquery";
import { Link } from "react-router-dom";
import Content from "./Content";
const Dashboard = () => {
  if (
    JSON.parse(sessionStorage.getItem("user")) != null &&
    JSON.parse(sessionStorage.getItem("user")).roll === 1
  ) {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBar />
            <Col md={10} style={{ padding: "0" }}>
              <div className="topbar row ml-1">
                <div className="col-10">
                  <h1 className="admin-title ">Admin management</h1>
                </div>
                <div className="col-2">
                  <Link to={"/profile"}>
                    <p style={{ color: "white" }}>Tài khoản</p>
                  </Link>
                  <Link to={"/logout"}>
                    <p style={{ color: "white" }}>Đăng xuất</p>
                  </Link>
                </div>
              </div>
              <div className="row">
                <Content />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    error("You are not allowed to access this page");
  }
};

export default Dashboard;
