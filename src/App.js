import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { CategoryPage } from './Pages/CategoryPage';
import { ProductPage } from './Pages/ProductPage';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/Shop/Category/:category" element={<CategoryPage/>} />
              <Route path="/Shop/Product/:id" element={<ProductPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
