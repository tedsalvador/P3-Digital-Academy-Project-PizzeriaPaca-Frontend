import AuthService from '@/user/AuthService';

export default {
    async register(registerData) {
        try {
            const data = await AuthService.register(registerData);
            return data;
        } catch (error) {
            throw error;
        }
    }
};