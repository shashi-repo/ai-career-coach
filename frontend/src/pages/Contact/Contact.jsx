import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <textarea
          placeholder="Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;