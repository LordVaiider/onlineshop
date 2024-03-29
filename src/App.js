import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catlog from './pages/Catlog';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" exact component={Catlog} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
       </Switch>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
