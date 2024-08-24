import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { delProduct, getProduct } from "../../store/actions/productAction";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import { toast } from "react-toastify";

const DeleteProduct = ({ productId, productName }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(delProduct(id));
    dispatch(getProduct());
    toast.success("Deleting successfully");
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
                  Are you sure you want to delete "{productName}" ?
                </ModalBody>
                <ModalFooter className="gap-x-6">
                  <Button onPress={onClose} color="primary">
                    Close
                  </Button>
                  <Button onPress={() => onDelete(productId)} color="danger">
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

export default DeleteProduct;
