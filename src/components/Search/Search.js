import React from "react";

const Search = () => {
  return (
    <div class="side-menu__block">
      <div class="side-menu__block-overlay custom-cursor__overlay"></div>
      <div class="side-menu__block-inner">
        <div class="side-menu__top justify-content-end">
          <a href="#" class="side-menu__toggler side-menu__close-btn">
            <img src="assets/icon/close-1-1.png" alt="images" />
          </a>
        </div>
        <div class="side-menu__top-introduce">
          <a href="index.html" rel="home" class="main-logo">
            <h1> LOGO </h1>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sint doloribus similique molestias necessitatibus blanditiis,
            reprehenderit dignissimos, dolorem commodi facilis ad temporibus
            ullam ipsum perferendis. Odio dolorem atque ratione deserunt?
          </p>
          <hr />
        </div>
        <div class="side-menu__top-lastest">
          <div class="side-menu__title">Buscar productos</div>
          <div class="col-md-12 col-sm-6">
            <input type="text" placeholder="Buscar productos" />
          </div>
          <div class="col-md-12 col-sm-6">
            <span>
              <p>Resultados encontrados</p>
            </span>
          </div>
          <div class="side-menu__lastest">
            <div class="side-menu__lastest-item">
              <img src="#" alt="images" />
              <div class="side-menu__lastest-layer">
                <a href="#" class="side-menu__lastest-icon"></a>
              </div>
            </div>
            <div class="side-menu__lastest-item">
              <img src="#" alt="images" />
              <div class="side-menu__lastest-layer">
                <a href="#" class="side-menu__lastest-icon"></a>
              </div>
            </div>
            <div class="side-menu__lastest-item">
              <img src="#" alt="images" />
              <div class="side-menu__lastest-layer">
                <a href="#" class="side-menu__lastest-icon"></a>
              </div>
            </div>
            <div class="side-menu__lastest-item">
              <img src="#" alt="images" />
              <div class="side-menu__lastest-layer">
                <a href="#" class="side-menu__lastest-icon"></a>
              </div>
            </div>
            <div class="side-menu__lastest-item">
              <img src="#" alt="images" />
              <div class="side-menu__lastest-layer">
                <a href="#" class="side-menu__lastest-icon"></a>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-sm-6">
            <span>
              <p>Ver más...</p>
            </span>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Search;