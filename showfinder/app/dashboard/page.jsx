import { SearchProvider } from '../../context/SearchProvider';
import { UserProvider } from '@/context/UserProvider';
import { CollapseProvider } from '@/context/CollapseProvider';
import ContentPanel from '@/components/contentPanel/ContentPanel';
import Header from '@/components/header/Header';
import Menu from '@/components/menu/Menu';

export default function page() {
  return (
    <SearchProvider>
      <UserProvider>
        <CollapseProvider>
          <Header />
          <div className="layoutContainer">
            <Menu />
            <ContentPanel />
          </div>
        </CollapseProvider>
      </UserProvider>
    </SearchProvider>
  );
}
