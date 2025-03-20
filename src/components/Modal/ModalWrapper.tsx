import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '../../helpers/hooks/useModal';

interface Props extends React.PropsWithChildren<{}> {}

function ModalWrapper({ children }: Props) {
  const { closeModal } = useModal();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const modalRootElement = document.getElementById('modal');
  if (!modalRootElement) {
    console.error('Modal root element not found');
    return null;
  }

  return createPortal(
    <div
      className={'fixed top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center bg-gray-900/80'}
      onClick={handleBackdropClick}
    >
      <div
        className={
          'absolute right-4 left-4 flex max-h-screen w-auto max-w-full min-w-xs transform flex-col overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:right-auto sm:left-auto sm:my-8 sm:max-w-lg sm:data-closed:translate-y-0 sm:data-closed:scale-95'
        }
        style={{ boxShadow: '-15px 4px 28px 0px rgba(0, 0, 0, 0.08)' }}
      >
        <div
          className="absolute top-4 right-4 cursor-pointer text-lg text-gray-500 hover:text-gray-900"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        {children}
      </div>
    </div>,
    modalRootElement
  );
}

export default ModalWrapper;
