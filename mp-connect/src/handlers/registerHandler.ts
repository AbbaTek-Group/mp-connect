import axios from "axios";
import { RegisterProps } from "../types";

export async function registerHandler(user: RegisterProps) {
  const route = `http://localhost:5000/user`;

  axios
    .post(
      `${route}`,
      { userRegisterData: user },
      {
        withCredentials: true,
      }
    )
    .then((data: any) => console.log(data))
    .catch(function (error: any) {
      console.log(error);
    });
}
