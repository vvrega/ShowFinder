import Header from '@/components/header/Header';
import Navbar from '@/components/navbar/Navbar';
import SettingsForm from '@/components/SettingsForm';
import { SearchProvider } from '@/context/SearchProvider';

const page = () => {
  return (
    <SearchProvider>
      <Header />
      <div className="layoutContainer">
        <Navbar />
        <SettingsForm />
      </div>
    </SearchProvider>
  );
};

export default page;
