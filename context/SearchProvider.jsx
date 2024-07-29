'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchData } from '../api/api';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (term) => {
    try {
      const data = await fetchData(term);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const defaultSearchTerm = '/';
    handleSearch(defaultSearchTerm).then(() => setSearchTerm(''));
  }, []);

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, searchResults, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
