export default function MediumBadge({ num = 0 }) {
  return (
    <>
      <div className='float-right  rounded-full bg-red-800 px-2 text-xs  dark:bg-pink-400'>
        {num}
      </div>
    </>
  );
}
