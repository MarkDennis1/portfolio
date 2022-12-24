import { About, Footer, Header, Skills, Works, Contact } from "./container";
import { Nav } from "./components";
function App() {
  return (
    <div className="bg-gray-50">
      <Nav />
      <div className="px-8 max-w-4xl mx-auto">
        <Header />
        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <About />
        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Skills />
        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Works />
        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
