# Theme System Guide

This guide explains how to use the theme system in your application for consistent styling across all components.

## Overview

The theme system provides three ways to access theme colors:

1. **Tailwind Classes** (Recommended) - Use in JSX/TSX className attributes
2. **CSS Variables** - Use in CSS files or inline styles
3. **Theme Config** - Use in JavaScript/TypeScript for programmatic access

## Available Colors

### Primary Color Palette

| Color | Usage | Tailwind Class | CSS Variable |
|-------|-------|---------------|--------------|
| **Background** | Page backgrounds | `bg-background` | `var(--background)` |
| **Foreground** | Main text color | `text-foreground` | `var(--foreground)` |
| **Primary** | Primary brand color | `bg-primary` / `text-primary` | `var(--primary)` |
| **Secondary** | Secondary elements | `bg-secondary` / `text-secondary` | `var(--secondary)` |
| **Accent** | Accent highlights | `bg-accent` / `text-accent` | `var(--accent)` |
| **Muted** | Subtle backgrounds | `bg-muted` / `text-muted-foreground` | `var(--muted)` |

### Border & Input

| Color | Usage | Tailwind Class | CSS Variable |
|-------|-------|---------------|--------------|
| **Border** | Default borders | `border-border` | `var(--border)` |
| **Input** | Input borders | `border-input` | `var(--input)` |
| **Ring** | Focus rings | `ring-ring` | `var(--ring)` |

### Status Colors

| Color | Usage | Tailwind Class | CSS Variable |
|-------|-------|---------------|--------------|
| **Success** | Success states | `bg-success` / `text-success` | `var(--success)` |
| **Error** | Error states | `bg-error` / `text-error` | `var(--error)` |
| **Warning** | Warning states | `bg-warning` / `text-warning` | `var(--warning)` |
| **Info** | Info states | `bg-info` / `text-info` | `var(--info)` |

## Usage Examples

### 1. Using Tailwind Classes (Recommended)

```tsx
// Button with primary background
<button className="bg-primary text-primary-foreground">
  Click me
</button>

// Input with theme border
<input className="border border-input focus:border-primary" />

// Error message
<p className="text-error">Something went wrong</p>

// Success message
<p className="text-success">Action completed!</p>
```

### 2. Using CSS Variables

```css
/* In your CSS files */
.custom-element {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: 1px solid var(--border);
}

.custom-button:hover {
  background-color: var(--secondary);
}
```

### 3. Using Theme Config in TypeScript

```tsx
import { theme, themeClasses, getCSSVariable } from '@/theme';

// Use predefined class names
const Button = () => (
  <button className={themeClasses.bg.primary}>
    Click me
  </button>
);

// Get CSS variable values programmatically (client-side only)
const primaryColor = getCSSVariable('--primary');
console.log(primaryColor); // "#000000"

// Access theme configuration
const buttonStyle = {
  backgroundColor: theme.colors.primary.DEFAULT,
  color: theme.colors.primary.foreground,
};
```

## Customizing Theme Colors

To customize the theme colors, edit `/src/app/globals.css`:

```css
:root {
  /* Change primary color from black to blue */
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  
  /* Change border color */
  --border: #e5e7eb;
  
  /* Change success color */
  --success: #10b981;
}
```

## Dark Mode Support

The theme automatically adjusts for dark mode. To customize dark mode colors, edit the `@media (prefers-color-scheme: dark)` section in `globals.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --primary: #ffffff;
    /* Add more dark mode overrides */
  }
}
```

## Component Examples

### Input Component

```tsx
<Input
  placeholder="Enter email"
  error={error ? "Invalid email" : undefined}
  icon={<ArrowIcon />}
/>
```

The Input component uses:
- `border-input` for default border
- `border-error` when error prop is provided
- `text-muted-foreground` for placeholder
- `bg-muted/50` for icon background

### Button Component

```tsx
<Button onClick={handleClick}>
  Submit
</Button>
```

The Button component uses:
- `bg-background` for background
- `text-foreground` for text
- `hover:bg-secondary` for hover state

## Best Practices

1. **Always use theme colors** instead of hardcoded colors like `#000000` or `text-black`
2. **Prefer Tailwind classes** over inline styles for better performance
3. **Use semantic color names** (e.g., `text-error` instead of `text-red-500`)
4. **Test in both light and dark mode** to ensure proper contrast
5. **Use foreground variants** for text on colored backgrounds (e.g., `text-primary-foreground` on `bg-primary`)

## Migration Guide

To migrate existing components to use the theme:

**Before:**
```tsx
<div className="bg-black text-white border-black">
  <p className="text-red-500">Error</p>
</div>
```

**After:**
```tsx
<div className="bg-primary text-primary-foreground border-border">
  <p className="text-error">Error</p>
</div>
```

## Common Patterns

### Card Component
```tsx
<div className="bg-background border border-border rounded-lg p-4">
  <h3 className="text-foreground">Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>
```

### Form with Validation
```tsx
<form>
  <Input error={emailError} />
  {emailError && <p className="text-error text-sm">{emailError}</p>}
  {success && <p className="text-success text-sm">Saved!</p>}
</form>
```

### Interactive Element
```tsx
<button className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
  Accent Button
</button>
```

## Troubleshooting

**Issue:** Colors not updating
- **Solution:** Clear browser cache or hard refresh (Cmd/Ctrl + Shift + R)

**Issue:** Dark mode not working
- **Solution:** Check browser/OS dark mode settings

**Issue:** Custom colors not appearing
- **Solution:** Ensure CSS variables are defined in `:root` and registered in `@theme inline`

## Resources

- Theme configuration: `/src/theme.ts`
- Global styles: `/src/app/globals.css`
- Example components:
  - `/src/components/atoms/Input.tsx`
  - `/src/components/atoms/Button.tsx`
  - `/src/components/organisms/JoinForm.tsx`

