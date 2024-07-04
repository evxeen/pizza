import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

import './scss/app.scss';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
