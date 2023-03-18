export default function LargeBadge({ children, num = 999 }: any) {
  return (
    <>
      <div className=' z-10 float-right   rounded-full bg-red-800 px-2  text-xs dark:bg-pink-400'>
        {children}
        {num}+
      </div>
    </>
  );
}
