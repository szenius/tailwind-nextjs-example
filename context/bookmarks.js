import { createContext, useState } from "react";

export const BookmarkContext = createContext([]);

export function BookmarkContextProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (bookmark) => {
    const bookmarkSet = new Set(bookmarks);
    if (bookmarkSet.has(bookmark)) {
      bookmarkSet.delete(bookmark);
    } else {
      bookmarkSet.add(bookmark);
    }
    setBookmarks(Array.from(bookmarkSet));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}
