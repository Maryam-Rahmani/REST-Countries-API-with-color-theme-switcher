import Image from "next/image";
import styles from "./navbarStyles.module.scss";

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <span className={styles.navbar_large_item}>Where in the world?</span>
      <div className={styles.navbar_small_item}>
        <Image
          src="/moon.png"
          alt="logo"
          width={25}
          height={25}
          className={styles.navbar__logo}
          loading="eager"
          priority={true}
        />
        <span className={styles.navbar_small_item}>Dark mode</span>
      </div>
    </div>
  )
}

export default Navbar