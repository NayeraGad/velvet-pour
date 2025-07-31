import gsap from "gsap";
import { lovedCocktails, popularCocktails } from "../constants";
import { useGSAP } from "@gsap/react";

const Cocktails = () => {
  useGSAP(() => {
    const cocktailTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    cocktailTimeline
      .from(".cocktail-left-leaf", {
        x: -100,
        y: 100,
      })
      .from(".cocktail-right-leaf", {
        x: 100,
        y: 100,
      });
  });

  return (
    <section id="cocktails">
      <img
        src="/images/cocktail-right-leaf.png"
        alt="cocktail right leaf"
        className="cocktail-right-leaf"
      />

      <img
        src="/images/cocktail-left-leaf.png"
        alt="cocktail left leaf"
        className="cocktail-left-leaf"
      />

      <div className="cocktail-lists">
        <section className="popular-cocktails">
          <h2>Most popular cocktails:</h2>

          <ul>
            {popularCocktails.map(({ name, country, details, price }) => (
              <li key={name}>
                <div>
                  <h3>{name}</h3>
                  <p>
                    {country} | {details}
                  </p>
                </div>

                <span>- ${price}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="loved-cocktails">
          <h2>Most loved mocktails:</h2>

          <ul>
            {lovedCocktails.map(({ name, country, details, price }) => (
              <li key={name}>
                <div>
                  <h3>{name}</h3>
                  <p>
                    {country} | {details}
                  </p>
                </div>

                <span>- ${price}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Cocktails;
