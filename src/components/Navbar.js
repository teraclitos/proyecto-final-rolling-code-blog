import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import BSNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Badge from "react-bootstrap/Badge";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTrash,
  faUser,
  faHeart,
  faEnvelope,
  faRightToBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";

const Navbar = ({ cart, del, clear, data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      <BSNavbar
        className="bg-nav "
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container fluid>
          <Link to="/" style={{ textDecoration: "none" }}>
            <BSNavbar.Brand>
              <img
                alt=""
                src="\logoRollingneta.png"
                width="75"
                height="75"
                className="d-inline-block align-top"
              />
            </BSNavbar.Brand>
          </Link>
          <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BSNavbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link onClick={handleShow}>
                <Link
                  to="/"
                  className="link-nav"
                  style={{ textDecoration: "none" }}
                >
                  Favoritos
                  <FontAwesomeIcon icon={faHeart} className="mx-2" />
                  <Badge bg="none">{cart.length}</Badge>
                </Link>
              </Nav.Link>

              <Offcanvas
                className="bg-offcanvas"
                show={show}
                onHide={handleClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="style-favorite">
                    Mis favoritos ({cart.length})
                  </Offcanvas.Title>
                  {cart.length > 0 && (
                    <Button className="btn-favorite" onClick={() => clear()}>
                      Limpiar favoritos
                    </Button>
                  )}
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {cart.length
                    ? cart.map((c, i) => (
                        <Row key={i}>
                          <Col>{c.title}</Col>
                          <Col>{c.price}</Col>
                          <Col>
                            <Button
                              className="btn-trash"
                              onClick={() => del(c)}
                            >
                              <FontAwesomeIcon
                                className="text-danger"
                                icon={faTrash}
                              />
                            </Button>
                          </Col>
                        </Row>
                      ))
                    : "Sin favoritos"}
                </Offcanvas.Body>
              </Offcanvas>

              <Nav.Link>
                <Link
                  to="/highlights"
                  className="link-nav"
                  style={{ textDecoration: "none" }}
                >
                  Destacados
                  <FontAwesomeIcon icon={faStar} className="mx-2" />
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/contacto"
                  className="link-nav"
                  style={{ textDecoration: "none" }}
                >
                  Contacto
                  <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
                </Link>
              </Nav.Link>

              <Nav.Link onClick={handleShowLogin}>
                <Link
                  to="/"
                  className="link-nav"
                  style={{ textDecoration: "none" }}
                >
                  Iniciar sesión
                  <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                </Link>
              </Nav.Link>
              <Nav.Link onClick={handleShowRegister}>
                <Link
                  to="/"
                  className="link-nav"
                  style={{ textDecoration: "none" }}
                >
                  Regístrate
                  <FontAwesomeIcon icon={faUser} className="mx-2" />
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex d-xl-none d-lg-none">
              <Form.Control
                type="search"
                // value={search}
                placeholder="Buscar por nombre o categoría"
                className="me-2"
                aria-label="Search"
                // onInput={(e) => setSearch(e.target.value)}
                // onChange={handleChange}
              />
              <Link to="/articlefound" style={{ textDecoration: "none" }}>
                <Button variant="outline-light">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-white mx-2"
                  />
                </Button>
              </Link>
            </Form>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      <ModalRegister
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />
      <ModalLogin showLogin={showLogin} setShowLogin={setShowLogin} />
    </>
  );
};

export default Navbar;
