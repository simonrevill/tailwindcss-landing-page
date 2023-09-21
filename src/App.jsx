import {
  // Nav,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

const App = () => (
  <main className="relative">
    {/* <Nav /> */}
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x w-full py-16 sm:py-32">
      <Subscribe />
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
