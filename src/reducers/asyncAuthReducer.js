import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthService } from "../services/apiAuthServices";

export const userSignupAction = createAsyncThunk(
  "userSignupAction",
  async (credentials) => {
    const response = await apiAuthService.signup(credentials);
    return response;
  }
);
export const userLoginAction = createAsyncThunk(
  "userLoginAction",
  async (credentials, thunkApi) => {
    const response = await apiAuthService.login(credentials);
    setTimeout(() => {
      thunkApi.dispatch(getUserProfileAction());
    }, 1500);
    return response;
  }
);
export const getUserProfileAction = createAsyncThunk(
  "getUserProfileAction",
  async () => {
    const response = await apiAuthService.getUserProfile();
    return response.users[0];
  }
);
