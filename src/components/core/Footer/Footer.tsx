import socials from '../../../data/socials';
import Signature from '../../Icons/Signature';
import footer from '@/data/footer-data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='text-400 mt-12 flex items-center justify-evenly py-6 text-sm'>
      <div className='container flex-row justify-between py-4 sm:flex'>
        <div className='flex flex-col justify-center sm:justify-center '>
          <Signature />
          <p>&#169; {year} Raunak Gurud</p>
          <div className='text-300 flex items-center space-x-4 p-2'>
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target='_blank'
                rel='noreferrer'
                className='w-4 hover:text-primary-500'
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className='flex-1'></div>
        <div className='flex space-x-5'>
          {footer.map(({ heading, options }) => (
            <div className='w-fit' key={heading}>
              <h4 className='text-md py-[2px] font-bold'>{heading}</h4>
              <ul className='text-xs'>
                {options.map((option) => (
                  <a
                    href={option.url}
                    key={option.name}
                    target='_blank'
                    rel='noreferrer'
                    className='opacity-70 hover:opacity-100'
                    aria-label={option.name}
                  >
                    <li className='py-[2px]'>{option.name}</li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
