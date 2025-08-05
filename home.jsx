
import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
    className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-black text-center overflow-hidden"
    style={{ backgroundImage: `url('/wmremove-transformed (1).jpeg')` }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
>

      <h1 className="text-6xl font-bold font-serif mb-4">Spice Diaries</h1>
      <h2 className="text-3xl font-bold">Where Every Meal Feels Like Home</h2>
    </motion.div>
  );
}

export default Home;
