import axios from "axios";

const BASEURL = 'https://frontend-test-api.aircall.io';

export const getAuth = async (username='taseer', password='hi123') => {
    const userDetails = { username, password };
    const response = await axios.post(`${BASEURL}/auth/login`, userDetails);
    if(response.status == 201) {
        return response;
    }

    throw new Error('Something went wrong');
};

export const getCalls = async () => {

    const authResponse = await getAuth();
    const { access_token } = await authResponse.data;
    const config = {
        headers: { Authorization: `Bearer ${access_token}` }
    };
    
    const response = await axios.get(`${BASEURL}/calls`, config);
    if(response.status == (200 || 201)) {
        return response;
    }
    
    throw new Error('Something went wrong'); 
};

export const getPaginatedCalls = async (offset, limit) => {

    const authResponse = await getAuth();
    const { access_token } = await authResponse.data;
    const config = {
        headers: { Authorization: `Bearer ${access_token}` }
    };
    
    const response = await axios.get(`${BASEURL}/calls?offset=${offset}&limit=${limit}`, config);
    if(response.status == (200 || 201)) {
        return response;
    }
    
    throw new Error('Something went wrong'); 
};

export const toggleArchiveCall = async (id) => {

    const { access_token } = await getRefreshToken();
    const config = {
        headers: { Authorization: `Bearer ${access_token}` },
    };

    console.log(access_token)
 
    const response = await axios.put(`${BASEURL}/calls/${id}/archive`, null, config);
    if(response.status == (200 || 201)) {
        return response;
    }
    
    throw new Error('Something went wrong'); 
};

export const getCurrentUser = async () => {

    const authResponse = await getAuth();
    const { access_token } = authResponse.data;
    const config = {
        headers: { Authorization: `Bearer ${access_token}` }
    };
    
    const response = await axios.get(`${BASEURL}/me`, config);
    if(response.status == (200 || 201)) {
        return response;
    }
    
    throw new Error('Something went wrong'); 
};

export const getCallNote = async (id="ee5496a1-8b60-46df-8336-8a090ab2866a") => {

    const authResponse = await getAuth();
    const { access_token } = await authResponse.data;
    const config = {
        headers: { Authorization: `Bearer ${access_token}` }
    };
    
    const response = await axios.get(`${BASEURL}/calls/${id}/note`, config);
    console.log(response)
    if(response.status == (200 || 201)) {
        return response;
    }
    
    throw new Error('Something went wrong'); 
};

export const getRefreshToken = async () => {
    const authResponse = await getAuth();
    const { access_token } = await authResponse.data;
    
    const config = {
        headers: { Authorization: `Bearer ${access_token}` }
    };
    
    const response = await axios.post(`${BASEURL}/auth/refresh-token`, null, config);
    return response.data;     
};

export const addNote = async (id, noteValue) => {

    const { access_token } = await getRefreshToken();

    const config = {
        headers: { Authorization: `Bearer ${access_token}` },
    };
    
    const response = await axios.post(`${BASEURL}/calls/${id}/note`, { content: noteValue }, config);
    
    throw new Error('Something went wrong'); 
};

export const toggleArchiveCalls = async (id) => {
    const { access_token } = await getRefreshToken();

    const config = {
        headers: { Authorization: `Bearer ${access_token}` },
    };
    
    const response = await axios.put(`${BASEURL}/calls/${id}/archive`, null, config);
};