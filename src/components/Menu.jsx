import { useState } from "react";
import { allCocktails } from "../constants";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex((index + allCocktails.length) % allCocktails.length);
  };

  const { image, name, title, description } = allCocktails[currentIndex];
  const nextCocktail =
    allCocktails[(currentIndex + 1) % allCocktails.length].name;
  const prevCocktail =
    allCocktails[(currentIndex - 1 + allCocktails.length) % allCocktails.length]
      .name;

  return (
    <section id="menu" aria-label="Cocktail menu">
      <img
        src="/images/slider-right-leaf.png"
        className="slider-right-leaf"
        alt=""
        aria-hidden="true"
      />
      <img
        src="/images/slider-left-leaf.png"
        className="slider-left-leaf"
        alt=""
        aria-hidden="true"
      />

      <nav>
        {allCocktails.map((cocktail, index) => {
          const { id, name } = cocktail;
          const isActive = currentIndex === index;

          return (
            <button
              key={id}
              className={`${isActive ? "active" : null}`}
              onClick={() => goToSlide(index)}
            >
              {name}
            </button>
          );
        })}
      </nav>

      <div className="menu-content">
        <div className="arrows">
          <button
            aria-label="previous arrow"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail}</span>
            <img src="/images/right-arrow.png" alt="" role="presentation" />
          </button>

          <button
            aria-label="next arrow"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail}</span>
            <img src="/images/left-arrow.png" alt="" role="presentation" />
          </button>
        </div>

        <div className="cocktail">
          <img src={image} alt={name} />
        </div>

        <div className="recipe">
          <div className="titles">
            <p>Recipe for:</p>
            <h2>{name}</h2>
          </div>

          <div className="details">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
