import Background from "./Background";
import BookmarksButton from "./BookmarksButton";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header, { HeaderTop } from "./layout/Header";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

function App() {
  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
      </Header>

      <SearchForm />

      <Container />

      <Footer />
    </>
  );
}

export default App;
