import Background from "./Background";
import BookmarksButton from "./BookmarksButton";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

function App() {
  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <BookmarksButton />
          <Logo />
        </HeaderTop>
      </Header>

      <SearchForm />

      <Container />

      <Footer />
    </>
  );
}

export default App;
