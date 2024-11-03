import ContactUs from "./MainPage/ContactUs";
import Content from "./MainPage/Content";
import Footer from "./MainPage/Footer";
import Hero from "./MainPage/Hero";
import MenuList from "./MainPage/MenuList";
import Nav from "./MainPage/Nav";
import Products from "./MainPage/Products";

export default function App() {
  return (
    <section>
      <section>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Content />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <MenuList />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}
