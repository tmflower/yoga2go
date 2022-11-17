// TODO: Add React Router

import './styles/App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { PosesList } from './Components/PosesList';
import { About } from './Components/About';
import { CategoriesList } from './Components/CategoriesList';
import { SelectedPose } from './Components/SelectedPose';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/poses" element={<PosesList />}></Route>
          <Route path="/categories" element={<CategoriesList />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      {/* <Poses /> */}
      {/* <PosesList /> */}
      {/* <SelectedPose /> */}
    </div>
  );
}

export default App;
