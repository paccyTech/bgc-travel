import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Star, ArrowRight, X, Clock } from 'lucide-react';

const trips = [
  {
    id: 1,
    title: "Nyungwe Trip",
    subtitle: "7 Days Adventure",
    image: "/flyer.jpg",
    duration: "7 Days / 6 Nights",
    groupSize: "Max 12 travelers",
    rating: 4.9,
    reviews: 156,
    tripDate: "2026-06-27",
    highlights: [
      { name: "Canopy Walk", image: "/canopy.jpg" },
      { name: "Waterfalls", image: "/water.jpg" },
      { name: "Zipline", image: "/zipline.jpg" }
    ],
    placesToVisit: [
      {
        name: "Volcanoes National Park",
        description: "Home to endangered mountain gorillas. Experience the once-in-a-lifetime opportunity to trek through bamboo forests and observe these magnificent primates in their natural habitat.",
        image: "https://www.volcanoesnationalpark.com/wp-content/uploads/2025/04/51171149844_b0c04d0b4f_h.jpg",
        duration: "2 days"
      },
      {
        name: "Akagera National Park",
        description: "A savannah paradise with diverse wildlife including lions, elephants, giraffes, and over 500 bird species. Enjoy game drives and boat safaris on Lake Ihema.",
        image: "https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        duration: "2 days"
      },
      {
        name: "Nyungwe National Park",
        description: "Ancient rainforest featuring the famous canopy walkway. Home to chimpanzees, colobus monkeys, and stunning waterfalls.",
        image: "https://www.insidenyungwenationalpark.com/wp-content/uploads/2019/08/nyungwe-canopy-walk.jpg",
        duration: "2 days"
      },
      {
        name: "Lake Kivu",
        description: "Relax by the beautiful Lake Kivu, enjoy boat rides, and explore the charming lakeside towns with stunning views.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop",
        duration: "1 day"
      }
    ]
  }
];

export default function TripFlyer() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tripDate = new Date('2026-06-27T00:00:00');
    
    const calculateCountdown = () => {
      const now = new Date();
      const difference = tripDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setCountdown({ days, hours, minutes, seconds });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-bgc-amber font-bold tracking-wide uppercase text-sm mb-2">Featured Trips</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Discover Our Amazing Trips</h3>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Click on any trip to explore the places you'll visit and create unforgettable memories.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={trip.image} 
                      alt={trip.title} 
                      className="w-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-bgc-amber font-semibold text-sm mb-1">{trip.subtitle}</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{trip.title}</h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Countdown Timer */}
                    <div className="bg-gradient-to-r from-bgc-navy to-slate-800 rounded-2xl p-4 mb-6">
                      <p className="text-bgc-amber text-sm font-semibold text-center mb-3">Trip Starts: June 27, 2026</p>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="text-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="text-2xl md:text-3xl font-bold text-white">{countdown.days}</span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1">Days</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="text-2xl md:text-3xl font-bold text-white">{countdown.hours}</span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1">Hours</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="text-2xl md:text-3xl font-bold text-white">{countdown.minutes}</span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1">Minutes</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="text-2xl md:text-3xl font-bold text-white">{countdown.seconds}</span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1">Seconds</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-slate-700 mb-2">Trip Highlights:</p>
                      <div className="grid grid-cols-3 gap-3">
                        {trip.highlights.map((highlight, idx) => (
                          <div key={idx} className="relative group overflow-hidden rounded-xl">
                            <img 
                              src={highlight.image} 
                              alt={highlight.name}
                              className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold text-center">
                              {highlight.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a 
                      href="https://wa.me/250784645488?text=Hi, I'm interested in booking the Nyungwe Trip starting June 27, 2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-bgc-navy text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group-hover:bg-bgc-amber"
                    >
                      Book This Trip <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
