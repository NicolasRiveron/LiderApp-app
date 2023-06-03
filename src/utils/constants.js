const SERVER_IP = "localhost:5000";

export const ENV = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `http://${SERVER_IP}/api/v1`,
  API_ROUTES: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    REFRESHACCESTOKEN: "auth/refresh_access_token",
    USER_ME: "user/me",
    FORGETPASSWORD: "auth/forgot_password",
    RESETPASSWORD: "auth/reset_password",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh"
  }
};

const CLIENT_IP = "localhost:3000"

export const BASE_PATH = `${CLIENT_IP}`