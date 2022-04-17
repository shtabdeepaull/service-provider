import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import AboutMe from './Pages/AboutMe/AboutMe';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
