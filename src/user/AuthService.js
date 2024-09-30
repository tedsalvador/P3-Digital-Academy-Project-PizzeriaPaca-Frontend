import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export default {
    async register(registerData) {
        try {
            const response = await axios.post(`${BASE_URL}/register`, registerData, {
                headers: {
                    'Content-Type': 'application/json',
                    'username': registerData.username,
                    'password': registerData.password,
                    'email': registerData.email,
                    'firstName': registerData.firstName,
                    'lastName': registerData.lastName,
                    'address': registerData.address,
                    'postalCode': registerData.postalCode,
                    'city': registerData.city,
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Error en el registro');
        }
    }
};