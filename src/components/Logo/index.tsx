import Image from 'next/image'
import logo from '../../assets/logo-192x192.png';

export function Logo() {
  return (
    <>
      <div className='rounded-full items-center mt-4 mb-3'>
        <Image
          src={logo}
          alt="Logo of the app"
          width={70}
          height={70}
          className="p-50 rounded-full "
        />
      </div>

    </>
  );
}
