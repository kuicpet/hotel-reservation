import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import NotFound from "./pages/NotFound";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/rooms" component={Rooms}/>
        <Route  exact path="/rooms/:slug" component={SingleRoom}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer name = 'Beach Resort'/>
    </>
  );
}

export default App;
