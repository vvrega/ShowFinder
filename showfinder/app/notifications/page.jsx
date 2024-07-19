import Notifications from '@/components/notifications/Notifications';
import Header from '@/components/header/Header';
import Navbar from '@/components/navbar/Navbar';

import React from 'react';
import { SearchProvider } from '@/context/SearchProvider';

const page = () => {
  return (
    <SearchProvider>
      <Header />
      <div className="layoutContainer">
        <Navbar />
        <Notifications />
      </div>
    </SearchProvider>
  );
};

export default page;
