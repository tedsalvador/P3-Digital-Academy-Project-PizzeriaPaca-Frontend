import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export default {
    async register(user) {
        try {
            const response = await axios.post(`${BASE_URL}/register`, {}, {
                headers: {
                    name: user.name,
                    lastName: user.lastName,
                    username: user.username,
                    Email: user.email,
                    Password: user.password,
                    city: user.city,
                    address: user.address,
                    postalCode: user.postalCode,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Error en el registro');
        }
    },

    async login(loginData) {
        try {
            const response = await axios.post(`${BASE_URL}/login`, {}, {
                headers: {
                    username: loginData.username,
                    Password: loginData.password,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Error en el inicio de sesión');
        }
    }
};