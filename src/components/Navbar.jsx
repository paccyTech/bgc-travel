import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoBGC from '../assets/derLog.PNG';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md border-b border-slate-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                            <img
                                src={logoBGC}
                                alt="Bridge Global Connect Logo"
                                className="h-16 w-auto object-contain hover:scale-105 transition-transform"
                            />
                            {/* <div className="hidden sm:block border-l-2 border-slate-200 h-8 mx-1"></div>
                            <span className="hidden sm:block text-sm font-bold text-bgc-navy leading-none tracking-tight">
                                BRIDGE GLOBAL<br />CONNECT LTD
                            </span> */}
                        </Link>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        <a href="#home" className="text-slate-700 hover:text-bgc-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                        <a href="#services" className="text-slate-700 hover:text-bgc-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                        <a href="#destinations" className="text-slate-700 hover:text-bgc-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">Destinations</a>
                        <a href="#visa" className="text-slate-700 hover:text-bgc-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">VisaInfo</a>
                        <a href="#study" className="text-slate-700 hover:text-bgc-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">Study Abroad</a>
                        <a href="#contact" className="bg-bgc-amber hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md ml-4">Contact Us</a>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bgc-amber"
                        >
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-bgc-amber">Home</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-bgc-amber">Services</a>
                        <a href="#destinations" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-bgc-amber">Destinations</a>
                        <a href="#visa" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-bgc-amber">VisaInfo</a>
                        <a href="#study" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-bgc-amber">Study Abroad</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50 hover:text-bgc-amber">Contact Us</a>
                    </div>
                </div>
            )}

        </nav>
    );
}

