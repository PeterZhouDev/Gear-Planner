export function NavLink({ href, children }: { href: string; children: preact.ComponentChildren }) {
  return (
    <a href={href} className="var(--yellow) underline hover:text-blue-800">
      {children}
    </a>
  );
}