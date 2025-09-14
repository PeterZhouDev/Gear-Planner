import type { ComponentChildren, FunctionalComponent } from 'preact';

/**
 * Card provides a consistent, accessible container for displaying grouped content.
 * Applies background, padding, rounded corners, and shadow.
 *
 * @param children - The content to render inside the card.
 * @param className - Additional Tailwind classes for custom styling.
 */
export const Card: FunctionalComponent<{ children: ComponentChildren; className?: string }> = ({ children, className = "" }) => {
  return (
    <div className={`bg-night-surface rounded shadow p-4 ${className}`.trim()}>
      {children}
    </div>
  );
};
