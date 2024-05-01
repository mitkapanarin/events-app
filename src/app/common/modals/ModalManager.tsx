import TestModal from "../../features/scratch/TestModal";
import { useAppSelector } from "../../store/store";

const ModalManager = () => {
  const modalLookup = {
    TestModal,
  };

  const { type, data, open } = useAppSelector((state) => state.modals);

  let renderedModal;

  if (open && type) {
    const ModalComponent = (modalLookup as any)[type];
    renderedModal = <ModalComponent data={data} />;
  }
  return <span>{renderedModal}</span>;
};

export default ModalManager;
