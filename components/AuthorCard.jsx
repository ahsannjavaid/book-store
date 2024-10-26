import React from "react";

function AuthorCard({ name, biography }) {
  return (
    <div className="border rounded-lg p-3 common-hover cursor-pointer">
      <span className="text-4xl font-bold">{name}</span>
      <div className="italic">"{biography}"</div>
    </div>
  );
}

export default AuthorCard;
