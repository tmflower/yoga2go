// TODO: Add React Router

import './styles/App.css';
import { Navbar } from './Components/Navbar';
import { Poses } from './Components/Poses';
import { PosesList } from './Components/PosesList';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Poses /> */}
      <PosesList />
      {/* <About /> */}
    </div>
  );
}

export default App;
