import React from 'react'
import { genres } from "@/Data.json";
import Button from '@/components/Button';
import Link from 'next/link';

function Genres({ genresData }) {
    return (
        <div className='flex flex-col gap-8 justify-center items-center h-screen text-4xl border'>{
            genresData.map(genre => <Link href={'/genres/' + genre.id}><Button key={genre.id}>{genre.name}</Button></Link>)
        }</div>
    )

}

export default Genres

export function getServerSideProps() {
    return {
        props: { genresData: genres }
    }
}