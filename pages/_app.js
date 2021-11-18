import "../styles/globals.css";
import { BookmarkContextProvider } from "../context/bookmarks";

function Application({ Component, pageProps }) {
  return (
    <BookmarkContextProvider>
      <Component {...pageProps} />
    </BookmarkContextProvider>
  );
}

export default Application;
