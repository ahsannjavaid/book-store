import Link from "next/link";
import React from "react";

function BookCard({ id, title, price, rating }) {
  return (
    <div className="flex justify-between items-center border rounded-lg p-3">
      <div>
        <span className="text-4xl font-bold">{title}</span>
        <div className="flex gap-5 w-48">
          <span className="w-1/2">💲{price}</span>
          <span className="w-1/2">⭐{rating}</span>
        </div>
      </div>
      <Link href={"/books/" + id} className="text-xl common-hover rounded-lg p-2">View Details</Link>
    </div>
  );
}

export default BookCard;
