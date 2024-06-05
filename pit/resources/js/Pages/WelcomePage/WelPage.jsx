import React from 'react';
import WpHeader from './WpHeader';
import WpAboutUs from './WpAboutUs';
import WpApply from './WpApply';
import WpBody from './WpBody';
import WpFooter from './WpFooter';
import WMainCont from './WMainCont';

function WelPage() {
    return (
        <div className="min-h-screen bg-white">
            <WpHeader />
            <WMainCont />
            <WpAboutUs />
            <WpBody />
            <WpApply />
            <WpFooter />
        </div>
    );
}

export default WelPage;
