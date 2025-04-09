import React, { useState, useEffect } from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
const Header = () => {
  const [user, setUser] = useState();
  const checkLogin = () => {
    if (sessionStorage.getItem("user") !== null) {
      return true;
    } else {
      return false;
    }
  };

  const navigate = useNavigate();

  return (
    <Container fluid className="fixed-top">
      <Row>
        <Col md={12} className="header">
          <nav
            className="navbar navbar-expand-md navbar-light bglight"
            style={{ padding: "0" }}
          >
            <Row style={{ width: "100%" }}>
              <Col
                md={3}
                style={{
                  height: "50px",
                  lineHeight: "50px",
                  textAlign: "center",
                }}
                className="header-item"
              >
                <Link to="/">
                  <img
                    // src="../../images/logo.png"
                    src="../../images/logo.png"
                    alt="logo"
                    style={{
                      width: "60%",
                      height: "45px",
                      marginLeft: "30px",
                    }}
                  />
                </Link>
              </Col>
              <Col md={9}>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <Col md={7} style={{ height: "50px", padding: "5px" }}>
                    <Link
                      className="header-item"
                      style={{
                        textDecoration: "none",
                        textAlign: "center",
                        display: "inline-block",
                        marginRight: "20px",
                      }}
                      to={"/"}
                    >
                      <p style={{ color: "white", lineHeight: "40px" }}>
                        {" "}
                        Home
                      </p>
                    </Link>
                    <Link
                      className="header-item"
                      style={{
                        textDecoration: "none",
                        textAlign: "center",
                        display: "inline-block",
                        marginRight: "20px",
                      }}
                      to={"/products"}
                    >
                      <p style={{ color: "white", lineHeight: "40px" }}>
                        {" "}
                        Products
                      </p>
                    </Link>

                    <Link
                      className="header-item"
                      style={{
                        textDecoration: "none",
                        textAlign: "center",
                        display: "inline-block",
                        marginRight: "20px",
                      }}
                      to={"/about "}
                    >
                      <p style={{ color: "white", lineHeight: "40px" }}>
                        {" "}
                        About
                      </p>
                    </Link>

                    <Link
                      className="header-item"
                      style={{
                        textDecoration: "none",
                        textAlign: "center",
                        display: "inline-block",
                        marginRight: "20px",
                      }}
                      to={"/contact"}
                    >
                      <p style={{ color: "white", lineHeight: "40px" }}>
                        {" "}
                        Contact
                      </p>
                    </Link>
                  </Col>
                  <Col md={5} style={{ height: "50px", textAlign: "right" }}>
                    <div className="w-100">
                      {checkLogin() ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "right",
                          }}
                        >
                          {JSON.parse(sessionStorage.getItem("user")).roll ==
                          1 ? (
                            <Link
                              className="header-item"
                              style={{
                                textDecoration: "none",
                                textAlign: "center",
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                              to={"/dashboard"}
                            >
                              <p style={{ color: "white", lineHeight: "50px" }}>
                                DashBoard
                              </p>
                            </Link>
                          ) : (
                            <Link
                              style={{
                                textAlign: "center",
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                              to={"/contact"}
                            >
                              <p style={{ color: "white", lineHeight: "50px" }}>
                                {" "}
                                <BsFillCartFill /> Giỏ hàng
                              </p>
                            </Link>
                          )}

                          <div class="dropdown">
                            <Nav
                              style={{ color: "white", lineHeight: "50px" }}
                              class=" dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              User
                            </Nav>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="profile">
                                My profile
                              </a>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                              <a class="dropdown-item" href="Logout">
                                logout
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Link
                            style={{
                              textAlign: "center",
                              display: "inline-block",
                              marginRight: "10px",
                            }}
                            to={"/shoppingcard"}
                          >
                            <p style={{ color: "white", lineHeight: "50px" }}>
                              Giỏ hàng
                            </p>
                          </Link>
                          <Link to={"/login"} style={{ textAlign: "center" }}>
                            <p style={{ color: "white", lineHeight: "50px" }}>
                              Đăng Nhập
                            </p>
                          </Link>
                          <Link to={"/signup"} style={{ textAlign: "center" }}>
                            <p style={{ color: "white", lineHeight: "50px" }}>
                              Đăng Ký
                            </p>
                          </Link>
                        </div>
                      )}
                    </div>
                  </Col>
                </div>
              </Col>
            </Row>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
