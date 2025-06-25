import { Logo } from "../../shared/ui/logo";
import { SocialLinks } from "./social-links";

export function Header() {
  return (
    <header className="flex px-14 items-center w-full justify-between bg-secondary h-16 rounded-3xl">
      <Logo />
      <SocialLinks />
    </header>
  );
}
