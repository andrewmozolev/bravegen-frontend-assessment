import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModal } from '../../helpers/hooks/useModal';
import { Integration } from '../../interfaces/Integrations';

type DeleteIntegrationModalProps = {
  integration: Integration;
};

export default function DeleteIntegrationModal({ integration }: DeleteIntegrationModalProps) {
  const { closeModal } = useModal();
  return (
    <div className="w-md p-8">
      <div className="mb-4 inline-flex size-7 items-center justify-center rounded-full bg-red-500 text-white outline-6 outline-red-100">
        <FontAwesomeIcon className="text-sm" icon={faTimes} />
      </div>

      <h2 className="mb-3 text-lg font-semibold">Remove "{integration.name}" Connection?</h2>
      <p className="mb-6 text-sm text-gray-700">
        Are you sure you want to remove {integration.integration} "{integration.name}" connection?
      </p>
      <div className="flex gap-4">
        <button
          className="flex-1/2 grow cursor-pointer rounded-md border border-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:border-gray-300 hover:bg-gray-200"
          onClick={() => closeModal()}
        >
          Undo
        </button>
        <button
          className="flex-1/2 grow cursor-pointer rounded-md border bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-500"
          onClick={() => {
            console.log('Remove');
            closeModal();
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
