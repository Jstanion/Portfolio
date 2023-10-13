"use client";
import React from "react";
import Styles from "./styles.module.css";

export default function Project() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="flex justify-end w-full">
        <div className="flex justify-end w-full">
          <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-9/12 shadow-lg shadow-black">
            <span className="pl-10">CONTACT</span>
          </h1>
        </div>
      </div>
      <form className={`${Styles.container} w-1/2`} onSubmit={handleSubmit}>
        <div className={Styles.name}>
          <div>
            <label htmlFor="frm-first">First Name</label>
            <input
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              required
            />
          </div>
          <div>
            <label htmlFor="frm-last">Last Name</label>
            <input
              id="frm-last"
              type="text"
              name="last"
              autoComplete="family-name"
              required
            />
          </div>
        </div>
        <div className={`email ${Styles.block}`}>
          <label htmlFor="frm-email">Email</label>
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className={`message ${Styles.block}`}>
          <label htmlFor="frm-message">Message</label>
          <textarea
            id="frm-message"
            className={Styles.textarea}
            rows="6"
            name="message"
          ></textarea>
        </div>
        <div className={`button ${Styles.block}`}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
