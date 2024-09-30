import React from "react";

const ContactForm = () => {
  return (
    
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">Contact Me</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border-2 border-gray-300 rounded shadow focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border-2 border-gray-300 rounded shadow focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border-2 border-gray-300 rounded shadow focus:outline-none focus:border-blue-500"
            
          />
        </div>
         <button className="px-3 py-3 rounded text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 w-full" type="submit">
    Send a message
  </button>
</form>
    
  );
};

export default ContactForm;

 
