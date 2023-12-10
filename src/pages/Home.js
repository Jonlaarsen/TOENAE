import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import New from "../components/New";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="clothing-card-hero">
        {/* {Products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="clothing-card" key={product.id}>
              <h1>{product.title}</h1>
              <img
                className="card-img"
                src={product.images}
                alt={product.desc}
              />
              <div className="clothing-card-text">
                <p>{product.desc}</p>
              </div>
            </div>
          </Link>
        ))} */}
      </div>
      <div>
        <Popular />
        <New />
        <NewsLetter />
      </div>

      <div className="bottom-logo">
        <h2>hello</h2>
        <img src="https://assets.bigcartel.com/theme_images/60399594/TOENAE_text_logo.png?auto=format&fit=max&h=400&w=1068"></img>
        <h2>Hi</h2>
      </div>
    </div>
  );
};

export default Home;
