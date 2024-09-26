import AuthService from '@/services/AuthService';

export default {
    async register(user) {
        try {
            const data = await AuthService.register(user);
            return data;
        } catch (error) {
            throw error;
        }
    },

    async login(loginData) {
        try {
            const data = await AuthService.login(loginData);
            return data;
        } catch (error) {
            throw error;
        }
    }
};