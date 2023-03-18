import { useUser } from '@/hooks/user/useUser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Spinner from './ui/spinner';
import Error from './Error';

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

    if (!currentUser) {
      return <Component />;
    } else {
      return (
        <Error message="You are already logged in you can't use this page. Sign out to use this page" />
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
