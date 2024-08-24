import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import myImage from "../../assets/icons/logo.png";
import { logout } from "../../store/actions/authAction";
import myBackground from "../../assets/icons/background.png";
import Logout from "../auth/Logout";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("data"));

  // const handleLogout = () => {
  //   try {
  //     dispatch(logout());
  //     confirm("Are You Sure?");
  //     navigate("/auth/login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {user ? (
        <div>
          <Navbar
            maxWidth="full"
            isBlurred={false}
            className="bg-[#61777F] text-slate-100"
          >
            <NavbarContent justify="start">
              <NavbarItem className="font-semibold mx-5">
                <Link className="text-slate-100" to={"/"}>
                  <Image src={myImage} className="w-[170px]" />
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="center">
              <NavbarItem className="font-semibold mx-5">
                <Link className="text-slate-100" to={"/products"}>
                  Products
                </Link>
              </NavbarItem>
              <NavbarItem className="font-semibold mx-5">
                <Link className="text-slate-100" to={"/customers"}>
                  Customers
                </Link>
              </NavbarItem>
              <NavbarItem className="font-semibold mx-5">
                <Link className="text-slate-100" to={"/bills"}>
                  Bills
                </Link>
              </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem>
                {user.username.charAt(0).toUpperCase() +
                  user.username.slice(1, 8)}
              </NavbarItem>
              <Divider
                orientation="vertical"
                className="h-[60%] mx-1 w-1 place-items-center rounded-lg "
              />
              <NavbarItem className="mr-3">
                <Logout />
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
      ) : (
        <div>
          <img
            src={myBackground}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <Navbar
            maxWidth="full"
            isBlurred={false}
            className="bg-transparent absolute top-3 text-slate-100"
          >
            <NavbarContent justify="start">
              <NavbarItem className="font-semibold mx-5">
                <Link className="text-slate-100" to={"/"}>
                  <Image src={myImage} className="w-[170px]" />
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="font-semibold mr-5">
                <Link className="text-slate-100" to={"/auth/register"}>
                  <Button
                    className="font-semibold font-sans text-slate-200 "
                    color="warning"
                    size="lg"
                    variant="shadow"
                  >
                    GET STARTED
                  </Button>
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default Header;
