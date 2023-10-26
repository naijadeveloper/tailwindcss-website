import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import { navLinks } from "@/constants";

export default function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike_Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-12 xl:gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-300 hover:underline-offset-2 hover:underline hover:decoration-coral-red hover:decoration-4"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden dark:bg-gray-100 dark:p-1 dark:rounded">
          <img
            className=""
            src={hamburger}
            alt="mobile_menu_icon"
            width={25}
            height={25}
          />
        </div>

        <div className="max-lg:hidden">
          <a
            className="font-montserrat leading-normal text-lg font-semibold hover:text-coral-red"
            href="#"
          >
            Sign in / Explore now
          </a>
        </div>
      </nav>
    </header>
  );
}
