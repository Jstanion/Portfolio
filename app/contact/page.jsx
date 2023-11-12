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
        <section
          className={`${Styles.fadeIn} flex flex-col justify-center items-center my-4 w-4/5`}
        >
          <p className="my-4 text-sm">
            Feel free to explore my portfolio and my work. Are you looking to
            collaborate on a project or have an idea you&apos;d like to pitch?
            Take a moment to share a bit about yourself, your idea, or what you
            are working on. I&apos;m always interested in and collaboration
            opportunities and to expand my network with other talented
            individuals. Thanks for stopping by!
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
