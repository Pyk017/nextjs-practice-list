import Head from "next/head";
import styles from "../../styles/Jobs.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
};

const Users = ({ users }: { users: any }) => {
  return (
    <>
      <Head>
        <title>Users List | Listing</title>
      </Head>
      <div>
        <h2>Users list</h2>
        {users.map((user: any) => {
          return (
            <Link href={"/users/" + user.id} key={user.id}>
              <h3 className={styles.single}>{user.name}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Users;
