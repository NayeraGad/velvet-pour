import React from "react";
import { featureLists, goodLists } from "../constants";
import { FaCheckCircle } from "react-icons/fa";

const Art = () => {
  return (
    <section id="art">
      <div className="art-container">
        <h2 className="z-10">The ART</h2>

        <div className="art-content">
          <ul className="features-list z-10">
            {goodLists.map((feature, i) => (
              <li key={`good ${i}`}>
                <FaCheckCircle />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img src="/images/under-img.jpg" alt="cocktail image" />
          </div>

          <ul className="features-list z-10">
            {featureLists.map((feature, i) => (
              <li key={`good ${i}`}>
                <FaCheckCircle />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h3>Sip-Worthy Perfection</h3>

          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
