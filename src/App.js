import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tour from './pages/Tour'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/tour" component={Tour} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
