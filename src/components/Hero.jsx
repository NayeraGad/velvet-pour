import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <h1>MOJITO</h1>

      <div className="hero-body">
        <div className="hero-content">
          <div className="tagline">
            <p>Cool. Crisp. Classic.</p>

            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>

          <div className="hero-details">
            <p>
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>

            <a href="/cocktails">View cocktails</a>
          </div>
        </div>
      </div>

      <img
        src="/images/hero-right-leaf.png"
        alt="Right leaf"
        className="hero-right-leaf"
      />

      <img
        src="/images/hero-left-leaf.png"
        alt="Left leaf"
        className="hero-left-leaf"
      />

      <img src="/images/arrow.png" alt="hero arrow" className="hero-arrow" />
    </section>
  );
};

export default Hero;
