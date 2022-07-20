import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ShopNow from './pages/ShopNow';

function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/shop" component={ShopNow} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
    </BrowserRouter>
  );
}

export default App;
