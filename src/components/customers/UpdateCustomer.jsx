import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { EditIcon } from "../../assets/icons/EditIcon";
import { useDispatch } from "react-redux";
import { putCustomer, getCustomer } from "../../store/actions/customerAction";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerSchema } from "../schema";

const UpdateCustomer = ({ id }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const form = useForm({
    defaultValues: {
      id: id,
      name: "",
      phoneNumber: "",
      address: "",
    },
    resolver: zodResolver(CustomerSchema),
  });

  const updateDataCustomer = async (data) => {
    try {
      await dispatch(putCustomer(data));
      dispatch(getCustomer());
      onOpenChange(false);
      form.reset();
      toast.success("Update Success");
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        variant="light"
        isIconOnly={true}
        radius="sm"
        size="sm"
      >
        <EditIcon />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        radius="md"
      >
        <ModalContent>
          <form onSubmit={form.handleSubmit(updateDataCustomer)}>
            <ModalHeader>Update Customer</ModalHeader>
            <ModalBody>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      label="Customer Name"
                      type="text"
                      size="sm"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />
              <Controller
                name="phoneNumber"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      label="Phone Number"
                      type="number"
                      size="sm"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />
              <Controller
                name="address"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      label="Address"
                      type="text"
                      size="sm"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                className="flex items-center justify-end"
                color="primary"
              >
                Update
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateCustomer;
