
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Glow animation while clicking
const tapGlow = {
  scale: [1, 1.1, 1],
  textShadow: [
    "0 0 5px #FFD700",
    "0 0 15px #FFA500",
    "0 0 5px #FFD700"
  ],
  transition: {
    duration: 0.4,
    ease: "easeInOut",
  },
};

function Navigation_page() {
  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/detail.jpg')" }}
    >
      <div
        className="text-red-900  rounded-md shadow-md"
        style={{
          padding: "10px",
          height: "90vh",
          width: "500px",
          marginLeft: "50px",
          marginTop: "50px",
        }}
      >
        {/* Headline also animates when clicked */}
        <motion.h2
          className="text-4xl translate-x-6 font-bold mb-4 cursor-pointer"
          style={{ marginBottom: "40px", marginTop: "40px" }}
          whileTap={tapGlow}
        >
          Welcome to Spice Diaries
        </motion.h2>

        <nav className="flex flex-col gap-6">
          {[
            { path: "/cuisine", label: "Signature dishes" },
            { path: "/menu", label: "Menu" },
            { path: "/about", label: "About" },
            { path: "/reserve_table", label: "Reservations" },
            { path: "/Details/details_1", label: "Highlights" },
            { path: "/Details/details_2", label: "Contact" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="text-black font-bold text-3xl py-2 text-center rounded"
            >
              <motion.span
                className="inline-block border-b-2 border-yellow-300 cursor-pointer"
                whileTap={tapGlow}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navigation_page;

