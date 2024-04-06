import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import Registration from './components/Registration.jsx';
import Cart from './components/Cart.jsx';
import Wishlist from './components/Wishlist.jsx';
import Checkout from './components/Checkout.jsx';
import UserDashboard from './components/UserDashboard.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home />}/>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Control" element={<UserDashboard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
