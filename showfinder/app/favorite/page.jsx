import { SearchProvider } from '../../context/SearchProvider';

import Navbar from '@/components/navbar/Navbar';
import Header from '@/components/header/Header';
import Favorite from '@/components/favorite/Favorite';

const page = () => {
  return (
    <SearchProvider>
      <Header />
      <div className="layoutContainer">
        <Navbar />
        <Favorite />
      </div>
    </SearchProvider>
  );
};

export default page;
