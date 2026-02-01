import React from 'react';
import { motion } from 'framer-motion';

const MobileVolumeControl = ({ volume, setVolume }) => {
    const handleSliderChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    const r = Math.round(255 + (168 - 255) * volume);
    const g = Math.round(255 + (85 - 255) * volume);
    const b = Math.round(255 + (247 - 255) * volume);
    const indicatorColor = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className="bg-[#EFD2FF]/10 rounded-xl p-4 backdrop-blur-sm border border-[#EFD2FF]/20">
            <div className="flex items-center gap-4 mb-3">
                {/* Volume Indicator */}
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: indicatorColor }}
                >
                    <div className="w-3 h-3 bg-black rounded-full" />
                </div>

                {/* Volume Text */}
                <div className="flex-1">
                    <h3 className="text-white text-sm font-bold mb-1">VIBE CHECK</h3>
                    <p className="text-stone-400 text-xs">
                        {Math.round(volume * 100)}% Volume
                    </p>
                </div>
            </div>

            {/* Slider */}
            <div className="relative">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                    style={{
                        background: `linear-gradient(to right, ${indicatorColor} 0%, ${indicatorColor} ${volume * 100}%, rgba(255,255,255,0.1) ${volume * 100}%, rgba(255,255,255,0.1) 100%)`
                    }}
                />
            </div>

            {/* Volume Icons */}
            <div className="flex justify-between mt-2 px-1">
                <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
            </div>

            <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
        </div>
    );
};

export default MobileVolumeControl;