import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PaintReveal from '../PaintReveal';
import RevealText from './RevealText';
import NavButton from './NavButton';
import MobileRecordPlayer from './MobileRecordPlayer';
import BookingCard from './BookingCard';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

const MobileHeroSection = ({
    isPlaying,
    setIsPlaying,
    audioRef
}) => {
    return (
        <div className="relative bg-[#12001A] transition-all duration-500 min-h-[100dvh] w-full overflow-y-auto overflow-x-hidden flex flex-col">
            {/* Top Background Decoration */}
            <img
                src="/HomePage/TopBG.png"
                alt=""
                className='absolute w-40 top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none'
            />
            <div className='w-full h-1/2 bg-[#270a31]/60 absolute top-0 left-0 rounded-b-full '></div>

            {/* Logo */}
            <Link to="/" className="absolute top-6 z-50 left-1/2 -translate-x-1/2">
                <img
                    src="Images/AdvityaLogo.png"
                    alt="VIT Bhopal"
                    className="w-auto h-10"
                />
            </Link>


            <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-[#EFD2FF]/20 backdrop-blur-md border border-[#EFD2FF]/40 flex items-center justify-center p-2.5"
                whileTap={{ scale: 0.9 }}
            >
                {isPlaying ? (
                    <svg className="w-full h-full text-[#EFD2FF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                ) : (
                    <svg className="w-full h-full text-[#EFD2FF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </motion.button>

            <motion.div
                className="flex flex-col flex-1 pt-24 pb-8 px-4 gap-6 z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Navigation Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center flex-wrap gap-3 shrink-0"
                >
                    <NavButton to="/events" className="text-xs px-3 py-1.5">Events</NavButton>
                    <NavButton to="/sportfest" className="text-xs px-3 py-1.5">Sports</NavButton>
                    <NavButton to="/sponsor" className="text-xs px-3 py-1.5">Sponsor</NavButton>
                </motion.div>
                <img
                    src="/HomePage/Background.png"
                    alt="BG"
                    className='w-full h-full absolute top-0 left-0 opacity-20 object-cover pointer-events-none'
                />

                {/* Main Content Container (Title + Player) */}
                <motion.div
                    variants={itemVariants}
                    className="relative rounded-2xl backdrop-blur-xl flex flex-col items-center justify-center gap-6"
                >
                    <div className="relative z-10 text-white w-full">
                        <div className='text-xs font-bold uppercase tracking-wide flex flex-wrap justify-center gap-2 mb-1 opacity-90'>
                            <RevealText text="VIT Bhopal" />
                            <span className="text-[#EFD2FF]">
                                <RevealText text="Presents" delay={0.5} />
                            </span>
                        </div>

                        <PaintReveal
                            baseSrc="/HomePage/TitleImage.png"
                            revealSrc="/HomePage/TitleLayer.png"
                            className="my-1 w-full max-h-20 object-contain"
                        />

                        <div className='text-base font-bold text-center tracking-tight text-[#EFD2FF]'>
                            <RevealText text="Feel the Enigma" delay={0.5} />
                        </div>
                    </div>

                    {/* Compact Record Player */}
                    <div className="w-full flex justify-center py-4">
                        <div className="transform scale-90 sm:scale-100">
                            <MobileRecordPlayer
                                isPlaying={isPlaying}
                                audioRef={audioRef}
                                onTogglePlay={() => setIsPlaying(!isPlaying)}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Grid: Video + Booking */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 h-36 shrink-0 mt-auto">
                    <div className="relative rounded-2xl overflow-hidden border border-[#EFD2FF]/20 h-full bg-black/20">
                        <video
                            src="/HomePage/Video.mp4"
                            className="w-full h-full object-cover opacity-90"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="h-full">
                        <BookingCard variants={itemVariants} />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MobileHeroSection;