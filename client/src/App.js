import Router from "./routes/Router";
import logoLila from './assets/img/logoLila.png'
import fondo from './assets/img/fondo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App" style={{background:"linear-gradient(to right top, #8C52FF, #FFFFFF)", height:"100vh"}}>
     <Router />
    </div>
  );
}

export default App;
