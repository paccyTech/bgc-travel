import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import logoBGC from '../assets/derLog.PNG';

export default function Footer() {
    return (
        <footer className="bg-bgc-navy pt-16 pb-8 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={logoBGC}
                                alt="Bridge Global Connect Logo"
                                className="h-14 w-auto object-contain brightness-110 contrast-125"
                            />
                            <h3 className="text-xl font-bold text-white tracking-tight leading-none">
                                BGC <span className="text-bgc-amber">LTD</span>
                            </h3>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Your trusted partner for international mobility. We specialize in travel, study abroad, visas, and connecting you to global opportunities with ease and professionalism.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bgc-amber transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bgc-amber transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bgc-amber transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bgc-amber transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link to="/destinations" className="text-slate-300 hover:text-white transition-colors">Destinations</Link></li>
                            <li><Link to="/blog" className="text-slate-300 hover:text-white transition-colors">Travel Blog & Guides</Link></li>
                            <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Main Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            <li><Link to="/visa" className="text-slate-300 hover:text-white transition-colors">Visa Processing</Link></li>
                            <li><Link to="/study" className="text-slate-300 hover:text-white transition-colors">Study Abroad Programs</Link></li>
                            <li><Link to="/jobs" className="text-slate-300 hover:text-white transition-colors">Work Abroad Opportunities</Link></li>
                            <li><Link to="/destinations" className="text-slate-300 hover:text-white transition-colors">Flight & Hotel Bookings</Link></li>
                            <li><Link to="/destinations" className="text-slate-300 hover:text-white transition-colors">Local & Global Tours</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-bgc-amber mt-1" size={20} />
                                <span className="text-slate-300 text-sm">Kigali, Rwanda</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-bgc-amber" size={20} />
                                <span className="text-slate-300 text-sm">+250 788 700 803</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-bgc-amber" size={20} />
                                <span className="text-slate-300 text-sm">bridgeglobalc@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} Bridge Global Connect LTD. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-400">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
