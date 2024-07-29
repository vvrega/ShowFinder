import Header from '@/components/header/Header';
import Menu from '@/components/menu/Menu';
import Settings from '@/components/settings/Settings';
import { SearchProvider } from '@/context/SearchProvider';
import { UserProvider } from '@/context/UserProvider';
import { CollapseProvider } from '@/context/CollapseProvider';

const page = () => {
  return (
    <SearchProvider>
      <UserProvider>
        <CollapseProvider>
          <Header />
          <div className="layoutContainer">
            <Menu />
            <Settings />
          </div>
        </CollapseProvider>
      </UserProvider>
    </SearchProvider>
  );
};

export default page;
