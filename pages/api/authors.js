// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const authors = [
    { "id": "1", "name": "F. Scott Fitzgerald", "biography": "An American novelist and short story writer." },
    { "id": "2", "name": "Harper Lee", "biography": "An American novelist known for 'To Kill a Mockingbird'." },
    { "id": "3", "name": "George Orwell", "biography": "An English novelist and essayist." },
    { "id": "4", "name": "Jane Austen", "biography": "An English novelist known for her social commentary." },
    { "id": "5", "name": "J.D. Salinger", "biography": "An American writer known for 'The Catcher in the Rye'." },
    { "id": "6", "name": "Paulo Coelho", "biography": "A Brazilian lyricist and novelist." }
  ];
  res.status(200).json(authors);
}
