import { Head } from '@inertiajs/react';
import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

export default function Cashier() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-blue-500 via-blue-400 to-sky-300">
            <Head title="Cashier-Dashboard" />
            <Header />
            <div className="flex">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}
