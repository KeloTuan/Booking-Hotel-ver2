import axios from 'axios';


export const postLogin = (userEmail, userPassword) => {
    return axios.post(`${process.env.REACT_APP_BACK_END_URL}/client/auth/login`, {
        email: userEmail,
        password: userPassword,
    });
}

export const postRegister = (userEmail, userPassword,userRetypePassword) => {
    return axios.post(`${process.env.REACT_APP_BACK_END_URL}/client/auth/register`, {
        email: userEmail,
        password: userPassword,
        retype_password:userRetypePassword,
        username:"",
        first_name:"",
        last_name:"",
        phone_number:""
    });
}


export const validateToken = (token) => {
    // Gửi token trong header Authorization (Bearer token) thay vì body
    return axios.get(`${process.env.REACT_APP_BACK_END_URL}/client/validate-token`, {
        headers: {
            authorization: `Bearer ${token}`,  // Đảm bảo token được gửi trong header
        }
    });
}

export const getProfileById=(userId)=>{
    return axios.get(`${process.env.REACT_APP_BACK_END_URL}/client/customer-client/${userId}`);
}

export const updateProfileById=(userId,updatedData)=>{
    return axios.put(`${process.env.REACT_APP_BACK_END_URL}/client/customer-client/${userId}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData)
    });
}

