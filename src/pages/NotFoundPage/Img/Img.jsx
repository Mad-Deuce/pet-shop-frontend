import styles from "./Img.module.css";
import img from "./img.png";

export default function Img() {
  return <img className={styles.img} src={img} />;
}
