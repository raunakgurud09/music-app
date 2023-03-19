import { Formik } from 'formik';
import cx from 'classnames';
import { useLogin, useLogins } from '@/hooks/useAuth';
import Router, { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import Spinner from '../ui/spinner';
import FilledButton from '../ui/Buttons/Filled';
import { View } from '../Icons';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function SignUp() {
  // const { login, loggingIn, error } = useLogins();
  const login = useLogin();
  const { query } = useRouter();
  const { theme } = useTheme();
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const ref = query.ref as string;

  const handleSubmit = async (values) => {
    try {
      toast.info('Submitted!');
      await login(values.email, values.password);
      toast.success('Logged In');
      if (ref) {
        Router.push(`/products/${ref}`);
      } else {
        Router.push('/');
      }
    } catch (error) {
      toast.error('Invalid password and username');
      setErrorMsg('**Invalid password**');
    }
  };

  return (
    <div className='flex h-screen flex-row items-start justify-center'>
      <div className='mt-10 flex flex-col'>
        <h5 className='text-4xl font-medium'>Login</h5>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className='my-8 flex h-fit flex-col rounded'
            >
              <div className='flex w-72 flex-col'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  className={cx('border', 'bg-black/30')}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className='text-red-600'>
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              <div className='relative flex flex-col'>
                <label htmlFor='password'>Password</label>
                <input
                  type={passwordShown ? 'text' : 'password'}
                  name='password'
                  className={cx('border ', 'bg-black/30')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <button
                  className='absolute right-2 top-9'
                  onClick={handlePasswordVisibility}
                >
                  <View />
                </button>
                <span className='text-red-600'>{errorMsg}</span>
              </div>
              <div className='mt-4 w-full'></div>
              <FilledButton text='Login' />
              <div
                className={cx(
                  'my-4 border',
                  theme === 'light' ? 'border-black' : 'border-white/75'
                )}
              ></div>
              <div className='flex flex-col space-y-2'>
                <Link
                  href={'/signup'}
                  className={cx(
                    'flex h-10 items-center justify-center rounded p-1',
                    theme === 'light'
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                  )}
                >
                  <p className='text-md font-medium'>SignUp</p>
                </Link>
                <div
                  className={cx(
                    'flex h-10 items-center justify-center rounded p-1',
                    theme === 'dark'
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                  )}
                >
                  <p className='text-md font-medium'>Google</p>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
