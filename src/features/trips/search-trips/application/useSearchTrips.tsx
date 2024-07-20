import { useState } from 'react';

export function useSearchTrips() {
  const [searchText, setSearchText] = useState('');
  return {
    searchText,
    setSearchText,
  };
}
