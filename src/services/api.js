/*global axios*/
export async function auth(params) {
    return axios.post('http://msapi.bbwport.com:8082/user/auth',params);
}