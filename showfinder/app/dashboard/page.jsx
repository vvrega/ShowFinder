import { SearchProvider } from '../../context/SearchProvider';
import ContentPanel from '@/components/contentPanel/ContentPanel';
import Header from '@/components/header/Header';
import Navbar from '@/components/navbar/Navbar';

export default function page() {
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
