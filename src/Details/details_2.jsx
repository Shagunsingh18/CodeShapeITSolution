import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Details_2() {
  // Hook to detect when each card enters the viewport
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refForm, inViewForm] = useInView({ triggerOnce: false, threshold: 0.2 });

  // Animation variants for popup effect
  const popUpVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      className="w-full min-h-screen px-4 py-10 bg-cover bg-center text-black"
      style={{
        backgroundImage: "url('/last.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full min-h-screen text-white px-6 mt-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between translate-x-20 gap-8 translate-y-50">
          {/* Card 1 - Location */}
          <motion.div
            ref={ref1}
            variants={popUpVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            className="w-full md:w-1/3 shadow-lg rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-6">📍 Location</h2>
            <p className="text-sm mb-1">
              <span className="font-semibold">Spice Diaries</span>
            </p>
            <p className="text-sm mb-1">3rd Floor, Phoenix Palassio Mall</p>
            <p className="text-sm mb-1">Gomti Nagar Extension, Lucknow, Uttar Pradesh – 226010</p>
            <p className="text-sm">
  Google Maps:{' '}
  <a
    href="https://www.google.com/maps/place/Spice+Diaries+Lucknow/@26.8467,80.9462,15z"
    target="_blank"
    rel="noopener noreferrer"
    className="italic text-blue-300 underline hover:text-blue-500"
  >
    View on Google Maps
  </a>
</p>

          </motion.div>

          {/* Card 2 - Operating Hours */}
          <motion.div
            ref={ref2}
            variants={popUpVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            className="w-full md:w-1/3 shadow-lg rounded-xl p-6"
          >
            <h2 className="text-[#ffffff] font-semibold mb-3 text-2xl">🕒 Operating Hours</h2>
            <p className="text-sm">
              Mon – Thu: <span className="font-medium">12:00 PM – 11:00 PM</span>
            </p>
            <p className="text-sm">
              Fri – Sat: <span className="font-medium">12:00 PM – 12:00 AM</span>
            </p>
            <p className="text-sm mb-2">
              Sunday: <span className="font-medium">12:00 PM – 11:00 PM</span>
            </p>
            <p className="text-sm">
              <span className="font-medium">Private dining</span> by reservation from{" "}
              <span className="font-medium">11:00 AM</span>.
            </p>
          </motion.div>

          {/* Card 3 - Contact */}
          <motion.div
            ref={ref3}
            variants={popUpVariants}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            className="w-full md:w-1/3 shadow-lg rounded-xl p-6"
          >
            <h2 className="text-[#ffffff] font-semibold mb-3 text-2xl">📞 Contact</h2>
            <p className="text-sm">
              <span className="font-medium">Phone:</span> +91 73890 12345
            </p>
            <p className="text-sm">
              <span className="font-medium">Email:</span> reservations@spicediaries.com
            </p>
            <p className="text-sm">
              <span className="font-medium">Website:</span> www.spicediaries.com
            </p>
            <p className="text-sm">
              <span className="font-medium">Instagram:</span> @spicediaries_lucknow
            </p>
            <p className="text-sm">
              <span className="font-medium">Facebook:</span> fb.com/spicediarieslucknow
            </p>
          </motion.div>
        </div>

        {/* Gmail Sign-In Section */}
        <motion.div
          ref={refForm}
          variants={popUpVariants}
          initial="hidden"
          animate={inViewForm ? "visible" : "hidden"}
          className="items-center justify-center -translate-x-5 translate-y-55 space-y-5"
          style={{ display: "flex", gap: "10px" }}
        >
          <input
            type="email"
            placeholder="Enter your Gmail"
            className=" max-w-30 px-1 py-1 text-base rounded-md text-black border-2 border-green-400 placeholder-gray-500 focus:outline-none"
          />
          <button className="hover:bg-yellow-500 text-white font-semibold text-base px-1 py-1 rounded-md shadow-md transition">
            Sign In
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Details_2;
