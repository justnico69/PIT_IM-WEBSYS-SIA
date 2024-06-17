import { useEffect, useState } from 'react';

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
                            <img src="https://scontent.fcgy2-4.fna.fbcdn.net/v/t1.15752-9/448120448_452143104085384_3851397366997152725_n.png?stp=dst-png_p1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGL3AqzDevnprzsNqnJ9pFc-n5l7y9j9-T6fmXvL2P35F3Zw52JXS_Y-3eWn0ppAkxh87Mbe1WtWscLkNYRv2CZ&_nc_ohc=B1KoNR0H7mAQ7kNvgHa0iJZ&_nc_ht=scontent.fcgy2-4.fna&cb_e2o_trans=t&oh=03_Q7cD1QFbTEuKpNQHHTnSdh9PCEnz5LoXtY-c3O9kSXrbn6xYLQ&oe=669736F6" alt="Logo" className="h-10 w-10 mr-2" />
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
