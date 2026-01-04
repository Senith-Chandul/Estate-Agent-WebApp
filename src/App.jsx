import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FavoritesProvider } from './context/FavoritesContext';

import SearchPage from './pages/SearchPage';
import PropertyPage from './pages/PropertyPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <FavoritesProvider>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Navbar />
          <div className="app-container">
            <Routes>
              <Route path="/" element={<SearchPage />} />
              <Route path="/property/:id" element={<PropertyPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DndProvider>
    </FavoritesProvider>
  );
}

export default App;