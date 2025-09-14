import type { ComponentChildren, FunctionalComponent } from 'preact';

/**
 * PageContainer provides a consistent, accessible layout for all pages.
 * Applies max width, centering, padding, background, and shadow.
 *
 * @param children - The page content to render inside the container.
 */
export const PageContainer: FunctionalComponent<{ children: ComponentChildren }> = ({ children }) => {
  return (
    <main
      className="max-w-2xl mx-auto p-8 mt-12 bg-night-surface rounded shadow"
      tabIndex={-1}
      aria-label="Page content"
    >
      {children}
    </main>
  );
};