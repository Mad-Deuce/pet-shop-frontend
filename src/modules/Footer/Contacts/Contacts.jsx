import { Link } from "react-router-dom";

import { InstagramIcon, WhatsappIcon } from "/src/shared/components/icons";

import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.cell}>
        <h5 className={styles.title}>Phone</h5>
        <Link to={"tel:+493091588492"} className={styles.link}>
          +49 30 915-88492
        </Link>
      </div>
      <div className={styles.cell}>
        <h5 className={styles.title}>Socials</h5>
        <div className={styles.iconGroup}>
          <Link
            className={styles.link}
            to={"https://www.instagram.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className={styles.icon} />
          </Link>
          <Link
            className={styles.link}
            to={"https://www.whatsapp.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon className={styles.icon} />
          </Link>
        </div>
      </div>
      <div className={styles.cell}>
        <h5 className={styles.title}>Address</h5>
        <Link
          className={styles.link}
          to={"https://maps.app.goo.gl/JFtaGVC9tcjcLrmq5"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wallstraẞe 9-13, 10179 Berlin, Deutschland
        </Link>
      </div>
      <div className={styles.cell}>
        <h5 className={styles.title}>Working Hours</h5>
        <p className={styles.text}>24 hours a day</p>
      </div>
    </div>
  );
}
