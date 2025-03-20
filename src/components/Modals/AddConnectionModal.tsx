import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { redirect } from 'react-router-dom';
import { useModal } from '../../helpers/hooks/useModal';

type DeleteIntegrationModalProps = {
  name: string;
  link: string;
};

export default function AddConnectionModal({ name, link }: DeleteIntegrationModalProps) {
  const { closeModal } = useModal();

  return (
    <div className="w-md p-8">
      <div className="mb-4 inline-flex size-7 items-center justify-center rounded-full bg-blue-500 text-white outline-6 outline-blue-100">
        <FontAwesomeIcon className="text-sm" icon={faQuestion} />
      </div>

      <p className="mb-6 text-sm text-gray-700">You can add connection to {name} by clicking the button below.</p>
      <div className="flex gap-4">
        <button
          className="flex-1/2 grow cursor-pointer rounded-md border border-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:border-gray-300 hover:bg-gray-200"
          onClick={() => closeModal()}
        >
          Undo
        </button>
        <button
          className="flex-1/2 grow cursor-pointer rounded-md border bg-gray-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          onClick={() => {
            console.log('Connect');
            redirect(link);
            closeModal();
          }}
        >
          Connect
        </button>
      </div>
    </div>
  );
}
