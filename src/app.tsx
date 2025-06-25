import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";

export const App = () => {
  return (
    <div className="flex flex-col gap-[6.25rem] lg:max-w-5xl lg:mx-auto justify-center py-[2.25rem] lg:py-[6.25rem] px-4 lg:px-0">
      <Header />
      <main className="flex flex-col gap-[6.25rem]">
        <Hero />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};
