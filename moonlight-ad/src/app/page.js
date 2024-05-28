import styles from "./page.module.css";

export default function Ad() {
  return (
    <main className={styles.main}>
      这是一个<span className={styles.fontBoom}>巨</span>大的<span className={styles.fontMidBoom}>广告</span>
    </main>
  );
}
