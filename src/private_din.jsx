
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function PrivateDin() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });  // no once: true, triggers every time

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      className="w-screen h-screen flex items-center justify-center px-8 relative bg-[#2cb3cb] text-black overflow-hidden"
    >
      {/* ... (same lines and svg as before) */}

      {/* Main Content */}
      <div className="z-10 flex flex-row items-center gap-16">
        {/* Left: Image Section */}
        <motion.div
          className="w-[500px] h-[550px] rounded-lg -translate-x-10 overflow-hidden shadow-lg"
          variants={leftVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}  // toggle based on inView
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/privatedin.jpg"
            alt="Private Dining Room"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Text Section */}
        <motion.div
          className="max-w-md text-base leading-relaxed py-10"
          variants={rightVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}  // toggle based on inView
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-[#000000] mb-6 ">PRIVATE DINING</h2>

          <p className="text-[#240786] text-2xl  mb-6">
            Creating a memorable experience is what we strive for.
          </p>

          <p className="text-[#000000] mb-5">
            Experience the luxury of exclusivity at Spice Diaries. Our private dining rooms are designed for intimate
            gatherings, celebrations, and important meetings — blending privacy, comfort, and exceptional cuisine.
          </p>

          <p className="text-[#000000]">
            Whether it’s a romantic evening or a business dinner, we offer tailored menus and attentive service to make every
            moment memorable.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default PrivateDin;
