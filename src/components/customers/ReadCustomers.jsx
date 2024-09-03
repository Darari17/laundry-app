import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useEffect } from "react";
import Header from "../navbar/Header";
import CreateCustomer from "../customers/CreateCustomer";
import UpdateCustomer from "../customers/UpdateCustomer";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../store/actions/customerAction";
import DeleteCustomer from "./DeleteCustomer";

const ReadCustomers = () => {
  const customers = useSelector((state) => state.customer.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCustomer());
    }, 500);
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <Table aria-label="Customer List" className="w-3/5 h-4/5">
          <TableHeader className="text-lg font-semibold">
            <TableColumn>NAME</TableColumn>
            <TableColumn>PHONE NUMBER</TableColumn>
            <TableColumn>ADDRESS</TableColumn>
            <TableColumn>
              <div className="flex justify-end">
                <CreateCustomer />
              </div>
            </TableColumn>
          </TableHeader>

          <TableBody>
            {customers.map((customer) => {
              return (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.phoneNumber}</TableCell>
                  <TableCell>{customer.address}</TableCell>
                  <TableCell className="flex justify-end space-x-2">
                    <UpdateCustomer
                      id={customer.id}
                      name={customer.name}
                      phoneNumber={customer.phoneNumber}
                      address={customer.address}
                    />
                    <DeleteCustomer
                      customerId={customer.id}
                      customerName={customer.name}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ReadCustomers;
