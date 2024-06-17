import { Head } from '@inertiajs/react';
import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Settings from './Settings';

export default function Registrar() {
    return (
        <div className="min-h-screen w-full bg-white rounded-xl shadow-lg">
            <Head title="Registrar-Dashboard" />
            <Header />
            <div className="flex">
                <Sidebar />
                <MainContent />
                <Settings/>
            </div>
        </div>
    );
}
