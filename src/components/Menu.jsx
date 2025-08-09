import { allCocktails } from "../constants";

const Menu = () => {
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
        {allCocktails.map((cocktail) => {
          const { id, name } = cocktail;

          return <button key={id}>{name}</button>;
        })}
      </nav>

      <div className="menu-content">
        <div className="arrows">
          <button aria-label="next arrow">
            <img src="/images/right-arrow.png" alt="" role="presentation" />
          </button>

          <button aria-label="previous arrow">
            <img src="/images/left-arrow.png" alt="" role="presentation" />
          </button>
        </div>

        <div className="cocktail">
          <img src={allCocktails[0].image} alt={allCocktails[0].name} />
        </div>

        <div className="recipe">
          <div className="titles">
            <p>Recipe for:</p>
            <h2>{allCocktails[0].name}</h2>
          </div>

          <div className="details">
            <h3>{allCocktails[0].title}</h3>
            <p>{allCocktails[0].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
