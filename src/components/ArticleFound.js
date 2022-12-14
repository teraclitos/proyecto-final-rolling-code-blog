import React, { useState, useEffect } from "react";
import { Container, Row, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Pagination } from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ArticleCard from "./ArticleCard";

const ArticleFound = ({ data, add, cart, auth }) => {
  const [stock, setStock] = useState(data);
  const [search, setSearch] = useState("");

  let handleChange = (e) => {
    setSearch(e.target.value);
    filterArticle(e.target.value);
  };

  useEffect(() => {
    setStock(data);
  }, []);

  const filterArticle = (terminoBusqueda) => {
    var resultadoBusqueda = data.filter((elemento) => {
      if (
        elemento.title
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(terminoBusqueda.toUpperCase()) ||
        elemento.category
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(terminoBusqueda.toUpperCase()) ||
        elemento.description
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(terminoBusqueda.toUpperCase())
      ) {
        return elemento;
      }
    });
    setStock(resultadoBusqueda);
    if (terminoBusqueda == "") {
      setStock(data);
    }
  };

  return (
    <div>
      <body className="body-found">
        <Container>
          <Form className="my-5">
            <InputGroup className="mb-3">
              <InputGroup.Text className="color-span">
                <FontAwesomeIcon
                  style={{ fontSize: "2em", color: "#1986a0" }}
                  icon={faMagnifyingGlass}
                />
              </InputGroup.Text>
              <Form.Control
                value={search}
                placeholder="Buscar por nombre o categoría o descripción"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
              />
            </InputGroup>
          </Form>
        </Container>
        <Container>
          {search && (
            <h3 className="card-title card-title-found mb-5">
              Resultados de Búsqueda
            </h3>
          )}
          <Container>
            <Row lg={4}>
              {stock.map((d, i) => (
                <div className="mb-3  ">
                  <ArticleCard cart={cart} d={d} add={add} auth={auth} />
                </div>
              ))}
            </Row>
          </Container>
        </Container>
      </body>
      ;
    </div>
  );
};

export default ArticleFound;
