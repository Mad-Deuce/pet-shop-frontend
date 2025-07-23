import Container from "/src/shared/components/Container/Container";

import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Basket from "./Basket/Basket";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <NavMenu />
          <Basket />
        </div>
      </Container>
    </header>
  );
}
