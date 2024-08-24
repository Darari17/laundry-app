import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-toastify";

export const authLogin = (credentials) => async (dispatch) => {
  dispatch({ type: "AUTH_REQUEST" });

  try {
    const response = await axiosInstance.post("/auth/login", credentials);
    const userData = response.data.data;

    localStorage.setItem("token", userData.token);
    window.location.href = "/products";

    dispatch({
      type: "AUTH_SUCCESS",
      payload: userData.user,
    });
  } catch (error) {
    dispatch({
      type: "AUTH_FAILURE",
      payload: error.response?.data?.message || "Login Failed",
    });
    toast.error(" Email / Password salah! ");
  }
};

export const authRegister = (userDetails) => async (dispatch) => {
  dispatch({ type: "AUTH_REQUEST" });

  try {
    const response = await axiosInstance.post("/auth/register", userDetails);
    const userData = response.data.data;
    const navigate = useNavigate();

    navigate("/auth/login");

    localStorage.setItem("token", userData.token);

    dispatch({
      type: "AUTH_SUCCESS",
      payload: userData.user,
    });
  } catch (error) {
    dispatch({
      type: "AUTH_FAILURE",
      payload: error.response?.data?.message || "Register Failed",
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("data");

  dispatch({
    type: "LOGOUT",
  });
};
