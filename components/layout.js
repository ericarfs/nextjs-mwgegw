import { readConfigFile } from 'typescript';

import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <>
      <div className="menu-container">
        <div className="searchbar main-green">
          <div className="brand">
            <Link to="/">PetShop</Link>
          </div>
          <div className="searchInput">
            <form className="d-flex">
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Buscar Produto"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="login">
            <div className="btn btn-primary btn-sm main-orange">
              <Link to="/login">
                <div id="loginTxt">Entre ou cadastre-se!</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="categories light-green">
          <Link to="/products/cachorro">
            <div className="category">Cachorro </div>
          </Link>
          <Link to="/products/gato">
            <div className="category">Gato </div>
          </Link>
          <Link to="/products/passaro">
            <div className="category">Pássaro </div>
          </Link>
        </div>
      </div>
    </>
  );
};
