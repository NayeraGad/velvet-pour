import React from "react";
import { openingHours, socialIcons } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const headerSplit = SplitText.create(".footer-content h2", {
      type: "words",
    });

    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
    });

    footerTimeline
      .from(headerSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from(".footer-content > div, .footer-content address", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to(".footer-right-leaf, footer-left-leaf", {
        yPercent: "-50",
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <footer id="contact">
      <section className="footer-content">
        <h2>Where to Find Us</h2>

        <address>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </address>

        <div>
          <h3>Contact Us</h3>
          <a href="tel:(555) 987-6543">(555) 987-6543</a>
          <a href="mailto:hello@jsmcocktail.com">hello@jsmcocktail.com</a>
        </div>

        <div>
          <h3>Open Every Day</h3>

          <ul>
            {openingHours.map(({ day, time }) => (
              <li key={day}>
                <p>
                  {day}: {time}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div aria-label="Social media" className="socials">
          <h3>Socials</h3>

          <ul>
            {socialIcons.map(({ name, icon, url }) => (
              <li key={name}>
                <a href={url} aria-label={name}>
                  <img src={icon} alt="" role="presentation" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <img
        src="/images/footer-right-leaf.png"
        className="footer-right-leaf"
        alt=""
        aria-hidden="true"
      />
      <img
        src="/images/footer-left-leaf.png"
        className="footer-left-leaf"
        alt=""
        aria-hidden="true"
      />
      <img
        src="/images/footer-drinks.png"
        className="footer-drinks"
        alt=""
        aria-hidden="true"
      />
    </footer>
  );
};

export default Contact;
