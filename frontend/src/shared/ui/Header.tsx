import { useLocation } from 'preact-iso';
import type { FunctionalComponent } from 'preact';

/**
 * Navigation links for the main header.
 */
const navLinks: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/gear-list', label: 'Gear List' },
  { href: '/packbuilder', label: 'Pack Builder' },
  { href: '/explore/gear-lists', label: 'Explore Gear Lists' },
  { href: '/explore/journals', label: 'Explore Journals' },
];

/**
 * NavLink renders a single navigation link with accessibility and active state.
 * @param href - The link destination
 * @param label - The link text
 * @param active - Whether this link is the current page
 */
const NavLink: FunctionalComponent<{ href: string; label: string; active: boolean }> = ({ href, label, active }) => (
  <li>
    <a
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`font-semibold transition-colors px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow ${
        active ? 'text-yellow underline' : 'text-night-text hover:text-yellow'
      }`}
    >
      {label}
    </a>
  </li>
);

/**
 * Header renders the main navigation bar for the app.
 * Uses semantic HTML and accessibility best practices.
 */
export const Header: FunctionalComponent = () => {
  const { url } = useLocation();

  return (
    <header className="bg-night-surface px-4 py-3 shadow">
      <nav role="navigation" aria-label="Main navigation">
        <ul className="flex gap-6 items-center list-none m-0 p-0">
          {navLinks.map(link => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={url === link.href}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
