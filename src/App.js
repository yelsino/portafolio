import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Portafolio from './Portafolio';
import Pedidos from './components/proyectos/Pedidos';
import Gestion from './components/proyectos/Gestion';
import Numeros from './components/proyectos/Numeros';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Portafolio}/>
        <Route exact path='/pedidos' component={Pedidos}/>
        <Route exact path='/gestion' component={Gestion}/>
        <Route exact path='/numeros' component={Numeros}/>
      </Switch>
    </Router>
  );
}

export default App;
