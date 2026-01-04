import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (property) => {
    setFavorites((prevFavorites) => {
      // Check if it's already in the *current* list
      if (!prevFavorites.find(fav => fav.id === property.id)) {
        return [...prevFavorites, property];
      }
      // If duplicate, return the list unchanged
      return prevFavorites;
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter(prop => prop.id !== id));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const isFavorite = (id) => {
    return favorites.some(fav => fav.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}