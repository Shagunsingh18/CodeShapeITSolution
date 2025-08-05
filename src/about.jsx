// import React from 'react';

// function About() {
//   return (
//     <div className="w-screen h-screen flex items-center justify-center px-8 relative bg-[#1a1206] text-white overflow-hidden">

//       {/* Top Horizontal Line */}
//        <div className="absolute top-20 left-[100px] right-0 h-[2px] bg-[#a68e5c]" />

//        {/* Bottom Horizontal Line */}
//       <div className="absolute bottom-20 left-[100px] right-0 h-[2px] bg-[#a68e5c]" />

//       {/* Left Decorative Curved Line */}
//       <svg
//         className="absolute left-0 top-[82px] bottom-[82px] h-[calc(100%-164px)] w-[100px]"
//         viewBox="0 0 100 800"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M100 0 Q0 400 100 800"
//           stroke="#a68e5c"
//           strokeWidth="1.5"
//           fill="transparent"
//         />
//       </svg>

//       {/* Main Content */}
//       <div className="relative px-10 py-12 rounded shadow-md max-w-xl bg-transparent -translate-x-[40px] flex flex-col gap-5">
//   <h1 className="text-4xl font-bold text-[#f9d77e] text-center">
//     ABOUT US
//   </h1>
//   <p className="text-base text-left text-[#f1e8d9] leading-relaxed">
//     At Spice Diaries, we believe food is a story — one that brings cultures together, sparks nostalgia, and inspires the senses.
//     <br /><br />
//     Nestled in the heart of Lucknow, Spice Diaries is a modern Asian Fusion restaurant where tradition meets innovation. Our menu weaves the vibrant spices of India with the bold umami of Korea, the elegance of Thai herbs, and the soul of Chinese wok cooking. Each dish is carefully crafted to surprise and comfort — familiar yet thrillingly new.
//     Whether you're a curious foodie, a comfort-seeking family, or a tourist looking for something extraordinary, our warm ambiance and globally inspired plates promise an experience where every meal feels like home.
//     <br /><br />
//     Come savor a journey — one bite at a time.
//   </p>
// </div>


// <div className="w-[500px] h-[550px] rounded-lg overflow-hidden shadow-lg translate-x-[50px] ">
//           <img
//             src="/about.jpg"
//             alt="Restaurant Interior"
//             className="w-full h-full object-cover"
//           />
//         </div>

//     </div>
//   );
// }

// export default About;


import React from 'react';

function About() {
  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 relative bg-[#1a1206] text-white overflow-hidden">


      {/* Main Content */}
      <div className="relative px-6 py-8 rounded shadow-md bg-transparent max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#f9d77e] text-center mb-6">
          ABOUT US
        </h1>
        <p className="text-sm md:text-base text-left text-[#f1e8d9] leading-relaxed">
          At Spice Diaries, we believe food is a story — one that brings cultures together, sparks nostalgia, and inspires the senses.
          <br /><br />
          Nestled in the heart of Lucknow, Spice Diaries is a modern Asian Fusion restaurant where tradition meets innovation. Our menu weaves the vibrant spices of India with the bold umami of Korea, the elegance of Thai herbs, and the soul of Chinese wok cooking. Each dish is carefully crafted to surprise and comfort — familiar yet thrillingly new.
          <br /><br />
          Whether you're a curious foodie, a comfort-seeking family, or a tourist looking for something extraordinary, our warm ambiance and globally inspired plates promise an experience where every meal feels like home.
          <br /><br />
          Come savor a journey — one bite at a time.
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-[500px] h-[300px] md:h-[550px] rounded-lg overflow-hidden shadow-lg">
        <img
          src="/about.jpg"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}

export default About;
