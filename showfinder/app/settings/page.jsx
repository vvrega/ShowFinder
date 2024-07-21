import Header from '@/components/header/Header';
import Menu from '@/components/menu/Menu';
import Settings from '@/components/settings/Settings';
import { SearchProvider } from '@/context/SearchProvider';
import { UserProvider } from '@/context/UserProvider';

const page = () => {
  return (
    <SearchProvider>
      <UserProvider>
        <Header />
        <div className="layoutContainer">
          <Menu />
          <Settings />
        </div>
      </UserProvider>
    </SearchProvider>
  );
};

export default page;
