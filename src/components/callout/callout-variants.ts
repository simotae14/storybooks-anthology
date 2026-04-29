import { cva, type VariantProps } from 'class-variance-authority';

export type CalloutVariants = VariantProps<typeof variants>;

export const variants = cva(
  // 1. Base styles (condivisi da tutte le varianti)
  ['p-4', 'rounded-2xl', 'border', 'shadow-md'],
  {
    variants: {
      variant: {
        primary: ['bg-primary-200', 'border-primary-500', 'text-primary-900'],
      },
    },
    // 2. Variante di default
    defaultVariants: {
      variant: 'primary',
    },
  },
);
