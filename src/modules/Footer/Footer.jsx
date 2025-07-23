import Container from "/src/shared/components/Container/Container";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";

import Contacts from "./Contacts/Contacts";
import FooterMap from "./FooterMap/FooterMap";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <SectionTitle>Contact</SectionTitle>
        <Contacts />
        <FooterMap />
      </footer>
    </Container>
  );
}
