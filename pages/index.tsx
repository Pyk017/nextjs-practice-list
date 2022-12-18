import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Users List | Home</title>
      </Head>
      <div>
        <h2 className={styles.title}>Home Page</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          dicta, culpa id labore expedita in vel. Eius dolor fugit illum dolore
          neque quia saepe laborum enim assumenda excepturi, obcaecati quod!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          dicta, culpa id labore expedita in vel. Eius dolor fugit illum dolore
          neque quia saepe laborum enim assumenda excepturi, obcaecati quod!
        </p>
      </div>
      <Link href="/users" className={styles.btn}>
        Go to Users Lists
      </Link>
    </>
  );
}
