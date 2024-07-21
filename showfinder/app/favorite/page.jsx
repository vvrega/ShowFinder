import { SearchProvider } from '../../context/SearchProvider';
import { UserProvider } from '@/context/UserProvider';

import Menu from '@/components/menu/Menu';
import Header from '@/components/header/Header';
import Favorite from '@/components/favorite/Favorite';

const page = () => {
  return (
    <SearchProvider>
      <UserProvider>
        <Header />
        <div className="layoutContainer">
          <Menu />
          <Favorite />
        </div>
      </UserProvider>
    </SearchProvider>
  );
};

export default page;
