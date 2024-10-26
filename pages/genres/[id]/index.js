import React from 'react'
import { genres, books } from "@/Data.json";
import BookCard from '@/components/BookCard';

function filteredBooks({ relevantBooks }) {
    return (
        <div className='border h-screen'>
        <div className="flex flex-col gap-4 m-8">
            {
                relevantBooks.map(book => (
                    <BookCard key={book.id} id={book.id} title={book.title} price={book.price} rating={book.rating} />
                ))
            }
        </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const relevantBooks = books.filter(book => book.genreId === params.id);

    return {
        props: { relevantBooks }
    }
}

export async function getStaticPaths() {
    const paths = genres.map(genre => ({ params: { id: genre.id } }));

    return {
        paths,
        fallback: "blocking"
    }
}

export default filteredBooks