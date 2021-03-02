import './App.css';
import {Helmet} from "react-helmet";
import GoogleMap from './components/GoogleMap';

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <h1>Sebastian Marquez</h1>
      <h1>Universidad Tecnologica</h1>
      <GoogleMap />
      <Helmet>
        <script defer data-key="a5d02b98-89ba-4c7c-9922-e401eb9e56fa" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>
    </div>
  );
}

export default App;
