import logo from './logo.svg';
import './App.css';
import ViewportProvider from "./viewport";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  return (
    <ViewportProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </ViewportProvider>
  );
}

export default App;
