import Container from '@/components/core/Layouts/Container';
import Error from '@/components/Error';

const Home = ({ working }) => {
  working = true;
  return (
    <>
      {working ? (
        <Container>HOME</Container>
      ) : (
        <Error message='Looks like server is down' />
      )}
    </>
  );
};

export default Home;
