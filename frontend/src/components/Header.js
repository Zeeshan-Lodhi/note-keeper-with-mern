import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Col,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => { }, [userInfo]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
      <Container>
        <Link to="/">
          <Navbar.Brand style={{ fontSize: 21 }}>Note Keeper</Navbar.Brand>
        </Link>
        {
          userInfo && (

            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ outline: "none" }} />
          )
        }

        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="m-auto">
            {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <Nav>
            {userInfo ? (
              <>
                <Nav.Link href="/mynotes">My Notes</Nav.Link>
                <Row>
                  <Col>
                    <NavDropdown title={`${userInfo.name}`} id="collasible-nav-dropdown">
                      <NavDropdown.Item ><Link to="/profile"> My Profile</Link></NavDropdown.Item>

                      <NavDropdown.Divider />

                      <NavDropdown.Item onClick={logoutHandler}>  Logout </NavDropdown.Item>
                    </NavDropdown>

                  </Col>

                  <Col className="d-flex justify-content-end mr-1">
                    <NavDropdown title="Visit Us" id="collasible-nav-dropdown">
                      <Row>
                        <div className="d-flex justify-content-around container" style={{ fontSize: 30 }}>
                          <a href="https://www.facebook.com/zeeshan.lodhi.35977" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-square iconn"></i>
                          </a>
                          <a href="https://www.instagram.com/zeeshan__lodhi/" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram iconn"></i>
                          </a>
                          <a href="https://github.com/Zeeshan-Lodhi/" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                          </a>
                        </div>
                      </Row>
                    </NavDropdown>
                  </Col>
                </Row>

              </>
            ) : (
              <Link to="/login">
                <Nav style={{ color: "white" }}>Login</Nav>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
