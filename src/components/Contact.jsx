function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__text">
          <span className="eyebrow">Contact Us</span>
          <h2>Get in Touch</h2>
          <h2 className="contact__sub">Reach Out to Us</h2>
        </div>
        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows={4} required />
          <button type="submit" className="btn">
            Send Message <span aria-hidden="true">&rarr;</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
