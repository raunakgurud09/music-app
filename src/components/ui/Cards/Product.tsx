import { GitHubLogo } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import phot from '../../../public/download.jpeg';
import Wishlist from '../Badges/wishlist';

export default function ProductCard({ image, name, price, id }) {
  return (
    <Link href={`/products/${id}`} passHref>
      <div className='bg-secondary-200 m-2 h-80 w-full max-w-[220px] rounded'>
        <div className='h-3/4'>
          <Image
            src={image}
            alt={name}
            width={220}
            height={180}
            className='fill h-full object-cover'
          />
        </div>
        <div className='m-2'>
          <h3 className='truncate text-lg font-semibold'>{name}</h3>
          <div className='my-2 flex'>
            <p className='w-3/4 text-sm font-medium text-green-500'>
              Rs.{price}
            </p>
            <div className='flex w-1/4 items-center justify-center'>
              <Wishlist />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
