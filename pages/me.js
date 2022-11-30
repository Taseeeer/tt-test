import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Spinner from '../components/Spinner';
import { getCurrentUser } from './api/calls';
export default function Me() {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        (async () => {
            const response = await getCurrentUser();
            setCurrentUser(response.data.username);
            setLoading(false);
        })();
    }, []);

    if(loading) return (
        <>
        <Header />
        <Spinner />
        </>
    )
    return (
        <div>
            <Header />
            <div className='flex gap-8 items-center pl-8'>
                <span className='text-2xl'>Current user:</span>
                <span className='text-2xl'>{ currentUser && currentUser}</span>
            </div>
        </div>
    )
}