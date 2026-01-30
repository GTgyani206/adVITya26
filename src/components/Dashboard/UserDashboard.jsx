import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function UserDashboard() {
    const { user, userData } = useAuth();

    return (
        <div className="flex min-h-screen relative text-[#CDB7D9] overflow-hidden bg-[#0F0518]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex z-0 pointer-events-none"
            >
                <img src="/Herosection_BG.svg" alt="BG" className="w-full h-full object-cover opacity-20" />
            </motion.div>

            <div className="flex-1 pt-8 flex flex-col h-screen overflow-hidden z-10 relative items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#1A0B2E]/80 border border-[#CDB7D9]/20 p-10 rounded-2xl backdrop-blur-md shadow-2xl max-w-2xl w-full text-center"
                >
                    <div className="w-20 h-20 bg-linear-to-tr from-[#CDB7D9] to-[#4E317D] rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-[#1A0B2E]">
                        {user?.name?.charAt(0) || 'U'}
                    </div>

                    <h1 className="text-4xl font-abril text-white mb-2">
                        Welcome, {user?.name || 'User'}!
                    </h1>
                    <p className="text-[#CDB7D9]/70 text-lg mb-8">
                        You are successfully logged in to AdVITya'26.
                    </p>

                    <div className="space-y-4">
                        <Link
                            to="/events"
                            className="block w-full py-4 rounded-xl bg-[#CDB7D9] text-[#1A0B2E] font-bold text-lg hover:bg-white transition-all transform hover:scale-105"
                        >
                            Browse Events
                        </Link>

                        <Link
                            to="/sportfest"
                            className="block w-full py-4 rounded-xl bg-transparent border border-[#CDB7D9]/30 text-[#CDB7D9] font-semibold hover:bg-[#CDB7D9]/10 transition-all"
                        >
                            View Sports Fest
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
