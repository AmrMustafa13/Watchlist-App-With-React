import Watchlist from './components/Watchlist';
import Add from './components/Add';
import Watched from './components/Watched';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './lib/font-awesome/css/all.min.css'
import './App.css';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Watchlist />
          </Route>
          <Route path='/watched'>
            <Watched />
          </Route>
          <Route path='/add'>
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
