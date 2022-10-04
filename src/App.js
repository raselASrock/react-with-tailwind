
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>This is heading h1.</h1>
      <p>This is normal paragraph text.</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
