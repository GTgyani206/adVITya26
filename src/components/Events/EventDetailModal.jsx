/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt, faUsers, faTimes, faUser, faTicket } from '@fortawesome/free-solid-svg-icons';

const EventDetailModal = ({ event, onClose }) => {
    if (!event) return null;

    const features = event.features || [];
    const facultyCoordinators = event.facultyCoordinators || [];
    const studentCoordinators = event.studentCoordinators || [];

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="flex min-h-full items-center justify-center p-4">
                {/* Dark Background Box wrapping everything */}
                <div className="relative w-full max-w-6xl rounded-3xl p-6">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 md:-top-7 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-lg bg-[#2A1A3E] hover:bg-[#3A2A4E] text-white transition-colors shadow-lg"
                    >
                        <FontAwesomeIcon icon={faTimes} className="text-lg" />
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                        {/* Left Column - Event Poster & Description - VERTICAL CARD */}
                        <div className="lg:col-span-4 flex flex-col gap-4 bg-[#1A0B2E] p-4 rounded-3xl h-full">
                            {/* Event Poster with Overlay */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 relative">
                                <img
                                    src={event.poster}
                                    alt={event.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Event Title & Description */}
                            <div className="mt-2">
                                <h2 className="text-2xl font-bold text-white mb-3 font-poppins">
                                    {event.name}
                                </h2>
                                <p className="text-sm text-gray-400 leading-relaxed font-poppins font-normal">
                                    {event.desc}
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Info Bar & Content */}
                        <div className="lg:col-span-8 flex flex-col gap-4">


                            {/* Content Box with Purple Header - RIGHT BOX CARD */}
                            <div className="flex flex-col flex-grow">
                                {/* Purple Header with Tabs */}
                                <div className="bg-[#CDB7D9] rounded-t-3xl px-4 py-4 md:px-8 md:py-6 pb-10 relative z-0">
                                    <div className="flex items-center justify-center gap-8">
                                        <button className="text-[#1A0B2E] font-bold font-poppins text-sm">
                                            CLUB INFORMATION
                                        </button>
                                        <button className="text-[#1A0B2E] font-semibold font-poppins text-sm opacity-70 hover:opacity-100 transition-opacity uppercase">
                                            {event.club || 'General'}
                                        </button>
                                    </div>
                                </div>

                                {/* Main Content Box */}
                                <div className="bg-[#1A0B2E] rounded-3xl p-4 md:p-8 -mt-6 relative z-10 flex-grow">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* Left Column - Event Features & Coordinators */}
                                        <div className="space-y-6">
                                            {/* Event Features */}
                                            {features.length > 0 && (
                                                <div>
                                                    <h3 className="text-sm font-semibold text-gray-400 mb-3 font-poppins uppercase">EVENT FEATURES</h3>
                                                    <ul className="space-y-2">
                                                        {features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-gray-300 font-poppins text-sm">
                                                                <span className="w-1 h-1 rounded-full bg-gray-400 mt-2"></span>
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Faculty Coordinators */}
                                            {facultyCoordinators.length > 0 && (
                                                <div>
                                                    <h3 className="text-sm font-semibold text-gray-400 mb-3 font-poppins uppercase">FACULTY COORDINATORS</h3>
                                                    <ul className="space-y-2">
                                                        {facultyCoordinators.map((coordinator, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-gray-300 font-poppins text-sm">
                                                                <span className="w-1 h-1 rounded-full bg-gray-400 mt-2"></span>
                                                                {coordinator}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Student Coordinators */}
                                            {studentCoordinators.length > 0 && (
                                                <div>
                                                    <h3 className="text-sm font-semibold text-gray-400 mb-3 font-poppins uppercase">STUDENT COORDINATORS</h3>
                                                    <ul className="space-y-2">
                                                        {studentCoordinators.map((coordinator, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-gray-300 font-poppins text-sm">
                                                                <span className="w-1 h-1 rounded-full bg-gray-400 mt-2"></span>
                                                                {coordinator}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Column - Event Details Grid */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-400 mb-3 font-poppins uppercase">EVENT DETAILS</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {/* Date */}
                                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-pink-500/10 hover:border-pink-500/50 transition-all duration-300 group hover:-translate-y-1">
                                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                                                        <FontAwesomeIcon icon={faCalendarAlt} className="text-pink-400 text-lg" />
                                                    </div>
                                                    <p className="text-xs text-gray-300 font-poppins text-center font-medium group-hover:text-pink-300 transition-colors">
                                                        {event.date || 'TBA'}
                                                    </p>
                                                </div>
                                                {/* Time */}
                                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1">
                                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                                        <FontAwesomeIcon icon={faClock} className="text-cyan-400 text-lg" />
                                                    </div>
                                                    <p className="text-xs text-gray-300 font-poppins text-center font-medium group-hover:text-cyan-300 transition-colors">
                                                        {event.time || 'TBA'}
                                                    </p>
                                                </div>
                                                {/* Location */}
                                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1">
                                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-400 text-lg" />
                                                    </div>
                                                    <p className="text-xs text-gray-300 font-poppins text-center font-medium group-hover:text-purple-300 transition-colors">
                                                        {event.venue || 'TBA'}
                                                    </p>
                                                </div>
                                                {/* Seats */}
                                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1">
                                                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                                        <FontAwesomeIcon icon={faUsers} className="text-emerald-400 text-lg" />
                                                    </div>
                                                    <p className="text-xs text-gray-300 font-poppins text-center font-medium group-hover:text-emerald-300 transition-colors">
                                                        {event.seats || 'Open'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Register Button - Outside the box, bottom right */}
                            <div className="flex justify-end mt-2">
                                <Link
                                    to={`/register/${event.$id}`}
                                    className="px-6 py-3 bg-[#CDB7D9] hover:bg-[#b89fc9] text-[#1A0B2E] font-bold rounded-xl transition-all duration-300 font-poppins flex items-center justify-center gap-3 text-sm shadow-lg"
                                    onClick={onClose}
                                >
                                    <img src="/Register.svg" alt="" className="w-5 h-5" />
                                    VIT STUDENT
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default EventDetailModal;
