import WMainCont from './WMainCont';
import WpHeader from './WpHeader';

import { Head } from '@inertiajs/react';
function WelPage() {
    return (
        <div className="min-h-screen bg-white">
            <Head title="Welcome," />
            <Head />
            <WpHeader />
            <WMainCont />
        </div>
    );
}

export default WelPage;
