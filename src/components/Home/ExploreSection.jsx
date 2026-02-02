import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Placeholder images - replace these with actual Advitya event photos
const SAMPLE_IMAGES = [
    { id: 1, url: "https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/698077a7002ab399d7a5/view?project=695eb843003ae5a0552b&mode=admin?w=400&h=500&fit=crop" },
    { id: 2, url: "https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/6980761c001d409d9b8e/view?project=695eb843003ae5a0552b&mode=admi?w=400&h=500&fit=crop" },
    { id: 3, url: "https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/6980760e0036863a1c3d/view?project=695eb843003ae5a0552b&mode=admin?w=400&h=500&fit=crop" },
    { id: 4, url: "https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/698075e700235db83119/view?project=695eb843003ae5a0552b&mode=admin?w=400&h=500&fit=crop" },
    { id: 5, url: "https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/69807594003164cc0fa9/view?project=695eb843003ae5a0552b&mode=admin?w=400&h=500&fit=crop" },
    { id: 6, url: "https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/698073c100205ee2f742/view?project=695eb843003ae5a0552b&mode=admin?w=400&h=500&fit=crop" },
    { id: 7, url: "https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/698078e2001f4ca09d4e/view?project=695eb843003ae5a0552b&mode=admin?w=400&h=500&fit=crop" },
    { id: 8, url: "https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/698078ea0026947c84e2/view?project=695eb843003ae5a0552b&mode=admin?w=400&h=500&fit=crop" },
];

export default function ExploreSection({ containerRef, contentRef, linesRef, isPlaying, audioRef }) {
    const imagesRef = React.useRef([]);

    // Horizontal auto-scroll animation triggered by page scroll
    useGSAP(() => {
        if (!containerRef.current || !contentRef.current) return;

        const scrollDistance = contentRef.current.scrollWidth - containerRef.current.offsetWidth;

        // Animate horizontal scroll based on vertical page scroll
        gsap.to(contentRef.current, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            }
        });

        // Animate each image appearance as they come into view
        imagesRef.current.forEach((img, index) => {
            if (!img) return;

            gsap.fromTo(img,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 50,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1,
                    },
                    delay: index * 0.05, // Stagger effect
                }
            );
        });

    }, { scope: containerRef, dependencies: [] });

    return (
        <div
            ref={containerRef}
            className="flex-1 w-full relative overflow-hidden"
        >
            <div
                ref={contentRef}
                className="flex flex-row items-center gap-4 py-4 px-4 will-change-transform"
                style={{ width: 'max-content' }}
            >
                {SAMPLE_IMAGES.map((image, index) => (
                    <div
                        key={image.id}
                        ref={el => imagesRef.current[index] = el}
                        className="w-[200px] sm:w-[240px] md:w-[280px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform-gpu shadow-xl hover:scale-105 hover:shadow-2xl flex-shrink-0"
                    >
                        <img
                            src={image.url}
                            alt={`Advitya Event ${image.id}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
