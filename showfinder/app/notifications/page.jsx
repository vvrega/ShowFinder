import LeftPanel from '@/components/LeftPanel';
import Navigation from '@/components/Navigation';
import NotificationsPanel from '@/components/NotificationsPanel';
import React from 'react';

const page = () => {
  return (
    <>
      <Navigation />
      <div className="mid-panel">
        <LeftPanel />
        <NotificationsPanel />
      </div>
    </>
  );
};

export default page;
