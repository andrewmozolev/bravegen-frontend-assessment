import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={clsx('rounded-sm bg-gray-900 px-3 py-1 text-sm text-white')}>
      {children}
    </button>
  );
}
