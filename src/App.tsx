import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";
import Switcher from "./components/Switcher";

import { useModeSwitch } from "./lib/statestore";

export default function App() {
  const mode = useModeSwitch((state) => state.mode);
  const updateMode = useModeSwitch((state) => state.updateMode);

  const handleUpdateMode = () => {
    if (mode === "light") {
      updateMode("dark");
    } else {
      updateMode("light");
    }
  };
  return (
    <div className={`${mode}`}>
      {/* Switcher */}
      <Switcher {...{ mode, handleUpdateMode }} />

      <main className="relative text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
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
          <SpecialOffers />
        </section>
        <section className="padding bg-pale-blue dark:bg-gray-800">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-x padding-t pb-8 bg-black dark:bg-white">
          <Footer />
        </section>
      </main>
    </div>
  );
}
