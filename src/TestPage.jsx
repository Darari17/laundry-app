import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DeleteProduct from "./components/products/DeleteProduct";
import Logout from "./components/auth/Logout";

const TestPage = () => {
  // const { register, handleSubmit } = useForm();
  // const [storedData, setStoredData] = useState(null);

  // const submitButton = (data) => {
  //   setStoredData(data);
  // };

  // const handleLogout = () => {
  //   if (confirm("apakah anda ingin logout")) {
  //     setStoredData();
  //   } else {
  //   }
  // };

  return (
    // <div className="flex items-center justify-center h-screen">
    //   <Card className="w-2/4 h-3/4 bg-slate-400">
    //     <CardHeader>REGISTER</CardHeader>
    //     <CardBody>
    //       <form
    //         onSubmit={handleSubmit(submitButton)}
    //         className="grid px-4 space-y-4"
    //       >
    //         <input type="text" placeholder="name" {...register("name")} />
    //         <input
    //           type="text"
    //           placeholder="username"
    //           {...register("username")}
    //         />
    //         <input type="email" placeholder="email" {...register("email")} />
    //         <input
    //           type="password"
    //           placeholder="password"
    //           {...register("password")}
    //         />

    //         <Button type="submit" color="primary">
    //           submit
    //         </Button>

    //         <Button onClick={handleLogout}>logout</Button>

    //         {storedData ? (
    //           <>
    //             <p>{storedData.name}</p>
    //             <p>{storedData.username}</p>
    //             <p>{storedData.email}</p>
    //             <p>{storedData.password}</p>
    //           </>
    //         ) : (
    //           <p>No data available</p>
    //         )}

    //         <div>
    //           <p>{storedData ? storedData.username : "no data"}</p>
    //         </div>
    //       </form>
    //     </CardBody>
    //   </Card>
    // </div>

    <Logout />
  );
};

export default TestPage;
