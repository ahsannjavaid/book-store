import { getAuthorNameById, getBookById, getGenreNameById } from "@/helper";
import { books } from "@/Data.json";
import React from "react";
import Link from "next/link";

function BookDetails({ bookDetails }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 border">
      <span className="text-7xl font-bold uppercase">{bookDetails.title}</span>
      <Link href={bookDetails.id + '/author'} className="text-3xl underline">
        {getAuthorNameById(bookDetails.authorId)}
      </Link>
      <span className="italic">"{bookDetails.description}"</span>
      <span className="inverse-bg inverse-fg rounded-lg px-2 font-bold">
        {getGenreNameById(bookDetails.genreId)}
      </span>
      <div className="flex gap-4">
        <span className="w-1/2">💲{bookDetails.price}</span>
        <span className="w-1/2">⭐{bookDetails.rating}</span>
      </div>
    </div>
  );
}

export default BookDetails;

export function getStaticProps({ params }) {
  const bookDetails = getBookById(params.id);

  return {
    props: { bookDetails },
  };
}

export function getStaticPaths() {
  const paths = books.map((book) => ({ params: { id: book.id } }));

  return {
    paths,
    fallback: false,
  };
}
