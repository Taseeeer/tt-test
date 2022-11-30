import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/assets/logo.png';

export default function Header() {
    return (
        <header className='border p-4 flex justify-between px-6 items-center'>
            <div className='w-[350px]'>
                <Link href='/main'>
                    <Image src={Logo} alt='Logo' />
                </Link>
            </div>
            <button className='py-2 px-8 cursor-pointer text-white rounded-sm bg-primaryColor'>Log out</button>
        </header>
    )
}
