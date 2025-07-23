import { Link } from "react-router-dom";

import Container from "/src/shared/components/Container/Container";
import Button from "/src/shared/components/Button/Button";
import { FourIcon } from "/src/shared/components/icons";

import Img from "./Img/Img";

import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <FourIcon />
          <Img />
          <FourIcon />
        </div>
        <div>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.text}>
            We're sorry, the page you requested could not be found.
          </p>
          <p className={styles.text}>Please go back to the homepage.</p>
        </div>
        <Link to="/">
          <Button variant="contained" type="button">
            Go Home
          </Button>
        </Link>
      </div>
    </Container>
  );
}
