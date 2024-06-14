import Header from './EnrollHeader';
import MainContent from './EnrollMainContent';
import Sidebar from './EnrollSidebar';

function App(auth) {
  return (
    <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
