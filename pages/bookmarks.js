export default function Bookmarks({ data }) {
  return <>{data.bookmarks.map((bookmark) => bookmark.bookmark)}</>;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/bookmarks`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
