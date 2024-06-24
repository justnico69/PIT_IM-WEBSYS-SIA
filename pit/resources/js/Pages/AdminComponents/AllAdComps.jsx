// App.js
import React from 'react';
import AdHeader from './AdHeader';
import AdSidebar from './AdSidebar';
import AdMain from './AdMain';
import { Head } from '@inertiajs/react';

<Head title="Login" />
function AllAdComps() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3920.jpg?t=st=1718357895~exp=1718361495~hmac=e029c64e2bf40ce2b07c6f1ad9b35cf47c271e526e50a0e4c19e99d9193c60e8&w=900)', backgroundPosition: 'top', backgroundSize: 'cover' }}>
      <Head title="Admin Dashboard" />
      <AdHeader />
        <div className="flex">
            <AdSidebar />
            <AdMain /> 
        </div>
    </div>
  );
}

export default AllAdComps;