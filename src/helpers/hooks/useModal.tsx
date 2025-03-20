import { useContext } from 'react';
import { ModalContext, ModalContextType } from '../../components/Modal/Modal';

export const useModal = (): ModalContextType => {
  const context = useContext<ModalContextType>(ModalContext);
  return context;
};
