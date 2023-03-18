import Signup from '@/components/Form/Signup';
import withoutAuth from '@/components/withoutAuth';
import Link from 'next/link';

function signup() {
  return (
    <div>
      <Signup />
    </div>
  );
}

export default signup;
