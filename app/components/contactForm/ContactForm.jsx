"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dropdownSelection, setDropdownSelection] = useState("");

  

  return (
    <form className="form-control w-full">
      <div className="flex justify-between w-full">
        <div className="flex flex-col mb-4 w-2/5">
          <label htmlFor="name" className="label">
            <span className="label-text text-white font-light">Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            placeholder="Name"
            className="input input-bordered input-sm w-full bg-white text-neutral font-light mr-2"
          />
        </div>
        <div className="flex flex-col mb-4 w-2/5">
          <label htmlFor="email" className="label">
            <span className="label-text text-white font-light">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="example@domain.com"
            className="input input-bordered input-sm w-full bg-white text-neutral font-light"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="subject" className="label">
          <span className="label-text text-white font-light">Subject</span>
        </label>
        <select 
        value={dropdownSelection}
        onChange={(e) => setDropdownSelection(e.target.value)}
        className="select select-bordered select-sm w-full text-neutral font-light bg-white">
          <option className="font-light">Select one...</option>
          <option className="font-light">General Information</option>
          <option className="font-light">Project Opportunities</option>
        </select>
        <input 
        type="hidden"
        name="subject"
        value={`New portfolio form submission: ${dropdownSelection}`}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="message" className="label">
          <span className="label-text text-white font-light">
            Comment or Message
          </span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
          placeholder="Type your message"
          className="textarea textarea-bordered h-24 bg-white text-neutral font-light"
        ></textarea>
      </div>
      <input
        type="submit"
        value="Submit"
        className="btn btn-outline text-white hover:bg-white hover:bg-opacity-40 w-1/3"
      />
    </form>
  );
};

export default ContactForm;

// import Styles from "./styles.module.css";

// export default function ContactForm() {
// <form className={`${Styles.container} w-1/2`}>
//   <div className={Styles.name}>
//     <div>
//       <label htmlFor="frm-first">First Name</label>
//       <input
//         id="frm-first"
//         type="text"
//         name="first"
//         autoComplete="given-name"
//         required
//       />
//     </div>
//     <div>
//       <label htmlFor="frm-last">Last Name</label>
//       <input
//         id="frm-last"
//         type="text"
//         name="last"
//         autoComplete="family-name"
//         required
//       />
//     </div>
//   </div>
//   <div className={`email ${Styles.block}`}>
//     <label htmlFor="frm-email">Email</label>
//     <input
//       id="frm-email"
//       type="email"
//       name="email"
//       autoComplete="email"
//       required
//     />
//   </div>
//   <div className={`message ${Styles.block}`}>
//     <label htmlFor="frm-message">Message</label>
//     <textarea
//       id="frm-message"
//       className={Styles.textarea}
//       rows="6"
//       name="message"
//     ></textarea>
//   </div>
//   <div className={`button ${Styles.block}`}>
//     <button type="submit">Submit</button>
//   </div>
// </form>;

// }
