import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Tabs from "./components/Tabs/Tabs";
import Product from "./components/Product/Product";
import Description from "./components/Description/Description";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Tabs />
      <main className="main container">
        <Product />
        <Description />
      </main>
    </>
  );
}

export default App;
