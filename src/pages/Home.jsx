import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Globe, FileText, Plane, Briefcase, GraduationCap,
    MapPin, Calendar, Star, CheckCircle, Clock, Award, BookOpen,
    Building, Car, Mail, Phone, Send, Loader2, X, Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TripFlyer from '../components/TripFlyer';

// Akagera Gallery Imports
import ak1 from '../assets/akagera/WhatsApp Image 2026-03-12 at 08.22.12.jpeg';
import ak2 from '../assets/akagera/WhatsApp Image 2026-03-12 at 08.25.32.jpeg';
import ak3 from '../assets/akagera/WhatsApp Image 2026-03-12 at 08.27.55.jpeg';
import ak4 from '../assets/akagera/WhatsApp Image 2026-03-12 at 08.30.36.jpeg';
import ak5 from '../assets/akagera/WhatsApp Image 2026-03-12 at 08.33.27.jpeg';
import ak6 from '../assets/akagera/WhatsApp Image 2026-03-12 at 08.34.29.jpeg';
import ak7 from '../assets/akagera/WhatsApp Image 2026-03-12 at 08.56.23.jpeg';
import ak8 from '../assets/akagera/WhatsApp Image 2026-03-12 at 08.57.16.jpeg';
import ak9 from '../assets/akagera/WhatsApp Image 2026-03-12 at 09.00.05.jpeg';
import ak10 from '../assets/akagera/WhatsApp Image 2026-03-12 at 09.10.23.jpeg';
import ak11 from '../assets/akagera/WhatsApp Image 2026-03-12 at 09.13.34.jpeg';

const akageraAlbum = [ak1, ak2, ak3, ak4, ak5, ak6, ak7, ak8, ak9, ak10, ak11];

