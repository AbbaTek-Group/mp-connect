import axios from "axios";
import { LoginProps } from "../types";

export async function loginHandler(user: LoginProps) {
  const route = `http://localhost:5000/user`;

  axios
    .put(
      `${route}`,
      { loginData: user },
      {
        withCredentials: true,
      }
    )
    .then((data: any) => console.log(data))
    .catch(function (error: any) {
      console.log(error);
    });
}
