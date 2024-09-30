import RegisterService from "./RegisterService";



export default {
    async register(registerData) {
        try {
            const data = await RegisterService.register(registerData);
            return data;
        } catch (error) {
            throw error;
        }
    }
};