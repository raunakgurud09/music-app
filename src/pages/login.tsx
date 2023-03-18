import SignUp from '@/components/Form/Login';
import withoutAuth from '@/components/withoutAuth';

function register() {
  return (
    <div>
      <SignUp />
      {/* <GoogleLogin /> */}
    </div>
  );
}

export default register;
