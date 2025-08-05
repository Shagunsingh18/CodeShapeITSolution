import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const reviews = [
  {
    name: "Aarav Sharma",
    text: "Absolutely loved the fusion flavors! The kimchi samosas were a delightful surprise.",
    rating: 5,
    img: "/profile1.jpg",
  },
  {
    name: "Nikita Roy",
    text: "Private dining was perfect for our anniversary. Cozy ambience and attentive staff!",
    rating: 4,
    img: "/profile2.jpg",
  },
  {
    name: "Rohan Mehta",
    text: "Bibimbap Biryani? Genius idea. Spice Diaries nails Indo-Korean fusion like no other.",
    rating: 5,
    img: "/profile3.jpg",
  },
  {
    name: "Simran Kapoor",
    text: "A bit crowded on weekends, but the Matcha Rasmalai was heavenly!",
    rating: 4,
    img: "/profile4.jpg",
  },
  {
    name: "Dev Arora",
    text: "Elegant decor and innovative menu. Malai Ramen Curry Bowl is a must-try.",
    rating: 5,
    img: "/profile5.jpg",
  },
  {
    name: "Tanya Verma",
    text: "Nice vibe, great mocktails. Lighting could be a bit warmer.",
    rating: 3,
    img: "/profile6.jpg",
  },
  {
    name: "Rahul Sen",
    text: "Excellent service. Loved the Gongura Paneer Manchurian!",
    rating: 4,
    img: "/profile7.jpg",
  },
  {
    name: "Priya Desai",
    text: "Creative presentation and fresh ingredients. Felt like a 5-star experience.",
    rating: 5,
    img: "/profile8.jpg",
  },
  {
    name: "Vikram Joshi",
    text: "Good overall but wished portions were slightly larger.",
    rating: 3,
    img: "/profile9.jpg",
  },
  {
    name: "Ananya Sinha",
    text: "Loved the ambiance and the dessert trio! Gulab Mochi was my favorite.",
    rating: 5,
    img: "/profile10.jpg",
  },
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ReviewPage = () => {
  
  const containerWidth = window.innerWidth - 60; // 100px padding on sides
  const containerHeight = window.innerHeight - 110; // some top/bottom padding

  return (
    <div className="bg-red-100">
        <div className="relative translate-y-17 min-h-screen w-screen overflow-hidden px-12 py-20">
      <h1 className="text-5xl font-bold text-center mb-16 text-black font-serif">
        Guest Reviews
      </h1>

      <div
        className="relative font-bold w-full h-[90vh]"
        style={{ maxWidth: "100vw", maxHeight: "90vh" }}
      >
        {reviews.map((review, index) => {
          // Random positions inside container with some margins
          const left = randomInt(0, containerWidth - 300);
          const top = randomInt(0, containerHeight - 250);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg cursor-pointer"
              style={{
                width: 280,
                minHeight: 230,
                position: "absolute",
                left,
                top,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                zIndex: 50 + index,
                transition: "transform 0.4s ease",
              }}
              whileHover={{
                scale: 1.05,
                zIndex: 9999,
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            >
              <div className="flex items-cover gap-5 mb-5">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                />
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">
                    {review.name}
                  </h3>
                  <div className="text-yellow-400 text-lg select-none">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default ReviewPage;
