import LeftPanel from '@/components/LeftPanel';
import Navigation from '@/components/Navigation';
import SettingsForm from '@/components/SettingsForm';

const page = () => {
  return (
    <>
      <Navigation />
      <div className="mid-panel">
        <LeftPanel />
        <SettingsForm />
      </div>
    </>
  );
};

export default page;
