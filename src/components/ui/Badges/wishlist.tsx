import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<boolean>(false);
  const handleWishlist = () => {
    wishlist ? setWishlist(false) : setWishlist(true);
  };
  return (
    <div onClick={handleWishlist}>
      {wishlist ? (
        <AiFillHeart size={25} color='pink' />
      ) : (
        <AiOutlineHeart size={25} color='red' />
      )}
    </div>
  );
}
