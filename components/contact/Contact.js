//styles

import styles from "./Contact.module.scss";

//components

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3375489434513!2d-73.94063118459436!3d40.68877697933467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25af0c3f5b773%3A0x8177e4a283c7b74d!2s750%20Lexington%20Ave%2C%20Brooklyn%2C%20NY%2011221%2C%20USA!5e0!3m2!1sen!2sin!4v1641209958312!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className={styles.infoForm}>
        <form>
          <div>
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div>
            <input type="text" name="phone" placeholder="Phone (Optional)" />
          </div>
          <div>
            <textarea name="message" placeholder="Message" required></textarea>
          </div>

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
