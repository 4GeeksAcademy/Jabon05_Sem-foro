import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import {TrafficLight} from './components/Semaforo';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<TrafficLight />);

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrafficLight/>
  </React.StrictMode>,
)*/
