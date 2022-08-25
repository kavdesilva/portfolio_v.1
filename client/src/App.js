import './App.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
