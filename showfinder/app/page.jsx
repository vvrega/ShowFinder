import { SearchProvider } from '../context/SearchProvider';
import ContentPanel from '@/components/contentPanel/ContentPanel';
import Header from '@/components/header/Header';
import Navbar from '@/components/navbar/Navbar';

export default function Page() {
  return (
    <SearchProvider>
      <Header />
      <div className="layoutContainer">
        <Navbar />
        <ContentPanel />
      </div>
    </SearchProvider>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import ContentPanel from '@/components/contentPanel/ContentPanel';
// import Header from '@/components/header/Header';
// import Navbar from '@/components/navbar/Navbar';
// import { fetchData } from '../api/api';
// export default function Page() {
//   const [searchTerm, setSearchTerm] = useState('/');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async (term) => {
//     try {
//       const data = await fetchData(term);
//       setSearchResults(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     handleSearch('/');
//   }, []);

//   return (
//     <>
//       <Header
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         handleSearch={handleSearch}
//       />
//       <div className="layoutContainer">
//         <Navbar />
//         <ContentPanel searchResults={searchResults} />
//       </div>
//     </>
//   );
// }
