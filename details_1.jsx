

function Details() {
  return (
    <div
      className="w-full min-h-screen px-4 py-10 bg-cover bg-center text-black"
      style={{
        backgroundImage: "url('/pizza.jpg')", // replace with your image path
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between gap-5 translate-x-70 translate-y-40">

        {/* What We Offer */}
        <div className="w-full md:w-1/3 p-6 bg-white/80 border border-[#00000040] " style={{padding:"10px"}}>
          <h2 className="text-[#000000] text-2xl font-semibold mb-6">What We Offer</h2>
          <div className="flex flex-col gap-2 text-sm">
            <p>Dine-in & Takeaway</p>
            <p>Private Dining Rooms <span className="font-medium">(12–20 guests)</span></p>
            <p>Live Cooking Experience</p>
            <p>Chef’s Tasting Menu</p>
            <p>Vegan & Gluten-Free Options</p>
            <p>Kid-Friendly Menu</p>
            <p>Free Wi-Fi</p>
            <p>Wheelchair Accessible</p>
          </div>
        </div>

        {/* Events & Offers */}
        <div className="w-full md:w-1/3 p-6 bg-white/80 border border-[#00000040] " style={{padding:"10px"}}>
          <h2 className="text-[#000000] text-2xl font-semibold mb-6">Events & Offers</h2>
          <div className="flex flex-col gap-2 text-sm">
            <p>Birthday / Anniversary Packages</p>
            <p>Corporate Dinners</p>
            <p>Fusion Food Festivals <span className="font-medium">(Quarterly)</span></p>
            <p>Lunar New Year & Diwali Specials</p>
            <p>Loyalty Program <span className="italic">(coming soon)</span></p>
          </div>
        </div>

        {/* Parking & Access */}
        <div className="w-full md:w-1/3 p-6 bg-white/80 border border-[#00000040]" style={{padding:"10px"}}>
          <h2 className="text-[#000000] text-2xl font-semibold mb-6">Parking & Access</h2>
          <div className="flex flex-col gap-2 text-sm">
            <p>Valet Parking Available</p>
            <p>Mall Parking Facility</p>
            <p>Wheelchair Accessible Entry</p>
            <p>Swiggy / Zomato Delivery Partner</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Details;
