import { useRouter } from "next/router";
import { books } from "@/Data.json";
import Button from "@/components/Button";
import BookCard from "@/components/BookCard";
import InputField from "@/components/InputField";
import { getGenreNameById, getSearchHistoryinLocalStorage, setSearchHistoryinLocalStorage } from "@/helper";
import { useState } from "react";

export default function Home({ booksData }) {
  const router = useRouter();
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [query, setQuery] = useState("");
  const [recentSearchesToggle, setRecentSearchesToggle] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleViewGenres = () => {
    router.push('/genres');
  }

  const handleViewAuthors = () => {
    router.push('/authors');
  }

  const handleRecentSearchesToggle = () => {
    setRecentSearchesToggle(prevState => !prevState);
  }

  const handleFilterChange = (event) => {
    setQuery(event.target.value);
  }

  const handleFilterByGenre = (event) => {
    event.preventDefault();
    const filterValue = query.toLowerCase();
    const filtered = booksData.filter(book =>
      getGenreNameById(book.genreId).toLowerCase().includes(filterValue)
    );
    setFilteredBooks(filtered);
    setSearchHistoryinLocalStorage(query);
  }

  const handleTheme = () => {
    setIsDarkMode(prevState => !prevState);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  }

  return (
    <main className="flex flex-col gap-4 m-8">
      <div className="flex gap-4">
        <Button onClick={handleViewGenres}>VIEW GENRES</Button>
        <Button onClick={handleViewAuthors}>VIEW AUTHORS</Button>
        <form onSubmit={handleFilterByGenre} className="flex gap-2 w-full">
          <InputField onChange={handleFilterChange} placeholder={'Filter by Genre...'} additionalClasses={'w-full px-6 text-black text-2xl rounded-tr-none rounded-br-none'} />
          <Button type="submit" additionalClasses={'text-3xl px-3 rounded-tl-none rounded-bl-none'}>🔍</Button>
        </form>
        <Button onClick={handleTheme} additionalClasses={'text-4xl px-2'}>{isDarkMode ? <span>☀️</span> : <span>🌙</span>}</Button>
      </div>
      <RelevantSearches recentSearchesToggle={recentSearchesToggle} handleRecentSearchesToggle={handleRecentSearchesToggle} />
      <div className="flex flex-col gap-4">
        {
          filteredBooks.map(book => (
            <BookCard key={book.id} id={book.id} title={book.title} price={book.price} rating={book.rating} />
          ))
        }
      </div>
    </main>
  );
}

function RelevantSearches({ recentSearchesToggle, handleRecentSearchesToggle }) {
  return recentSearchesToggle ? <div className="flex items-center gap-2">
    <Button onClick={handleRecentSearchesToggle}>RECENT SEARCHES</Button>
    <div className="overflow-auto py-3">
      {recentSearchesToggle && getSearchHistoryinLocalStorage()?.length ?
        getSearchHistoryinLocalStorage()?.map((query, index) => {
          return <span className="p-1 px-2 mx-1 border rounded" key={index}>{query}</span>
        }) : <span className="animate-pulse italic">Have not searched anything yet!</span>
      }
    </div>
  </div>
    :
    <Button onClick={handleRecentSearchesToggle}>RECENT SEARCHES</Button>
}

export function getStaticProps() {
  if (!books || !books.length) {
    return {
      notFound: true
    }
  }

  return {
    props: { booksData: books },
    revalidate: 60
  }
}