import { books, authors, genres } from "@/Data.json";

export const getBookById = id => {
    return books.find(book => book.id === id)
}

export const getAuthorNameById = id => {
    return authors.find(author => author.id === id).name;
}

export const getAuthorById = id => {
    return authors.find(author => author.id === id);
}

export const getGenreNameById = id => {
    return genres.find(genre => genre.id === id).name;
}

const isBrowserEnvironment = () => typeof window !== "undefined";

export const getSearchHistoryinLocalStorage = () => {
    if (!isBrowserEnvironment()) return;
    let recentSearches = JSON.parse(localStorage.getItem('recent_searches'));
    if (!recentSearches?.length) {
      recentSearches = [];
    }
    return recentSearches?.filter(query => query)?.reverse();
}

export const setSearchHistoryinLocalStorage = (query) => {
    if (!isBrowserEnvironment()) return;
    const recentSearches = getSearchHistoryinLocalStorage();
    recentSearches.push(query);
    localStorage.setItem('recent_searches', JSON.stringify(recentSearches));
}