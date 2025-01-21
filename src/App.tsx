import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import { CartProvider } from './context/CartContext';
import Contact from './pages/Contact';

function App() {
  return (

    <>
     <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header /> 
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </main>
          <div>
    <Contact/>
    </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  
  
    </>
   
    
  );
}

export default App;