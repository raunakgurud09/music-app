import { useUser } from '@/hooks/user/useUser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Error from './Error';
import Spinner from './ui/spinner';

const styles = {
  container: {
    marginTop: 60,
  },
};

const withAuth = (Component) => {
  const myComponent = () => {
    const { data: currentUser, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !currentUser) {
        router.push('/login');
      }
    }, [currentUser, isLoading, router]);

    if (currentUser && currentUser.role === 'admin') {
      return <Component />;
    } else {
      return (
        <Error message='Hey trespasser you are not allowed to access this page' />
      );
    }

    return (
      <div style={styles.container}>
        <Spinner size={40} />
      </div>
    );
  };
  return myComponent;
};

export default withAuth;
