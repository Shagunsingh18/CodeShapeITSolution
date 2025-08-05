// import React, { useRef } from 'react';

// function Cuisine() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === 'left' ? -300 : 300,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="w-screen h-screen flex items-center justify-center px-8 relative bg-[#1a1206] text-white overflow-hidden">

     

//       {/* Main Content */}
//       <div className="absolute  top-[120px] bottom-[80px]  w-[1000px] text-[#f6e4d3] p-6 flex flex-col gap-12">
//         <h2 className="text-4xl font-semibold mb-10 text-center">OUR SIGNATURE DISHES</h2>

//         {/* Scroll Arrows */}
//         <div className="relative">
//           {/* Left Arrow */}
//           <button
//             onClick={() => scroll('left')}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#2b1d0e] hover:bg-[#3c2a12] text-[#ebc97e] px-3 py-2 rounded-full shadow-md"
//           >
//             ◀
//           </button>

//           {/* Scrollable Cards */}
//           <div
//             ref={scrollRef}
//             className="flex gap-3 overflow-x-auto no-scrollbar px-10"
//             style={{ scrollBehavior: 'smooth' }}
//           >
//             {[
//               { id: 1, title: 'Mango Sushi', img: '/sushi.jpg' },
//               { id: 2, title: 'Paneer Tikka', img: '/paneertikka.jpg' },
//               { id: 3, title: 'Ramen Delight', img: '/ramen.jpg' },
//               { id: 4, title: 'Spring Rolls', img: '/spring rolls.jpg' },
//               { id: 5, title: 'Fusion Biryani', img: '/biryani.jpg' },
//             ].map((dish) => (
//               <div
//                 key={dish.id}
//                 className="min-w-[350px] text-[#e3d2c3] h-full rounded-lg overflow-hidden shadow-md flex-shrink-0"
//               >
//                 <img src={dish.img} alt={dish.title} className="w-full h-[270px] object-cover" />
//                 <div className="p-4 text-center font-semibold">{dish.title}</div>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={() => scroll('right')}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#2b1d0e] hover:bg-[#3c2a12] text-[#f9d77e] px-3 py-2 rounded-full shadow-md"
//           >
//             ▶
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cuisine;


import React, { useRef } from 'react';

function Cuisine() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center px-8 pt-32 pb-24 relative bg-[#1a1206] text-white overflow-hidden">
      {/* Main Content */}
      <div className="w-full max-w-6xl text-[#f6e4d3] px-6 flex flex-col gap-12">
        <h2 className="text-4xl font-semibold text-center">OUR SIGNATURE DISHES</h2>

        {/* Scroll Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10  hover:bg-[#3c2a12] text-[#ebc97e] px-3 py-2 rounded-full shadow-md"
          >
            ◀
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-3  px-10"
            style={{ scrollBehavior: 'smooth' }}
          >
            {[
              { id: 1, title: 'Mango Sushi', img: '/sushi.jpg' },
              { id: 2, title: 'Paneer Tikka', img: '/paneertikka.jpg' },
              { id: 3, title: 'Ramen Delight', img: '/ramen.jpg' },
              { id: 4, title: 'Spring Rolls', img: '/spring rolls.jpg' },
              { id: 5, title: 'Fusion Biryani', img: '/biryani.jpg' },
            ].map((dish) => (
              <div
                key={dish.id}
                className="min-w-[350px] text-[#e3d2c3] rounded-lg overflow-hidden shadow-md flex-shrink-0 "
              >
                <img src={dish.img} alt={dish.title} className="w-full h-[270px] object-cover" />
                <div className="p-2 text-center font-semibold">{dish.title}</div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#2b1d0e] hover:bg-[#3c2a12] text-[#f9d77e] px-3 py-2 rounded-full shadow-md"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cuisine;
