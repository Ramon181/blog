import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const apiRest = axios.create({
    baseURL: "http://localhost:3001"
})

const initialState = {}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: async (state, action) => {
            try {
                const res = await apiRest.post("/user/login", action.payload);
                if (res.data.token) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    localStorage.setItem("role", "user");
                    state = JSON.parse(localStorage.getItem("user"))
                }

            } catch (error) {
                console.log(error.message);
            }
        },
        authState: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { login,authState } = authSlice.actions;

export default authSlice.reducer