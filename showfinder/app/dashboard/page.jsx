import { SearchProvider } from '../../context/SearchProvider';
import { UserProvider } from '@/context/UserProvider';
import ContentPanel from '@/components/contentPanel/ContentPanel';
import Header from '@/components/header/Header';
import Menu from '@/components/menu/Menu';

export default function page() {
  return (
    <SearchProvider>
      <UserProvider>
        <Header />
        <div className="layoutContainer">
          <Menu />
          <ContentPanel />
        </div>
      </UserProvider>
    </SearchProvider>
  );
}
