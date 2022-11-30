import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from '../libs/useForm';
import Logo from '../public/assets/logo.png';
import { getAuth } from './api/calls';

export default function Login() {

    const { inputs, handleChange, resetForm } = useForm();

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await getAuth(inputs.username, inputs.password);
            console.log(response);
            
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <div className='bg-red-100 w-full h-screen'>
            <header className='bg-white border p-4 flex justify-between px-6 items-center'>
                <div className='w-[350px]'>
                    <Image src={Logo} alt='Logo' />
                </div>
            </header>

            <div className='p-[7rem] bg-white mt-[3rem] mx-[7rem] rounded-md'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col py-8'>
                        <label htmlFor='user-name' className='py-2'>User Name</label>
                        <input placeholder='Email' type='text' required name='username' value={inputs.username} onChange={handleChange} className='border p-2' />
                    </div>

                    <div className='flex flex-col pb-4'>
                        <label htmlFor='password' className='py-2'>Password</label>
                        <input placeholder='Password' type='password' required name='password' value={inputs.password} onChange={handleChange} className='border p-2' />
                    </div>
                    <button className='w-full bg-primaryColor text-white py-4'>Login</button>
                </form>
            </div>
        </div>
    )
}