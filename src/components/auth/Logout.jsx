import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LogoutIcon from "../../assets/icons/LogoutIcon";

const Logout = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <>
      <Tooltip content="Logout" color="danger">
        <Button
          onPress={onOpen}
          variant="light"
          fullWidth
          size="md"
          className="text-medium text-slate-50"
          color="danger"
          isIconOnly
        >
          <LogoutIcon />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="justify-center items-center "
        size="xs"
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => {
            return (
              <>
                <ModalHeader>Logout</ModalHeader>
                <ModalBody>Are you sure ?</ModalBody>
                <ModalFooter className="gap-x-6">
                  <Button onPress={onClose}>No</Button>
                  <Button onPress={handleLogout} color="danger">
                    Yes
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

export default Logout;
