import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

type DropdownProps = {
  content: React.ReactNode;
  children: (isOpen: boolean) => React.ReactNode;
};

export default function Dropdown({ content, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'left' | 'right'>('right');
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const actionRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Update position based on the action element's position
  useEffect(() => {
    if (actionRef.current) {
      const actionRect = actionRef.current.getBoundingClientRect();
      const isSpaceOnRight = actionRect.right + 200 <= window.innerWidth; // 200 is an estimated width of dropdown content

      setPosition(isSpaceOnRight ? 'right' : 'left');
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !actionRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="relative">
      <div ref={actionRef} onClick={toggleDropdown}>
        {children(isOpen)}
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={clsx(
            'absolute top-[calc(100%+8px)] z-10 rounded-md border border-gray-300 bg-white',
            position === 'left' ? 'right-0' : 'left-0'
          )}
          style={{
            left: position === 'right' ? `0px` : 'auto',
            right: position === 'left' ? `0px` : 'auto',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}
