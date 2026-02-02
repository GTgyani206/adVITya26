'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const daysData = [
    {
        day: 'ONE',
        date: '26TH FEB',
        performer: {
            name: '???',
            description:
                'A powerhouse performer known for her mesmerizing vocals, iconic hits, and unmatched stage energy',
            image:
                'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/698081c10023a5023d1f/view?project=695eb843003ae5a0552b&mode=admin',
        },
    },
    {
        day: 'THREE',
        date: '28TH FEB',
        performer: {
            name: '??',
            description:
                'A captivating performer delivering exceptional entertainment and memorable moments',
            image:
                'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/69807b4d001691521265/view?project=695eb843003ae5a0552b&mode=admin',
        },
    },
];

const PerformerCard = ({ performer, dayIndex, day, date }) => {
    const glowColors = [
        'rgba(255, 184, 77, 0.35)',
        'rgba(147, 197, 253, 0.3)',
    ];

    const borderColors = ['#D4A574', '#6B8DB8'];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: dayIndex * 0.15 }}
            className="relative group w-full max-w-[360px]"
        >
            {/* Day Header */}
            <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                    <h3 className="text-[#12001A] text-2xl font-medium">
                        DAY <span className="font-bold">{day}</span>
                    </h3>
                    <span className="text-[#12001A] text-lg font-bold">
                        {date}
                    </span>
                </div>
            </div>

            {/* Image Arch */}
            <div
                className="relative overflow-hidden rounded-t-[260px] mb-6"
                style={{
                    boxShadow: `0 0 50px ${glowColors[dayIndex]}`,
                }}
            >
                <div
                    className="absolute inset-0 rounded-t-[260px] pointer-events-none"
                    style={{
                        border: `3px solid ${borderColors[dayIndex]}`,
                    }}
                />

                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-[260px] bg-black">
                    <img
                        src={performer.image}
                        alt={performer.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Info Box */}
            <div className="bg-[#12001A]/90 rounded-xl p-6">
                <p className="text-[#CDB7D9] text-sm leading-relaxed mb-3">
                    {performer.description}
                </p>
                <h4 className="text-[#FFB84D] font-bold uppercase tracking-wide">
                    {performer.name}
                </h4>
            </div>
        </motion.div>
    );
};

export default function EventsSection() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const limitlessY = useTransform(scrollYProgress, [0, 1], [200, -600]);

    return (
        <section
            ref={sectionRef}
            className="relative isolate w-full overflow-hidden bg-[#D8C3E2]"
        >
            {/* Curved background lines */}
            <div className="absolute inset-0 z-0">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="none"
                >
                    <g
                        fill="none"
                        stroke="rgba(0,0,0,0.06)"
                        strokeWidth="1.5"
                    >
                        {Array.from({ length: 10 }).map((_, i) => (
                            <path
                                key={i}
                                d={`M -200 ${i * 80} Q 600 ${i * 80 + 200} 1400 ${i * 80}`}
                            />
                        ))}
                    </g>
                </svg>
            </div>

            <div className="relative flex min-h-screen">
                {/* LEFT CONTENT */}
                <div className="flex-1 px-6 sm:px-12 py-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <h2 className="text-5xl font-medium text-[#1a0a2e]">
                            Our Events ✨
                        </h2>
                    </motion.div>

                    {/* CENTERED CARDS */}
                    <div className="flex justify-center">
                        <div className="flex gap-24">
                            {daysData.map((dayData, index) => (
                                <PerformerCard
                                    key={index}
                                    performer={dayData.performer}
                                    day={dayData.day}
                                    date={dayData.date}
                                    dayIndex={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT STRIP */}
                <div className="hidden lg:flex w-64 bg-[#12001A] sticky top-0 h-screen items-center justify-center">
                    <motion.div style={{ y: limitlessY }}>
                        <div
                            className="text-[#c9b3dd] text-7xl font-bold whitespace-nowrap"
                            style={{ transform: 'rotate(-90deg)' }}
                        >
              /// Feel the Enigma ///
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}