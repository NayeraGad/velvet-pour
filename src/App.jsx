import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import {
  About,
  Art,
  Cocktails,
  Contact,
  Hero,
  Navbar,
  Menu,
} from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => (
  <main>
    <Navbar />
    <Hero />
    <Cocktails />
    <About />
    <Art />
    <Menu />
    <Contact />
  </main>
);

export default App;
