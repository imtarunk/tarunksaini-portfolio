import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import GithubStats from "../components/Git";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="noise-surface min-h-svh">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <GithubStats />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
