import { useState, useEffect } from 'react';

function WpHeader() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTop, setIsTop] = useState(true);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }

        if (window.scrollY > lastScrollY) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'} bg-transparent`}>
            <nav className="relative">
                <div className="flex items-center justify-between px-5 py-5 w-full relative z-10">
                    <div className="flex items-center">
                        <div className={`font-bold font-Poppins text-xl pl-10 ${isTop ? 'text-white' : 'text-blue-800'} tracking-wide flex items-center`}>
                            <img src="https://pouch.jumpshare.com/preview/vNbv02Y54XssUgoyT-TGiCxcnZ3gbsDB6HiP6Hl5Y4rgtNF1n6qPOURVknKvGuI3Hp3KCspIuujQec8vecPrfT02Wne5xsuybODMpLQhqAs" alt="Logo" className="h-10 w-10 mr-2" />
                            NNN College of InfoTech and Computing
                        </div>
                    </div>
                    <div className="flex mt-4 space-x-4 mr-10">
                        <a href="/login" className="text-white font-bold py-2 px-4 hover:underline border-white border-r-2 pr-9">
                            Login
                        </a>
                        <a href="/admission-form" className="text-white font-bold py-2 px-4 rounded hover:underline">
                            Apply here
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default WpHeader;
