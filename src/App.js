import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import AboutMe from './Pages/AboutMe/AboutMe';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequiredAuth from './Pages/Home/Login/RequiredAuth/RequiredAuth';
import Blog from './Pages/Blog/Blog';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        {/* <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route> */}
        <Route path="/service/:serviceID" element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
