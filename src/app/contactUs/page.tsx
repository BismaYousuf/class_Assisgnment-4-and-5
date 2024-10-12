import React from 'react';

function Contact() {
  return (
    <div className="p-4 sm:p-6 font-sans">
      {/* Contact Us Heading */}
      <h1 className="text-3xl sm:text-4xl text-pink-500 text-center mt-10 font-bold">Contact Us</h1>
      <p className="text-center text-base sm:text-lg mt-4 max-w-screen-md mx-auto">
        We&apos;d love to hear from you! Whether you have a question or simply want to know more about our beauty care products and services, feel free to reach out.
      </p>

      {/* Contact Information */}
      <div className="mt-5 text-center text-base sm:text-lg">
        <h2 className="text-2xl sm:text-3xl text-pink-500 text-center font-bold mb-5">Contact Information</h2>
        <p>📍 <strong>Address:</strong> 123 Beauty Blvd, Glam City, Country</p>
        <p>📞 <strong>Phone:</strong> +123-456-7890</p>
        <p>📧 <strong>Email:</strong> support@beautycare.com</p>
        <p>🕘 <strong>Hours of Operation:</strong></p>
        <p>Monday - Friday: 9 AM - 6 PM <br /> Saturday: 10 AM - 4 PM <br /> Sunday: Closed</p>
      </div>

      {/* Send Us a Message Form */}
      <div className="mt-10 text-base sm:text-lg">
        <h2 className="text-xl sm:text-2xl text-pink-500 text-center">Send Us a Message</h2>
        <form className="max-w-lg mx-auto mt-4">
          <label className="block mb-2">Name:</label>
          <input type="text" name="name" className="w-full p-2 mb-4 border border-gray-300 rounded" required />
          
          <label className="block mb-2">Email:</label>
          <input type="email" name="email" className="w-full p-2 mb-4 border border-gray-300 rounded" required />
          
          <label className="block mb-2">Phone:</label>
          <input type="tel" name="phone" className="w-full p-2 mb-4 border border-gray-300 rounded" required />
          
          <label className="block mb-2">Message:</label>
          <textarea name="message" rows={5} className="w-full p-2 border border-gray-300 rounded"></textarea>
          
          <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded mt-4 hover:bg-pink-600">
            Submit
          </button>
        </form>
      </div>

      {/* Social Media Follow */}
      <div className="mt-10 text-center text-base sm:text-lg">
        <h2 className="text-2xl sm:text-3xl text-pink-500 font-bold">Follow Us on Social Media</h2>
        <p>Stay updated with our latest tips, offers, and beauty care trends!</p>
        <p>
          Instagram: @beautycare <br />
          Facebook: BeautyCareOfficial <br />
          Twitter: @beauty_care
        </p>
      </div>
    </div>
  );
}

export default Contact;
