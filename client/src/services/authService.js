import * as request from "./requester";

const baseUrl = "http://localhost:3030/users"

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password
    });

    return result;
};

export const register = async (email, password) => {
    const result = await request.post(`${baseUrl}/register`, {
        email,
        password
    });

    return result;
};