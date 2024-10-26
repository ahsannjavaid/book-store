import { getAuthorById, getBookById } from '@/helper';
import { useRouter } from 'next/router'
import React from 'react'
import Loading from "@/components/Loader"

function BookAuthor() {
    const router = useRouter();
    const { id } = router.query;

    const authorDetails = getAuthorById(getBookById(id)?.authorId);

    if (!id) {
        return <Loading />
    }
    
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4 border">
            <span className="text-7xl font-bold uppercase">{authorDetails.name}</span>
            <span className="italic">"{authorDetails.biography}"</span>
        </div>
    )
}

export default BookAuthor