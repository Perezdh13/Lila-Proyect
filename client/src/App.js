import Router from "./routes/Router";
import logoLila from './assets/img/logoLila.png'
import fondo from './assets/img/fondo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App" style={{width: '100vw', height: '100vh', zIndex: '-1', backgroundImage: `url(${fondo})`, backgroundPosition: 'center'}}>
     <Router />
    </div>
  );
}

export default App;
