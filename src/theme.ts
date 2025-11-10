/**
 * Theme Configuration
 * 
 * This file provides programmatic access to theme colors and values.
 * Use Tailwind classes (e.g., bg-primary, text-secondary) when possible.
 * Use these values for dynamic styling or JavaScript logic.
 */

export const theme = {
  colors: {
    // Background & Foreground
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    
    // Brand
    brand: {
      DEFAULT: 'var(--brand)',
      foreground: 'var(--brand-foreground)',
    },
    
    // Primary
    primary: {
      DEFAULT: 'var(--primary)',
      foreground: 'var(--primary-foreground)',
    },
    
    // Secondary
    secondary: {
      DEFAULT: 'var(--secondary)',
      foreground: 'var(--secondary-foreground)',
    },
    
    // Accent
    accent: {
      DEFAULT: 'var(--accent)',
      foreground: 'var(--accent-foreground)',
    },
    
    // Muted
    muted: {
      DEFAULT: 'var(--muted)',
      foreground: 'var(--muted-foreground)',
    },
    
    // Border & Input
    border: 'var(--border)',
    input: 'var(--input)',
    ring: 'var(--ring)',
    
    // Status
    success: {
      DEFAULT: 'var(--success)',
      foreground: 'var(--success-foreground)',
    },
    error: {
      DEFAULT: 'var(--error)',
      foreground: 'var(--error-foreground)',
    },
    warning: {
      DEFAULT: 'var(--warning)',
      foreground: 'var(--warning-foreground)',
    },
    info: {
      DEFAULT: 'var(--info)',
      foreground: 'var(--info-foreground)',
    },
  },
  
  radius: {
    full: 'var(--radius)',
  },
  
  fonts: {
    sans: 'var(--font-inter)',
    mono: 'var(--font-geist-mono)',
    luckiest: 'var(--font-luckiest-guy)',
    vollkorn: 'var(--font-vollkorn)',
    inter: 'var(--font-inter)',
  },
} as const;

/**
 * Helper function to get CSS variable value
 * @param variable - The CSS variable name (e.g., '--primary')
 * @returns The computed value of the CSS variable
 */
export function getCSSVariable(variable: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

/**
 * Tailwind class names for common theme colors
 * Use these for consistent styling across components
 */
export const themeClasses = {
  // Backgrounds
  bg: {
    brand: 'bg-brand',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    muted: 'bg-muted',
    success: 'bg-success',
    error: 'bg-error',
    warning: 'bg-warning',
    info: 'bg-info',
  },
  
  // Text
  text: {
    brand: 'text-brand',
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    muted: 'text-muted-foreground',
    success: 'text-success',
    error: 'text-error',
    warning: 'text-warning',
    info: 'text-info',
  },
  
  // Borders
  border: {
    brand: 'border-brand',
    primary: 'border-primary',
    secondary: 'border-secondary',
    accent: 'border-accent',
    muted: 'border-muted',
    default: 'border-border',
    success: 'border-success',
    error: 'border-error',
    warning: 'border-warning',
    info: 'border-info',
  },
} as const;

