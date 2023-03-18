// import img1 from './img/img1.jpg'
// import img2 from './img/img2.jpg'
import img1 from '@/public/defaultAvatar.png';
import img2 from '@/public/defaultAvatar.png';
import img3 from '@/public/defaultAvatar.png';
import Image from 'next/image';
// import "./Slider.css"
// const img1 = ""
// const img2 = ""
// const img3 = ""

const proprieties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className='m-auto w-[650px] '>
      <div className='each-slide'>
        <div>
          <Image src={img1} alt='img1' />
        </div>
      </div>
      <div className='each-slide'>
        <div>
          <Image src={img2} alt='img2' />
        </div>
      </div>
      <div className='each-slide'>
        <div>
          <Image src={img3} alt='img3' />
        </div>
      </div>
      {/* <Slide {...proprieties}>
      </Slide> */}
    </div>
  );
};

export default Slideshow;
