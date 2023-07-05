export default function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export async function getServerSideProps(context) {
  const { parmas, req, res } = context;

  return {
    props: {
      username: 'Max',
    },
  };
}
