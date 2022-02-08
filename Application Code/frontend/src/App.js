import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Events from './Component/Events';
import Admin from './Component/Admin';
import AddEvents from './Component/AddEvents';
import EditEvents from './Component/EditEvents';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound';
import LandingPage from './Component/LandingPage';
import Contact from './Component/Contact';
import Glimpse from './Component/Glimpse';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/all" component={Events} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/add" component={AddEvents} />
        <Route exact path="/glimpse" component={Glimpse} />
        <Route exact path="/edit/:id" component={EditEvents} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;