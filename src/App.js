
import './App.css';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>This is heading h1.</h1>
      <p>This is normal paragraph text.</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
