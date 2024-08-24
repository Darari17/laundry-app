import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { delCustomer, getCustomer } from "../../store/actions/customerAction";

const DeleteCustomer = ({ customerId, customerName }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(delCustomer(id));
    dispatch(getCustomer());
    toast.success("Deleting Successfully");
  };

  return (
    <>
      <Button onPress={onOpen} isIconOnly variant="light" size="sm" radius="sm">
        <DeleteIcon />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        hideCloseButton
        size="xs"
      >
        <ModalContent className="flex items-center justify-center">
          {(onClose) => {
            return (
              <>
                <ModalHeader className="text-2xl font-semibold">
                  Delete
                </ModalHeader>
                <ModalBody>
                  Are you sure you want to delete "{customerName}" ?
                </ModalBody>
                <ModalFooter className="gap-x-6">
                  <Button onPress={onClose} color="primary">
                    Close
                  </Button>
                  <Button onPress={() => onDelete(customerId)} color="danger">
                    Delete
                  </Button>
                </ModalFooter>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteCustomer;
