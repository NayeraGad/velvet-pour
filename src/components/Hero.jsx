import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isSmDevice = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const headerSplit = new SplitText("h1", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    headerSplit.chars.forEach((char) => char.classList.add("header-gradient"));

    gsap.from(headerSplit.chars, {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".hero-right-leaf", { y: 200 }, 0)
      .to(".hero-left-leaf", { y: -200 }, 0);

    const startValue = isSmDevice ? "top 50%" : "center 60%";
    const endValue = isSmDevice ? "120% top" : "bottom top";

    const videoTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      videoTimeLine.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
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
              <p className="subtitle">
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

      <div className="video">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
