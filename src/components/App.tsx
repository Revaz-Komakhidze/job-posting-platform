import Background from "./Background";
import BookmarksButton from "./BookmarksButton";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

function App() {
  return (
    <>
      <Background />

      <Header />
      <Logo />
      <BookmarksButton />

      <SearchForm />

      <Container />

      <Footer />
    </>
  );
}

export default App;
