
import React from "react";
import { motion } from "framer-motion";

function Menu() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center text-white px-6 py-20"
      style={{ backgroundImage: "url('cuisine.jpg')" }}
    >
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-start">
        {/* Signature Starters */}
        <motion.div
          className="bg-white/80 p-4 border border-white w-full md:w-64 h-[310px]"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h2 className="text-xl font-bold mb-4 text-black">Signature Starters</h2>
          <p className="text-sm text-black leading-loose">
            <strong className="text-pink-500">Paneer Satay Skewers:</strong> Grilled paneer in Thai-style peanut sauce.<br />
            <strong className="text-pink-500">Kimchi Samosas:</strong> Samosas with Korean kimchi + spiced potatoes.<br />
            <strong className="text-pink-500">Fusion Spring Rolls:</strong> Indo-Chinese noodles, paneer, and basil.<br />
            <strong className="text-pink-500">Chili Gobi Bao:</strong> Soft bao buns with crispy cauliflower.
          </p>
        </motion.div>

        {/* Mains */}
        <motion.div
          className="bg-white/80 p-4 border border-white w-full md:w-64 h-[310px]"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h2 className="text-xl font-bold mb-4 text-black">Mains</h2>
          <p className="text-sm text-black leading-loose">
            <strong className="text-pink-500">Malai Ramen Curry Bowl:</strong> Lucknowi curry in spicy ramen.<br />
            <strong className="text-pink-500">Tandoori Pad Thai:</strong> Thai noodles with Indian tandoori seasoning.<br />
            <strong className="text-pink-500">Bibimbap Biryani:</strong> Korean-style biryani.<br />
            <strong className="text-pink-500">Gongura Paneer Manchurian:</strong> Tangy South Indian Indo-Chinese.
          </p>
        </motion.div>

        {/* Rice & Noodles */}
        <motion.div
          className="bg-white/80 p-4 border border-white w-full md:w-64 h-[310px]"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h2 className="text-xl font-bold mb-4 text-black">Rice & Noodles</h2>
          <p className="text-sm text-black leading-loose">
            <strong className="text-pink-500">Schezwan Khichdi:</strong> Spicy lentils + rice.<br />
            <strong className="text-pink-500">Thai Green Pulao:</strong> Thai basil and curry Indian pulao.
          </p>
        </motion.div>

        {/* Desserts */}
        <motion.div
          className="bg-white/80 p-4 border border-white w-full md:w-64 h-[310px]"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h2 className="text-xl font-bold mb-4 text-black">Desserts</h2>
          <p className="text-sm text-black leading-loose">
            <strong className="text-pink-500">Gulab Mochi:</strong> Mochi filled with gulab jamun.<br />
            <strong className="text-pink-500">Mango Sticky Kheer:</strong> Sticky rice + kheer + mango saffron.<br />
            <strong className="text-pink-500">Matcha Rasmalai:</strong> Rasmalai with Japanese matcha.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Menu;
