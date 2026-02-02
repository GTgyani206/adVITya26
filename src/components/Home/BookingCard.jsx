import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function BookingCard({ variants }) {
    const navigate = useNavigate();

    return (
        <motion.div variants={variants} className='bg-[#735483]/30 backdrop-blur-xl w-full h-full rounded-2xl md:rounded-3xl p-4 flex flex-col justify-between relative overflow-hidden text-white'>
            {/* Abstract Background Stars */}
            <div className="max-lg:hidden absolute top-2 right-4 text-xs opacity-50 space-x-0.5">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-col justify-between h-full relative z-10">
                <div className="mt-1">
                    <h3 className="text-lg md:text-xl font-bold uppercase leading-tight font-sans tracking-tight">AdVITya'26<br /><span className="text-purple-100">Entry Pass</span></h3>
                    <p className="text-[10px] sm:text-xs mt-2 text-stone-300 leading-relaxed max-w-[95%]">
                        Experience the biggest tech-fest with exclusive access to all events and pro-shows.
                    </p>
                </div>

                <div className="mb-1">
                    <motion.button
                        className="w-full bg-white rounded-full h-10 relative overflow-hidden group cursor-pointer"
                        whileHover="hover"
                        initial="initial"
                        onClick={() => window.open('https://vtop.vitbhopal.ac.in/vtop/login', '_blank')}
                    >
                        <motion.div
                            className="absolute inset-0 bg-[#12001A]"
                            variants={{
                                initial: { scaleX: 0, originX: 0 },
                                hover: { scaleX: 1, originX: 0 }
                            }}
                            transition={{ duration: 0.4, ease: "circIn" }}
                        />
                        <div className="relative z-10 flex items-center justify-between px-3 md:px-1 md:pr-1 w-full h-full mix-blend-exclusion">
                            <span className="px-3 text-xs font-medium text-white">LIMITED</span>
                            <span className="text-[10px] md:text-[10px] font-bold uppercase tracking-wider md:pl-2 md:pr-4 md:border-l border-white/10 h-full flex items-center text-white transition-colors">Book Now</span>
                            <div className="hidden md:flex w-8 h-8 bg-[#12001A] rounded-full items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Layout (Optimized for h-32) */}
            <div className="flex lg:hidden flex-col justify-between h-full relative z-10">
                <div>
                    <h3 className="text-lg font-bold uppercase leading-none font-sans tracking-tight">AdVITya'26</h3>
                    <div className="text-purple-200 text-xs font-semibold tracking-wide mt-0.5">Get Your Entry Pass</div>
                </div>

                <button
                    onClick={() => window.open('https://vtop.vitbhopal.ac.in/vtop/login', '_blank')}
                    className="w-full bg-[#EFD2FF] hover:bg-white text-[#12001A] rounded-xl h-9 font-bold uppercase tracking-wider text-[10px] flex items-center justify-between px-4 transition-all duration-300"
                >
                    <span>Book Now</span>
                    <div className="bg-[#12001A]/10 p-1 rounded-full">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </div>
                </button>
            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 blur-2xl rounded-full pointer-events-none"></div>
        </motion.div>
    );
}
