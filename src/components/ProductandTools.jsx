import React from 'react';

function ProductCard() {
  return (
    <div className="eerie-black mp71ProductCard backgroundSecondary absolute-center hover-zoom black-border p-4">
      <div className="lazyload-wrapper">
        <a href="/products">
          <img
            className=""
            src="https://storage.googleapis.com/groww-assets/web-assets/img/stock/fno_mint_light.svg"
            width="56"
            height="56"
            alt=""
            loading="lazy"
          />
        </a>
        <p style={{ fontSize: "20px" ,color : "white"}}>F & O</p>
      </div>
    </div>
  );
}

function ProductCardList() {
  return (
    <div className="flex justify-center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductCardList;
