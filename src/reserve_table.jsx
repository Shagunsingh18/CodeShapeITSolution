import React, { useState } from "react";

function ReserveTable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Details:", formData);
    alert("Reservation submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#7e70eb] flex items-center justify-center px-6 py-12" >
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-8" style={{padding:"15px"}}>
        <h2 className="text-3xl font-bold text-center text-[#1a1206] " style={{margin:"17px"}}>
          Reserve a Table
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            required
          />
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="No. of Guests"
            min="1"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Special Requests / Message"
            className="border border-gray-300 rounded-md px-4 py-2 col-span-1 md:col-span-2 h-24 resize-none focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-[#1a1206] hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition"
          >
            Book Table
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReserveTable;
