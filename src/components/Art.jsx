import React from "react";
import { featureLists, goodLists } from "../constants";
import { FaCheckCircle } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Art = () => {
  const isSmDevice = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: isSmDevice ? "top 20%" : "top top",
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".fade", {
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.2,
      })
      .to(".cocktail-img img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  });

  return (
    <section id="art">
      <div className="art-container">
        <h2 className="fade">The ART</h2>

        <div className="art-content">
          <ul className="features-list fade">
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

          <ul className="features-list fade">
            {featureLists.map((feature, i) => (
              <li key={`good ${i}`}>
                <FaCheckCircle />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h3 className="fade">Sip-Worthy Perfection</h3>

          <div className="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
