import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menubar from './Components/Menubar/Menubar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import PageError from './Components/PageError/PageError';
import Update from './Components/Update/Update';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddFruits from './Components/AddFruits/AddFruits';
import MyItems from './Components/MyItems/MyItems';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:inventoryId' element={<RequireAuth><Update></Update></RequireAuth>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/addFruits' element={<RequireAuth><AddFruits></AddFruits></RequireAuth>}></Route>
        <Route path='/myItems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageError></PageError>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
