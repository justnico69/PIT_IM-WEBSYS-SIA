import React from 'react';
import WpHeader from './WpHeader';
import WMainCont from './WMainCont';
import { Head } from '@inertiajs/react';

function WelPage() {
    return (
        <div className="min-h-screen bg-white">
            <Head title="Welcome to NNN!" />
            <Head />
            <WpHeader />
            <WMainCont />
        </div>
    );
}

export default WelPage;
