import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(gif.gif)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(bg1.jpg)" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white flex items-center justify-center"
      >
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;

 
 


 

 


