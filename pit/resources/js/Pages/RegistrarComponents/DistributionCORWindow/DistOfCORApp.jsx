import { Head } from '@inertiajs/react';
import Header from './DistOfCORHeader';
import MainContent from './DistOfCORMainContent';
import Sidebar from './DistOfCORSidebar';

export default function DistOfCORApp() {
    return (
        <div className="min-h-screen w-full" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3920.jpg?t=st=1718357895~exp=1718361495~hmac=e029c64e2bf40ce2b07c6f1ad9b35cf47c271e526e50a0e4c19e99d9193c60e8&w=900)', backgroundPosition: 'top', backgroundSize: 'cover' }}>
            <Head title="Student Dashboard" />
            <div className="bg-white bg-opacity-0 min-h-screen w-full">
                <Header />
                <div className="flex">
                    <Sidebar />
                    <MainContent />
                </div>
            </div>
        </div>
    );
}
