export default function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export async function getServerSideProps(context) {
  const { params } = context;

  console.log('Server side code');

  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}
