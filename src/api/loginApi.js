import axios from "axios";
import { APP_CONFIG } from "../constants/config.js";

export function login(data) {
  try {
    return axios
      .post(`${APP_CONFIG.API_URL}login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  } catch (err) {
    return err;
  }
}
