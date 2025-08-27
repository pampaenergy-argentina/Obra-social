
import React from 'react';

const OsepLogo: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#0d9488" strokeWidth="4"/>
        <path d="M30 65C35 55 45 50 50 50C55 50 65 55 70 65" stroke="#0d9488" strokeWidth="6" strokeLinecap="round"/>
        <path d="M50 25V50" stroke="#0d9488" strokeWidth="6" strokeLinecap="round"/>
        <path d="M35 35L50 50" stroke="#0d9488" strokeWidth="6" strokeLinecap="round"/>
        <path d="M65 35L50 50" stroke="#0d9488" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="5" fill="#0d9488"/>
    </svg>
);


const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <OsepLogo />
                        <h1 className="text-xl font-bold text-slate-800">
                            OSEP Asistente Médico Virtual
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
