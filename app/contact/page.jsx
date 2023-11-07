import React from 'react';
import ContactForm from '@/app/components/contactForm/ContactForm';

const Contact = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="flex justify-end w-full">
        <div className="flex justify-end w-full">
          <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-9/12 shadow-lg shadow-black">
            <span className="pl-10">CONTACT</span>
          </h1>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact