import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-60 left-[-70px] ${
        visible ? "translate-x-[90px] transition-transform duration-500 ease-out" : ""
      }`}
    >
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER" // Replace YOUR_PHONE_NUMBER with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-green-500 p-2 rounded-full   ">
        <FaWhatsapp size={40} color="white" />
        </div>
     
      </a>
    </div>
  );
};

export default WhatsAppIcon;