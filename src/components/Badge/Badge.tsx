import clsx from 'clsx';

type BadgeProps = {
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  children: React.ReactNode;
};

export default function Badge({ variant, children }: BadgeProps) {
  return (
    <span
      className={clsx(
        variant === 'primary' && 'bg-primary/60 border-primary text-primary',
        variant === 'secondary' && 'border-gray-500 bg-gray-100 text-gray-600',
        variant === 'success' && 'border-green-500 bg-green-100 text-green-600',
        variant === 'danger' && 'border-red-500 bg-red-100 text-red-600',
        variant === 'warning' && 'border-yellow-500 bg-yellow-100 text-yellow-600',
        variant === 'info' && 'border-blue-500 bg-blue-100 text-blue-600',
        variant === 'light' && 'border-gray-300 bg-gray-100 text-gray-600',
        variant === 'dark' && 'border-gray-800 bg-gray-800/60 text-gray-800',
        'rounded-sm border px-3 py-1 text-sm font-medium',
        variant
      )}
    >
      {children}
    </span>
  );
}
