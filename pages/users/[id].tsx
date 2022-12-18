export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user: any) => {
    return { params: { id: user.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const Details = ({ user }: { user: any }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default Details;