export default function Home() {
    const services = [
        {
            id: 'visa-service',
            title: 'Visa Processing',
            description: 'Expert guidance for tourist, business, student, and work visas worldwide, ensuring high success rates.',
            icon: <FileText className="h-8 w-8 text-bgc-navy" />,
            color: 'bg-blue-50',
            link: '#visa'
        },
        {
            id: 'study-service',
            title: 'Study Abroad Programs',
            description: 'Discover top universities globally. We handle program selection and admission processing.',
            icon: <GraduationCap className="h-8 w-8 text-bgc-amber" />,
            color: 'bg-amber-50',
            link: '#study'
        },
        {
            id: 'flights-service',
            title: 'Flight Bookings',
            description: 'Get the best rates on international and domestic flights tailored to your schedule and budget.',
            icon: <Plane className="h-8 w-8 text-slate-700" />,
            color: 'bg-slate-100',
            link: '#destinations'
        },
        {
            id: 'hotels-service',
            title: 'Hotel Reservations',
            description: 'From luxury resorts to budget-friendly stays, we book accommodations that fit your travel needs.',
            icon: <Building className="h-8 w-8 text-indigo-600" />,
            color: 'bg-indigo-50',
            link: '#destinations'
        },
        {
            id: 'transfers-service',
            title: 'Airport Transfers',
            description: 'Seamless airport pickups and drop-offs. Start and end your journey comfortably.',
            icon: <Car className="h-8 w-8 text-red-600" />,
            color: 'bg-red-50',
            link: '#destinations'
        }
    ];

    const destinations = [
        {
            id: 1,
            title: "Akagera National Park",
            location: "Northeastern Rwanda",
            Distance_from_Kigali: "Approx. 2-3 hours drive.",
            rating: 4.8,
            reviews: 124,
            image: "https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            categories: ["savannah and wetland area"],
            album: akageraAlbum
        },
        {
            id: 2,
            title: "Nyungwe National Park",
            location: "Southwestern Rwanda",
            Distance_from_Kigali: "Approx. 4-5 hours drive.",
            rating: 4.9,
            reviews: 89,
            image: "https://www.insidenyungwenationalpark.com/wp-content/uploads/2019/08/nyungwe-canopy-walk.jpg",
            categories: ["Rainforest", "Canopy Walk"]
        },
        {
            id: 3,
            title: "Volcanoes National Park",
            location: "Northwestern Rwanda",
            Distance_from_Kigali: "Approx. 2-3 hours drive.",
            rating: 5.0,
            reviews: 350,
            image: "https://www.volcanoesnationalpark.com/wp-content/uploads/2025/04/51171149844_b0c04d0b4f_h.jpg",
            categories: ["Gorilla Trekking", "Volcano Hiking"]
        }
    ];

    const backgroundImages = [
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop", // Airport/Plane
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop", // University/Education
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670&auto=format&fit=crop", // Global Cityscape
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop", // Travel/Beach
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop"  // Business/Meeting
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeAlbum, setActiveAlbum] = useState(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const openGallery = (album) => {
        setActiveAlbum(album);
        setIsGalleryOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = () => {
        setIsGalleryOpen(false);
        setActiveAlbum(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="flex flex-col min-h-screen scroll-smooth">
            {/* Hero Section */}
            <section id="home" className="relative bg-bgc-navy py-12 sm:py-24 md:py-32 lg:py-48 overflow-hidden min-h-[85vh] flex items-center">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
                            className="absolute inset-0 bg-cover bg-center"
                        />
                    </AnimatePresence>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-bgc-navy via-bgc-navy/80 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start w-full">
                    <motion.h1
                        {...fadeIn}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight max-w-3xl leading-tight"
                    >
                        Connecting You to <span className="text-bgc-amber">Global Opportunities</span>
                    </motion.h1>
                    <motion.p
                        {...fadeIn}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl"
                    >
                        Bridge Global Connect LTD is your trusted partner for seamless travel, visas, study abroad programs, and international careers.
                    </motion.p>
                    <motion.div
                        {...fadeIn}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <a href="#visa" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-bgc-amber hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Apply for Visa <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border-2 border-white/20 hover:bg-white/10 transition-all">
                            Explore Services
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-bgc-amber font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Premium Mobility Services</h3>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive solutions for your global mobility needs.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                {...fadeIn}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col"
                            >
                                <div className={`h-14 w-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                                <a href={service.link} className="text-bgc-amber font-semibold inline-flex items-center hover:text-amber-600 mt-auto">
                                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <section id="destinations" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-bgc-amber font-bold tracking-wide uppercase text-sm mb-2">Explore the World</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Top Destinations & Tours</h3>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((pkg) => (
                            <motion.div key={pkg.id} {...fadeIn} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-shadow">
                                <div className="relative h-64 overflow-hidden">
                                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-slate-500 mb-3 gap-1">
                                        <MapPin className="h-4 w-4 text-bgc-amber" /> {pkg.location}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
                                    <div className="flex items-center text-sm text-slate-600 mb-6 gap-2">
                                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        <span className="font-semibold">{pkg.rating}</span> <span>({pkg.reviews} reviews)</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 flex-wrap gap-4">
                                        {pkg.album && (
                                            <button
                                                onClick={() => openGallery(pkg.album)}
                                                className="inline-flex items-center text-sm font-bold text-bgc-navy hover:text-bgc-amber transition-colors"
                                            >
                                                <ImageIcon className="w-4 h-4 mr-1" /> More Images
                                            </button>
                                        )}
                                        <a href="#contact" className="text-bgc-amber font-bold hover:text-amber-600 transition-colors ml-auto">Enquire Now</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trip Flyer Section */}
            <TripFlyer />

            {/* Visa Section */}
            <section id="visa" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-bgc-amber font-bold tracking-wide uppercase text-sm mb-2">Visa Services</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-bgc-navy">Global Visa Processing</h3>
                    </motion.div>
                    <div className="bg-bgc-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: 1, title: 'Consultation', text: 'Eligibility assessment.' },
                                { step: 2, title: 'Documentation', text: 'File preparation.' },
                                { step: 3, title: 'Application', text: 'Submission & booking.' },
                                { step: 4, title: 'Approval', text: 'Start your journey.' }
                            ].map((s) => (
                                <div key={s.step} className="text-center">
                                    <div className="w-12 h-12 bg-bgc-amber text-white font-bold rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-lg">{s.step}</div>
                                    <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                                    <p className="text-slate-300 text-sm">{s.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Study Section */}
            <section id="study" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-bgc-amber font-bold tracking-wide uppercase text-sm mb-2">Education</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-bgc-navy">Study Abroad Programs</h3>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: <Award className="text-bgc-navy" />, title: 'Admission', text: 'Direct placements into world-class universities.' },
                            { icon: <GraduationCap className="text-bgc-amber" />, title: 'Scholarships', text: 'Guidance on merit and need-based funding.' },
                            { icon: <BookOpen className="text-green-600" />, title: 'Language', text: 'Preparatory courses for required tests.' }
                        ].map((f, i) => (
                            <motion.div key={i} {...fadeIn} className="text-center p-6">
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">{f.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                                <p className="text-slate-600">{f.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-slate-50 text-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-16 text-slate-900">
                        <h2 className="text-bgc-amber font-bold tracking-wide uppercase text-sm mb-2">Get in Touch</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-bgc-navy">Contact Us</h3>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="bg-bgc-navy rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4"><Phone className="text-bgc-amber" /> <span>+250 788 700 803</span></div>
                                <div className="flex items-center gap-4"><Mail className="text-bgc-amber" /> <span>info@bgc.com</span></div>
                                <div className="flex items-center gap-4"><MapPin className="text-bgc-amber" /> <span>Kigali, Rwanda</span></div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {status === 'success' && <div className="bg-green-50 text-green-700 p-4 rounded-lg">Message sent successfully!</div>}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-bgc-amber bg-slate-50" />
                                    <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-bgc-amber bg-slate-50" />
                                </div>
                                <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-bgc-amber bg-slate-50" />
                                <textarea name="message" rows={5} placeholder="Message" required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-bgc-amber bg-slate-50 resize-none" />
                                <button type="submit" disabled={status === 'loading'} className="bg-bgc-navy text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-slate-800 transition-all flex items-center gap-2">
                                    {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send className="w-4 h-4" />} Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && activeAlbum && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex flex-col p-4 md:p-8"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-white tracking-tight">Image Gallery</h3>
                            <button
                                onClick={closeGallery}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all hover:rotate-90"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                                {activeAlbum.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="relative group rounded-xl overflow-hidden shadow-2xl"
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${idx}`}
                                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={closeGallery}
                                className="px-8 py-3 bg-bgc-amber hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Close Gallery
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

