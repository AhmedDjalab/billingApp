import apiService from '../../api/index';

const login = (email: string, password: string) =>
{
return apiService.post('/users/authenticate',
 { "email":email, "password":password });}


export default { login };
