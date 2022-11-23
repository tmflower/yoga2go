import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { CategoriesList } from './Components/CategoriesList';
import { CategoryDetails } from './Components/CategoryDetails';
import { PoseDetails } from './Components/PoseDetails';

function App() {

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<CategoriesList />}></Route>
          <Route path="categories/:category_name" element={<CategoryDetails />}></Route>
          <Route path="/poses/:pose_id" element={<PoseDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
  );
}

export default App;
