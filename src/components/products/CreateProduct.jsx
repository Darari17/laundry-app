import {
  useDisclosure,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import AddIcon from "../../assets/icons/AddIcon";
import { useDispatch } from "react-redux";
import { getProduct, postProduct } from "../../store/actions/productAction";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "../schema";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const form = useForm({
    defaultValues: {
      name: "",
      price: 0,
    },
    resolver: zodResolver(ProductSchema),
  });

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const submitButton = (data) => {
    dispatch(postProduct(data));
    onOpenChange(false);
    form.reset();
    toast.success("Product added successfully");
  };

  return (
    <>
      <Tooltip content={"Create Product"}>
        <Button
          onPress={onOpen}
          color="default"
          variant="light"
          className="font-semibold text-lg"
          isIconOnly
        >
          <AddIcon />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        radius="md"
      >
        <ModalContent>
          <form onSubmit={form.handleSubmit(submitButton)}>
            <ModalHeader>Create Product</ModalHeader>
            <ModalBody>
              <Controller
                name={"name"}
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      label="Name"
                      type="text"
                      size="sm"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />
              <div className="flex justify-around">
                <Controller
                  name={"price"}
                  control={form.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Input
                        {...field}
                        label="Price"
                        type="number"
                        size="sm"
                        onFocus={() => {
                          if (field.value === 0) {
                            field.onChange("");
                          }
                        }}
                        onChange={(e) => {
                          const valueAsNumber = parseInt(e.target.value, 10);
                          field.onChange(
                            isNaN(valueAsNumber) ? "" : valueAsNumber
                          );
                        }}
                        isInvalid={Boolean(fieldState.error)}
                        errorMessage={fieldState.error?.message}
                      />
                    );
                  }}
                />
                <p className=" items-center justify-center flex px-2 font-semibold text-xl">
                  /Kg
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                className="flex items-center justify-end"
                color="primary"
              >
                Create
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateProduct;
