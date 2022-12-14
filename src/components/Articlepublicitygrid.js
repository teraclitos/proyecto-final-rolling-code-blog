import { React, useState } from "react";
import "../styles/allcss.css";
import Categorias from "../components/Categorias";
import { Button, Card, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider";
import { Route, Routes, Link, useParams } from "react-router-dom";
import Advertising from "./Advertising";
import Header from "../components/Header";
import AsideAdvertisement from "./AsideAdvertisement";
import ArticleCard from "./ArticleCard";

const Articlepublicitygrid = ({
  data,
  add,
  cart,
  auth,
  toastError,
  totalHighlights,
  handleShowLogin,
  d,
}) => {
  return (
    <>
      <Advertising />
      <Header />
      <Slider
        totalHighlights={totalHighlights}
        cart={cart}
        d={d}
        add={add}
        auth={auth}
        toastError={toastError}
        handleShowLogin={handleShowLogin}
      />
      <div>
        <Categorias />
      </div>
      <div className="container grid-articles-publicity mt-5  mb-5  ">
        <div className="grid-articles">
          {data.map((d, i) => (
            <div className="mb-3  ">
              <ArticleCard
                cart={cart}
                d={d}
                add={add}
                auth={auth}
                toastError={toastError}
                handleShowLogin={handleShowLogin}
              />
            </div>
          ))}
        </div>
        <div className="grid-publicity d-none d-lg-grid ">
          <aside className="carousel-advertisement-container">
            <AsideAdvertisement />
          </aside>
        </div>
      </div>
    </>
  );
};

export default Articlepublicitygrid;
