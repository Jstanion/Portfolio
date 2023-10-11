import React from "react";
import Styles from "./styles.module.css";

export default function Project() {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-full">
        <div className="flex justify-end w-full">
          <div className="flex justify-end w-full">
            <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-9/12 shadow-lg shadow-black">
              <span className="pl-10">CONTACT</span>
            </h1>
          </div>
        </div>
        <div className="flex justify-center w-2/3">
          <form className={Styles.container}>
            <h1>Get in touch</h1>
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
            <div className={`phone ${Styles.block}`}>
              <label htmlFor="frm-phone">Phone</label>
              <input
                id="frm-phone"
                type="text"
                name="phone"
                autoComplete="tel"
                required
              />
            </div>
            <div className={`name ${Styles.name}`}>
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
            <div className={`message ${Styles.block}`}>
              <label htmlFor="frm-message">Message</label>
              <textarea id="frm-message" rows="6" name="message"></textarea>
            </div>
            <div className="button block">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
