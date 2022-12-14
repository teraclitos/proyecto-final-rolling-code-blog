import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";

import {
  Button,
  Card,
  Container,
  Row,
  Modal,
  Form,
  Col,
  Pagination,
} from "react-bootstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Categorias from "./Categorias";
import { Route, Routes, Link, useParams } from "react-router-dom";

const Highlights = ({
  data,
  add,
  cart,
  toastError,
  toastSuccess,
  totalHighlights,
}) => {
  return (
    <div>
      <Container className="my-5" fluid>
        <h2 className="title-news text-center">Noticias de la Semana</h2>
        {totalHighlights.map((d, i) => (
          <Row className="container me-auto ms-auto" xs={1} md={2}>
            <div className="col-12 col-md-12">
              <Card border="0" className="mt-5 card-highlights">
                <Card.Header className="title-section d-flex align-items-center justify-content-center">
                  {d.category}
                </Card.Header>
                {/* data.section */}
                <Card.Body>
                  <div className="detail-author">
                    <Card.Img variant="top" src={d.img_URL} width={70} />
                    <Card.Title className="mt-4">{d.author}</Card.Title>
                  </div>
                  {/* data.author */}
                  <div className="col-12 linea-style" />
                  <Card.Text>
                    <div className="social-media">
                      <div className="red-social">
                        <FontAwesomeIcon
                          className="icon-fb"
                          style={{ fontSize: "3em" }}
                          icon={faFacebook}
                        />
                      </div>
                      <div className="red-social">
                        <FontAwesomeIcon
                          className="icon-tw"
                          icon={faTwitter}
                          style={{ fontSize: "3em" }}
                        />
                      </div>
                      <div className="red-social">
                        <FontAwesomeIcon
                          className="icon-ig"
                          style={{ fontSize: "3em" }}
                          icon={faInstagram}
                        />
                      </div>
                    </div>
                    <div className="col-12 linea-style" />
                  </Card.Text>
                  <Card.Title className="text-center">{d.title}</Card.Title>
                  {/* data.title */}
                </Card.Body>
              </Card>
              <Card border="0">
                <Card.Img src={d.img_URL} />
                {/* data.image */}
                <Card.Body className="card-destacado">
                  <Card.Title>{d.description}</Card.Title>
                  {/* data.subtitulo */}
                  <Card.Text>{d.content}</Card.Text>
                  {/* data.description */}
                </Card.Body>
              </Card>

              <div className="col-12 card-highlights" />
            </div>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Highlights;
