import { Head } from '@inertiajs/react';
import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

export default function StudentD() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
            <Head title="Student Dashboard" />
            <Header />
            <div className="flex">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}
