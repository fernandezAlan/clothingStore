import "../styles/globals.css";
import Navbar from "../components/Nabvar";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
