import AuthorCard from '@/components/AuthorCard';
import Loader from '@/components/Loader';
import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Authors() {
    const { data: authorsData, error } = useSWR('/api/authors', fetcher);

    if (!authorsData) return <Loader />;

    if (error) return <div className='flex justify-center items-center h-screen'>Failed to load authors.</div>;

    return (
        <div className='border'>
            <div className='flex flex-col gap-4 m-8'>
                {authorsData.map((author) => (
                    <AuthorCard key={author.id} name={author.name} biography={author.biography} />
                ))}
            </div>
        </div>
    );
}

export default Authors;
