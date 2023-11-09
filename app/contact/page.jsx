import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import Styles from "../contact/styles.module.css";

const Contact = () => {
  return (
    <div className="flex flex-col items-end w-full h-full">
      <div className="flex justify-end w-full">
        <div className={`${Styles.titleDiv} flex justify-end w-full`}>
          <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue text-4xl text-ltGray font-extralight py-4 w-9/12 shadow-lg shadow-black">
            <span className="pl-10 text-yellow">CONTACT</span>
            <span className="text-xs"> </span>
            <span className="font-bold">ME</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <section className={`${Styles.fadeIn} flex flex-col justify-center items-center my-4 w-4/5`}>
          <p className="my-4 text-sm">
            Thank you for your interest. Thank you for your interest. My
            commitment is to deliver innovative and tailored solutions to meet
            your business or project needs. Whether you require a static
            website, or a dynamic web application, I am dedicated to assisting
            you in achieving your objectives. I&apos;m eager to hear about your
            ideas and projects, as I&apos;m constantly seeking new opportunities
            to collaborate and expand my network. Please take a moment to share
            a bit about yourself, or feel free to explore my website to gain a
            deeper understanding of my work.
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
