import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/home/Home';
import List from './Pages/List/List';
import Login from './Pages/Login/Login';
import New from './Pages/New/New'
import Single from './Pages/single copy/Single';
import { productInputs, userInputs } from "./Pages/New/formSource"
import "./Pages/style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Routes>
        <Route index path='/' element={<Home></Home>} />
        <Route index path='/m' element={<Home></Home>} />
        <Route path="Login" element={<Login></Login>} />
        <Route path="users">
          <Route index element={<List />}></Route>
          <Route path=':userId' element={<Single />}></Route>
          <Route path='new' element={<New inputs={userInputs} title="Add New User" />} />
        </Route>
        <Route path="products">
          <Route index element={<List></List>}></Route>
          <Route path=':productsId' element={<Single />}></Route>
          <Route path='new' element={<New inputs={productInputs} title="Add New Product" />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
