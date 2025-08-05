
// function Menu() {
//   return (
//     <div
//       className="w-screen min-h-screen bg-cover bg-center text-white px-12 py-20"
//       style={{ backgroundImage: "url('chilli.jpg')" }}
//     >
//       <div className="flex flex-row flex-wrap text-black gap-8  justify-center translate-y-30" >
//         {/* Signature Starters */}
//         <div className="bg-white/80 p-8 border border-white hml-4  w-65" style={{padding:"15px"}}>
//           <h2 className="text-3xl font-bold mb-6">Signature Starters</h2>
//           <p className="text-sm leading-loose">
//             <strong className="text-pink-500">Paneer Satay Skewers:</strong> Grilled paneer in Thai-style peanut sauce.<br />
//             <strong className="text-pink-500">Kimchi Samosas:</strong> Samosas with Korean kimchi + spiced potatoes.<br />
//             <strong className="text-pink-500">Fusion Spring Rolls:</strong> Indo-Chinese noodles, paneer, and basil.<br />
//             <strong className="text-pink-500">Chili Gobi Bao:</strong> Soft bao buns with crispy cauliflower.
//           </p>
//         </div>

//         {/* Mains */}
//         <div className="bg-white/80 p-8 border border-white  w-65" style={{padding:"15px"}}>
//           <h2 className="text-3xl font-bold mb-6">Mains</h2>
//           <p className="text-sm leading-loose">
//             <strong className="text-pink-500">Malai Ramen Curry Bowl:</strong> Lucknowi curry in spicy ramen.<br />
//             <strong className="text-pink-500">Tandoori Pad Thai:</strong> Thai noodles with Indian tandoori seasoning.<br />
//             <strong className="text-pink-500">Bibimbap Biryani:</strong> Korean-style biryani.<br />
//             <strong className="text-pink-500">Gongura Paneer Manchurian:</strong> Tangy South Indian Indo-Chinese.
//           </p>
//         </div>

//         {/* Rice & Noodles */}
//         <div className="bg-white/80 p-8 border border-white  w-65 ml-4" style={{padding:"15px"}}>
//           <h2 className="text-3xl font-bold mb-6">Rice & Noodles</h2>
//           <p className="text-sm leading-loose">
//             <strong className="text-pink-500">Schezwan Khichdi:</strong> Spicy lentils + rice.<br />
//             <strong className="text-pink-500">Thai Green Pulao:</strong> Thai basil and curry Indian pulao.
//           </p>
//         </div>

//         {/* Desserts */}
//         <div className="bg-white/80 p-8 border border-white w-65"style={{padding:"15px"}}>
//           <h2 className="text-3xl  font-bold mb-6">Desserts</h2>
//           <p className="text-sm leading-loose">
//             <strong className="text-pink-500">Gulab Mochi:</strong> Mochi filled with gulab jamun.<br />
//             <strong className="text-pink-500">Mango Sticky Kheer:</strong> Sticky rice + kheer + mango saffron.<br />
//             <strong className="text-pink-500">Matcha Rasmalai:</strong> Rasmalai with Japanese matcha.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Menu;



import React from "react";
import { motion } from "framer-motion";

function Menu() {
  // Variants for different directions
  const variantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const variantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const variantsTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const variantsBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center text-white px-12 py-20"
      style={{ backgroundImage: "url('cuisine.jpg')", backgroundPosition: "center top -110px" }}
    >
      <div className="flex flex-row flex-wrap text-black gap-8 justify-center translate-y-30">
        {/* Signature Starters */}
        <motion.div
          className="bg-white/80 p-8 border border-white hml-4 w-65"
          style={{ padding: "15px" }}
          variants={variantsLeft}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6">Signature Starters</h2>
          <p className="text-sm leading-loose">
            <strong className="text-pink-500">Paneer Satay Skewers:</strong> Grilled paneer in Thai-style peanut
            sauce.
            <br />
            <strong className="text-pink-500">Kimchi Samosas:</strong> Samosas with Korean kimchi + spiced potatoes.
            <br />
            <strong className="text-pink-500">Fusion Spring Rolls:</strong> Indo-Chinese noodles, paneer, and basil.
            <br />
            <strong className="text-pink-500">Chili Gobi Bao:</strong> Soft bao buns with crispy cauliflower.
          </p>
        </motion.div>

        {/* Mains */}
        <motion.div
          className="bg-white/80 p-8 border border-white w-65"
          style={{ padding: "15px" }}
          variants={variantsRight}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6">Mains</h2>
          <p className="text-sm leading-loose">
            <strong className="text-pink-500">Malai Ramen Curry Bowl:</strong> Lucknowi curry in spicy ramen.
            <br />
            <strong className="text-pink-500">Tandoori Pad Thai:</strong> Thai noodles with Indian tandoori seasoning.
            <br />
            <strong className="text-pink-500">Bibimbap Biryani:</strong> Korean-style biryani.
            <br />
            <strong className="text-pink-500">Gongura Paneer Manchurian:</strong> Tangy South Indian Indo-Chinese.
          </p>
        </motion.div>

        {/* Rice & Noodles */}
        <motion.div
          className="bg-white/80 p-8 border border-white w-65 ml-4"
          style={{ padding: "15px" }}
          variants={variantsTop}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6">Rice & Noodles</h2>
          <p className="text-sm leading-loose">
            <strong className="text-pink-500">Schezwan Khichdi:</strong> Spicy lentils + rice.
            <br />
            <strong className="text-pink-500">Thai Green Pulao:</strong> Thai basil and curry Indian pulao.
          </p>
        </motion.div>

        {/* Desserts */}
        <motion.div
          className="bg-white/80 p-8 border border-white w-65"
          style={{ padding: "15px" }}
          variants={variantsBottom}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6">Desserts</h2>
          <p className="text-sm leading-loose">
            <strong className="text-pink-500">Gulab Mochi:</strong> Mochi filled with gulab jamun.
            <br />
            <strong className="text-pink-500">Mango Sticky Kheer:</strong> Sticky rice + kheer + mango saffron.
            <br />
            <strong className="text-pink-500">Matcha Rasmalai:</strong> Rasmalai with Japanese matcha.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Menu;
