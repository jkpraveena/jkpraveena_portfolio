import { FunFact } from '../data/funFacts';

export const getRandomFact = (facts: FunFact[], excludeId?: number): FunFact => {
  const availableFacts = excludeId 
    ? facts.filter(fact => fact.id !== excludeId)
    : facts;
  const randomIndex = Math.floor(Math.random() * availableFacts.length);
  return availableFacts[randomIndex];
};

export const getFormattedDate = (): string => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getFavorites = (): number[] => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavorite = (factId: number): boolean => {
  const favorites = getFavorites();
  const isFavorite = favorites.includes(factId);
  
  if (isFavorite) {
    const newFavorites = favorites.filter(id => id !== factId);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    return false;
  } else {
    const newFavorites = [...favorites, factId];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    return true;
  }
};