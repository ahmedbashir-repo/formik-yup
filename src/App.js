
import './App.css';
import rocketImg from './assets/rocket.png';
import {Signup} from './components/Signup'

function App() {
  return (    
      <div className="container mt-3">
        <div className = "row">
          <div className = "col-md-5">
              <Signup />
          </div>
          <div className = "col-md-7">
            <img src={rocketImg} className="img-fluid w-100" alt="Rocket Signup"></img>
          </div>
        </div>
      </div>
  );
}

export default App;
