import { FaCheckCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { featureLists, profilesList } from "../constants";

const About = () => {
  return (
    <div id="about">
      <div className="about-content">
        <div className="about-header">
          <span className="badge">Best Cocktails</span>

          <h2>Where every detail matters—from muddle to garnish</h2>
        </div>

        <div className="about-details">
          <p>
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.
          </p>

          <div className="testimonial">
            <div className="rating">
              <ul>
                {[...Array(4)].map((_, i) => (
                  <li key={i}>
                    <FaStar />
                  </li>
                ))}

                <li>
                  <FaStarHalfAlt />
                </li>
              </ul>

              <span>
                <span className="text-yellow">4.5</span>/5
              </span>

              <p>More than +12000 customers</p>
            </div>

            <div className="profiles">
              <ul className="profiles-list">
                {profilesList.map(({ imgPath }, i) => (
                  <img
                    src={imgPath}
                    alt={`profile ${i}`}
                    key={`profile ${i}`}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-12">
        <div className="card md:col-span-3">
          <img src="/images/abt1.png" alt="about image" />
        </div>

        <div className="card md:col-span-3">
          <div className="features-card">
            <h3>Crafted to Impress</h3>

            <ul className="space-y-4">
              {featureLists.map((feature, i) => (
                <li className="" key={`feature ${i}`}>
                  <FaCheckCircle />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card md:col-span-6">
          <img src="/images/abt2.png" alt="about image" />
        </div>
      </div>

      <div className="grid md:grid-cols-12">
        <div className="card md:col-span-7">
          <img src="/images/abt3.png" alt="about image" />
        </div>

        <div className="card md:col-span-5">
          <img src="/images/abt4.png" alt="about image" />
        </div>
      </div>
    </div>
  );
};

export default About;
