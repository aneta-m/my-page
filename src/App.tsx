import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  const [targetElement, setTargetElement] = useState<{
    [key: string]: HTMLElement;
  } | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const sectionElements: { [key: string]: HTMLElement } = {};
    sections.forEach((section) => {
      sectionElements[section.id] = section;
    });
    setTargetElement(sectionElements);
  }, []);

  const navigateToSection = (sectionId: string) => {
    const sectionElement = targetElement ? targetElement[sectionId] : null;
    sectionElement && sectionElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav onClick={navigateToSection} />
      <Header />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

// const App = () => {
//   const [targetElement, setTargetElement] = useState(null);

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");
//     const sectionElements = {};
//     sections.forEach((section) => {
//       sectionElements[section.id] = section;
//     });
//     setTargetElement(sectionElements);
//   }, []);

//   const handleNavClick = (event, sectionId) => {
//     event.preventDefault();
//     const sectionElement = targetElement[sectionId];
//     sectionElement.scrollIntoView({ behavior: "smooth" });
//   };

//   return (

// <Router>
//   <nav>
//     <ul>
//       <li>
//         <Link to="/" onClick={(e) => handleNavClick(e, "home")}>
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link to="/about" onClick={(e) => handleNavClick(e, "about")}>
//           About
//         </Link>
//       </li>
//     </ul>
//   </nav>

//   <Route exact path="/" component={Home} />
//   <Route path="/about" component={About} />
// </Router>
//   );
// };

// const Home = () => <section id="home">Home</section>;
// const About = () => <section id="about">About</section>;

export default App;
