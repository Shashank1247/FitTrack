import axios from 'axios';

const api = axios.create({
    baseURL:  'http://192.168.1.154:5000',
})

export const register = async (username, password) => {
    try {
        const response = await api.post('/register',{username,password});
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const login = async( username, password) => {
    try {
        const response = await api.post('/login',{username,password});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}

export const getData = async ()=> {
    try {
        const response = await api.get('/data');
        return response.data;
    } catch (error ) {
        console.error(error);
    }
};

export const postData = async (data) => {
    try {
        const response = await api.post('/data', data);
        return response.data;
    } catch ( error) {
        console.error(error);
    }

};

