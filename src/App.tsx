import About from "./components/About";
import Cursor from "./components/Cursor";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import GithubStats from "./components/Git";

import { ThemeProvider } from "./provider/ThemeProvider";
import { CursorProvider } from "./context/cursor.context";

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <div className="min-h-[calc(100vh-48px)] sm:min-h-[calc(100vh-96px)] flex flex-col">
          <Cursor />
          <main className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col gap-y-4">
              <Header />
              <About />
              <Projects />
              <Experience />
              <Skills />
              <Education />
              <GithubStats />
            </div>
          </main>
          <Footer />
        </div>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
