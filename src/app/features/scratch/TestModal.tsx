import { useAppSelector } from "../../store/store";
import ModalWrapper from "../../common/modals/ModalWrapper";

const TestModal = () => {
  const { data } = useAppSelector((state) => state.modals);
  return (
    <ModalWrapper header={"Testing"}>
      <div> Test data is {data}</div>
    </ModalWrapper>
  );
};

export default TestModal;
