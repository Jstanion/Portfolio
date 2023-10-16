import Styles from "../app/contact/styles.module.css"

export default function ContactForm() {
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
  </form>;
}
