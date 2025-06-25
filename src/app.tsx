import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Hero } from "./components/home/hero";
import { Projects } from "./components/home/projects";
import { Technologies } from "./components/home/technologies";

export const App = () => {
  return (
    <div className="flex flex-col gap-[6.25rem] py-[2.25rem] lg:max-w-5xl lg:mx-auto lg:py-[6.25rem] px-4 lg:px-0">
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
