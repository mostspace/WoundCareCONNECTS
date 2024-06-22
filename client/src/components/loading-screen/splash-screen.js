import { logo } from 'src/assets';

// ----------------------------------------------------------------------

export default function SplashScreen({ sx, ...other }) {
  return (
    <>
      <div className='w-full h-[100vh] flex justify-center items-center'>
        <img src={logo} className='w-[20%]'/> 
      </div>
    </>
  );
}