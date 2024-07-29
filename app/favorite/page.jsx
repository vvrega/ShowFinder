import { SearchProvider } from '../../context/SearchProvider';
import { UserProvider } from '@/context/UserProvider';
import { CollapseProvider } from '@/context/CollapseProvider';

import Menu from '@/components/menu/Menu';
import Header from '@/components/header/Header';
import Favorite from '@/components/favorite/Favorite';

const page = () => {
  return (
    <SearchProvider>
      <UserProvider>
        <CollapseProvider>
          <Header />
          <div className="layoutContainer">
            <Menu />
            <Favorite />
          </div>
        </CollapseProvider>
      </UserProvider>
    </SearchProvider>
  );
};

export default page;
